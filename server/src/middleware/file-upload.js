//  setup
const multer = require('multer');

//  extension validation
const MIME_TYPE_MAP = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
    'image/png': 'png'
};

//  multer configuration
const fileUpload = multer({
    limits: 500000,
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads/images');
        },
        filename: (req, file, cb) => {
            const extension = MIME_TYPE_MAP[file.mimetype];
            cb(null, Date.now() + '.' + extension);
        }
    }),
    fileFilter: (req, file, cb) => {
        const validExtension = !!MIME_TYPE_MAP[file.mimetype];
        let error = validExtension ? null : new Error('..invalid mime type..');
        cb(error, validExtension);
    }
});

module.exports = fileUpload;