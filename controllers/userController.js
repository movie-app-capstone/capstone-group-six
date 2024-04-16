import { StatusCodes } from 'http-status-codes';
import fs from 'fs';
import AWS from 'aws-sdk';
import User from '../models/UserModel.js';
import Review from '../models/ReviewModel.js';
import { formatImage } from '../middleware/multerMiddleware.js';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const s3 = new AWS.S3();

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const reviews = await Review.countDocuments();
  res.status(StatusCodes.OK).json({ users, reviews });
};

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;
  delete newUser.role;

  if (req.file) {
    const file = formatImage(req.file);

    const upload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: file.name,
        Body: fs.createReadStream(file.path),
      },
    });

    const data = await upload.promise();

    newUser.avatar = data.Location;
    newUser.avatarKey = file.name;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updatedUser.avatarKey) {
    var params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: updatedUser.avatarKey,
    };

    await s3.deleteObject(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else console.log(data); // successful response
    });
  }

  res.status(StatusCodes.OK).json({ msg: 'update user' });
};