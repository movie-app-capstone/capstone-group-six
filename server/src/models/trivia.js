//  setup
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  schema
const triviaSchema = new Schema({
    question: { type: String, required: true },
    correctAnswer: { type: String, required: true },
    wrongAnswers: { type: Array, required: true },
});

module.exports = mongoose.model('Trivia', triviaSchema);