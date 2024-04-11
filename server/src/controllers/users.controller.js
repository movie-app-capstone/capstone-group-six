//  setup
const HttpError = require('../models/http.error');
const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');

//  routes - GET
const getAllUsers = (req, res, next) => {
    res.json({ users });
};

//  routes - POST
const signupUser = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        throw new HttpError('..invalid input..', 422);
    }
    
    try {
        const { name, email, password } = req.body;
        const existingUser = usersdb.find(user => user.email === email);
        if(existingUser) {
            throw new HttpError('..user already exists with that email..', 422);
        }

        const createdUser = {
            id: uuid(),
            name,
            email,
            password
        };

        usersdb.push(createdUser);
        res.status(201).json({user: createdUser})
    } catch (error) {
        next(error);
    }
}

const loginUser = (req, res, next) => {
    try {
        const { email, password } = req.body;
        const confirmedUser = usersdb.find(user => user.email === email);
        if(!confirmedUser || confirmedUser.password !== password) {
            throw new HttpError('..invalid credentials..', 401);
        }

        res.json({message: '..logged in..'});
    } catch (error) {
        next(error);
    }
}

exports.getAllUsers = getAllUsers;
exports.signupUser = signupUser;
exports.loginUser = loginUser;