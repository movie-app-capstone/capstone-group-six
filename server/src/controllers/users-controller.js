//  setup
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

//  routes - GET
const getAllUsers = async (req, res, next) => {
    try {
        //  find and map all users sans password
        const users = await User.find({}, '-password');
        res.json({ users: users.map(user => user.toObject({ getters: true }))})
    } catch (error) {
        const failed = new HttpError('..failed to get users..', 500);
        return next(failed);
    }
};

//  routes - POST
const signupUser = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return next(new HttpError('..invalid input..', 422));
    }
    
    //  create new user after validation by email
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email: email })
        if(existingUser) {
            const error =  HttpError('..user already exists with that email..', 422);
            return next(error);
        }

        let hashedPassword; 
        hashedPassword = await bcrypt.hash(password, 12);

        const createdUser = new User({
            name,
            email,
            password: hashedPassword,
            image: "img", //req.file.path, 
            movies: []
        })

        //  save new user to db
        await createdUser.save();

        //  create token for user
        let token;
        token = jwt.sign(
            { userId: createdUser.id, email: createdUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(201).json({ userId: createdUser.id, email: createdUser.email, token: token });
    } catch (error) {
        const failed = new HttpError('..failed to signup new user..', 500);
        return next(failed);
    }
}

const loginUser = async (req, res, next) => {
    try {
        //  check if user exists and compare passwords
        const { email, password } = req.body;
        const confirmedUser = await User.findOne({ email: email });
        const checkPassword = await bcrypt.compare(password, confirmedUser.password);

        if(!confirmedUser) {
            return next(new HttpError('..invalid credentials..', 403));
        }

        if(!checkPassword) {
            return next(new HttpError('..invalid credentials..', 401));
        }

        let token;
        token = jwt.sign(
            { userId: confirmedUser.id, email: confirmedUser.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({
            message: '..logged in..',
            userId: confirmedUser.id,
            email: confirmedUser.email,
            token: token 
        });
    } catch (error) {
        const failed = new HttpError('..failed to login..', 500);
        return next(failed);
    }
}

exports.getAllUsers = getAllUsers;
exports.signupUser = signupUser;
exports.loginUser = loginUser;