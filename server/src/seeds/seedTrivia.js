// setup
const mongoose = require('mongoose');
const Trivia = require('../models/trivia');

//  seed
const seedTrivia = async () => {
    try {
        const triviaOne = new Trivia({
            question: 'Which movie is not based on a book?',
            correctAnswer: 'Ace Ventura: Pet Detective',
            wrongAnswers: ['Dune', 'The Shining', 'Fight Club']
        })
        await triviaOne.save();

        const triviaTwo = new Trivia({
            question: `Who was the 'King of Hollywood' during the Golden Age of Hollywood?`,
            correctAnswer: 'Clark Gable',
            wrongAnswers: ['Charlie Chaplin', 'Buster Keaton', 'Leslie Howard']
        })
        await triviaTwo.save();

        const triviaThree = new Trivia({
            question: 'Where were the Lord of the Rings movies filmed?',
            correctAnswer: 'New Zealand',
            wrongAnswers: ['Ireland', 'Chile', 'Australia']
        })
        await triviaThree.save();

        console.log('..trivia seeded..');
        return;
    } catch (error) {
        console.error('..failed to seed trivia..', error);
        process.exit(1);
    }
}

module.exports = seedTrivia;