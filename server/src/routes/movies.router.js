//  setup
const express = require('express');
const { check } = require('express-validator');
const moviesRouter = express.Router();
const moviesController = require('../controllers/movies.controller');

//  routes - GET
moviesRouter.get('/:movieid', moviesController.getMovieById);
moviesRouter.get('/user/:userid', moviesController.getMoviesByUserId);

//  routes - POST
moviesRouter.post(
    '/', 
    [
    //  validation
    check('title').not().isEmpty(),
    check('year').not().isEmpty(),
    check('rating').not().isEmpty(),
    check('review').not().isEmpty().isLength({min: 5, max: 250})
    ],
    moviesController.createMovieReview
);

//  routes - PATCH
moviesRouter.patch('/:movieid', moviesController.updateMovieReview);

//  routes - DELETE
moviesRouter.delete('/movieid', moviesController.deleteMovieReview);

module.exports = moviesRouter;