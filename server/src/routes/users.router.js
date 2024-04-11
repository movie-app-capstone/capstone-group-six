//  setup
const express = require('express');
const { check } = require('express-validator');
const usersController = require('../controllers/users.controller');
const usersRouter = express.Router();

//  routes - GET
usersRouter.get('/', usersController.getAllUsers);

//  routes - POST
usersRouter.post('/signup',
    [
        check('name').not().isEmpty().isLength({max: 50}),
        check('email').normalizeEmail().isEmail(),
        check('password').isLength({min: 10})
    ],
    usersController.signupUser
);

usersRouter.post('/login', usersController.loginUser);

//  routes - PATCH


//  routes - DELETE


module.exports = usersRouter;