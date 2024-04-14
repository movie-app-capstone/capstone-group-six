//  setup
const HttpError = require('../models/http-error');
const jwt = require('jsonwebtoken');

//  middleware
module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS') {
        return next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        if(!token) {
            throw new Error('..header token error..');
        }
        //  verify and pass decoded token for use
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = { userId: decodedToken.userId };
        next();
    } catch (error) {
        const failed = new HttpError('..authentication failed..', 403);
        return next(failed);
    };
}