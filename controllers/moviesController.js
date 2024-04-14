//  setup
const HttpError = require('../models/http.error');
const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
const Movie = require('../models/movie');

//  routes - GET
const getMovieById = (req, res, next) => {
    try {
        const movieId = req.params.movieid;
        const movie = movies.find(movie => {
            return movie.id === movieId;
        })

        if(!movie) {
            throw new HttpError('..movie not found..', 404);
        }

        res.json({movie});
    } catch (error) {
        next(error);
    }
}

const getMoviesByUserId = (req, res, next) => {
    try {
        const userId = req.params.userid;
        const userMovies = movies.filter(movie => {
            return movie.review === userId;
        });

        if(!movie || movie.length === 0) {
            return next(
                new HttpError('..user review(s) not found..', 404)
            );
        }

        res.json({userMovies});
    } catch (error) {
        next(error);
    }
}

//  routes - POST
const createMovieReview = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return next(new HttpError('..invalid input..', 422));
    }

    try {
        const { title, year, rating, review, userId } = req.body;
        const newReview = {
            id: uuid(),
            year,
            title,
            rating,
            review,
            userId
        };

        movies.push(newReview);
        res.status(201).json({review: newReview});
    } catch (error) {
        next(error);
    }
}

//  routes - PATCH
const updateMovieReview = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        throw new HttpError('..invalid input..', 422);
    }

    try {
        const { id, rating, review, userId } = req.body;
        const movieId = req.params.id;

        //  find the movie in the db and copy it
        const updatedReview = { ...db.find(movie => movie.id === movieId) };
        const movieIndex = db.findIndex(movie => movie.id === movieId);
        updatedReview.rating = rating;
        updatedReview.review = review;

        //  replace with updated data in the db
        db[movieIndex] = updatedReview;
        res.status(200).json({review: updatedReview});
    } catch (error) {
        next(error);
    }
}

//  routes - DELETE
const deleteMovieReview = (req, res, next) => {
    try {
        const movieId = req.params.id;
        if(!movieId.find(movie => movie.id === movieId)) {
            throw new HttpError('..movie review not found..', 404)
        }

        //  filter out the movie from the db
        db = db.filter(movie => movie.id !== movieId);
        res.status(200).json({ message: '..movie review deleted..' });
    } catch (error) {
        next(error);
    }
}

exports.getMovieById = getMovieById;
exports.getMoviesByUserId = getMoviesByUserId;
exports.createMovieReview = createMovieReview;
exports.updateMovieReview = updateMovieReview;
exports.deleteMovieReview = deleteMovieReview;