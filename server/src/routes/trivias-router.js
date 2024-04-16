//  setup
const express = require('express');
const { check } = require('express-validator');
const triviasController = require('../controllers/trivias-controller');
const triviasRouter = express.Router();

//  routes - GET
triviasRouter.get('/', triviasController.getAllTrivias);

//  routes - POST
triviasRouter.post(
    '/',
    [
        check('question').not().isEmpty().isLength({max: 150}),
        check('correctAnswer').not().isEmpty(),
        check('wrongAnswers').isArray({min: 3, max: 3})
    ],
    triviasController.createTrivia
);

//  routes - DELETE
triviasRouter.delete('/:triviaid', triviasController.deleteTriviaById);

module.exports = triviasRouter;