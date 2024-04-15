//  setup
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const Trivia = require('../models/trivia');

//  routes - GET
const getAllTrivias = async (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return next(new HttpError('..invalid input..', 422));
    }

    try {
        const trivias = await Trivia.find();
        res.json({ trivias: trivias.map(trivia => trivia.toObject({ getters: true })) });
    } catch (error) {
        const failed = new HttpError('..failed to find trivias..', 500);
        return next(failed);
    }
}

//  routes - POST
const createTrivia = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return next(new HttpError('..invalid input..', 422));
        }

        const { question, correctAnswer, wrongAnswers } = req.body;
        const createdTrivia = new Trivia({
            question,
            correctAnswer,
            wrongAnswers
        });

        await createdTrivia.save();
        res.status(201).json({ trivia: createdTrivia.toObject({ getters: true }) });
    } catch (error) {
        const failed = new HttpError('..failed to create trivia..', 500);
        return next(failed);
    }
}

//  routes - DELETE
const deleteTriviaById = async (req, res, next) => {
    try {
        const triviaId = req.params.triviaid;
        const trivia = await Trivia.findById(triviaId);

        if(!trivia) {
            const error = new HttpError('..trivia not found..', 404);
            return next(error);
        }

        await Trivia.deleteOne(trivia);
        res.json({ message: '..trivia deleted..'});
    } catch (error) {
        const failed = new HttpError('..failed to delete trivia..', 500);
        return next(failed);
    }
}

module.exports = {
    getAllTrivias,
    createTrivia,
    deleteTriviaById
}