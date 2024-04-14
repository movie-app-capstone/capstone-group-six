//  setup
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const Movie = require('../models/movie');
const User = require('../models/user');

//  routes - GET
const getMovieById = async (req, res, next) => {
    try {
        const movieId = req.params.movieid;
        const movie = await Movie.findById(movieId);

        if(!movie) {
            const error = new HttpError('..movie not found..', 404);
            return next(error);
        };

        //  return the movie
        res.json({ movie: movie.toObject( {getters: true } )});
    } catch (error) {
        const failed = new HttpError('..failed to find movie..', 500);
        return next(failed);
    }
}

const getMoviesByUserId = async (req, res, next) => {
    try {
        const userId = req.params.userid;
        const userMovies = await Movie.find({ creator: userId });

        if(!userMovies || userMovies.length === 0) {
            const error = new HttpError('..user review(s) not found..', 404);
            return next(error);  
        };

        //  return movie review(s) by user
        res.json({ movies: userMovies.map(movie => movie.toObject( {getters: true } )) });
    } catch (error) {
        const failed = new HttpError('..failed to find movie review(s)..', 500);
        return next(failed);
    }
}

//  routes - POST
const createMovieReview = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return next(new HttpError('..invalid input..', 422));
    }

    try {
        const { title, year, rating, review } = req.body;
        const newReview = new Movie({
            title,
            year,
            rating,
            review,
            creator: req.userData.userId
        })
        
        //  check if user exists
        const user = await User.findById(req.userData.userId);
        if(!user) {
            const error = new HttpError('..user not found..', 404);
            return next(error);
        }

        //  save to db
        await newReview.save();
        user.movies.push(newReview);
        await user.save();

        res.status(201).json({ movie: newReview.toObject({ getters: true })});
    } catch (error) {
        const failed = new HttpError('..failed to create review..', 500);
        return next(failed);
    }
}

//  routes - PATCH
const updateMovieReview = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return next(new HttpError('..invalid input..', 422));
    }

    try {
        const { rating, review } = req.body;
        const movieId = req.params.movieid;

        //  find the movie in the db
        const movie = await Movie.findById(movieId);
        if(movie.creator.toString() !== req.userData.userId) {
            const error = new HttpError('..edit not authorized..', 401);
            return next(error);
        };
        movie.rating = rating;
        movie.review = review; 

        //  replace with updated data in the db
        await movie.save();
        res.status(200).json({ movie: movie.toObject( {getters: true } )});
    } catch (error) {
        const failed = new HttpError('..failed to update review..', 500);
        return next(failed);
    }
}

//  routes - DELETE
const deleteMovieReview = async (req, res, next) => {
    try {

        //  find the review and pull from user
        const movieId = req.params.movieid;
        const movie = await Movie.findById(movieId).populate('creator');

        if(!movie) {
            const error = new HttpError('..movie not found..', 404);
            return next(error);
        }

        if(movie.creator.id !== req.userData.userId) {
            const error = new HttpError('..deletion not authorized..', 401);
            return next(error);
        }

        const creator = movie.creator;
        creator.movies.pull(movie);
        await creator.save();

        //  delete the review from the db
        await movie.deleteOne({ _id: movieId });
        res.status(200).json({ message: '..movie review deleted..' });
    } catch (error) {
        const failed = new HttpError('..failed to delete review..', 500);
        return next(failed);
    }
}

exports.getMovieById = getMovieById;
exports.getMoviesByUserId = getMoviesByUserId;
exports.createMovieReview = createMovieReview;
exports.updateMovieReview = updateMovieReview;
exports.deleteMovieReview = deleteMovieReview;