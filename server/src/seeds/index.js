//  setup
const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const Movie = require('../models/movie');
const User = require('../models/user');
const Trivia = require('../models/trivia');

const movies = require('./seedReviews');
const users = require('./seedUsers');
const trivias = require('./seedTrivia');

//  database connection
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const dataBase = mongoose.connection;
dataBase.on('error', console.error.bind(console, '..connection error..'));
dataBase.once('open', () => {
    console.log('..database connected..');
});

//  seeds
const randomChoice = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    try {
        await Movie.deleteMany({});
        await User.deleteMany({});
        await Trivia.deleteMany({});

        const userIds = await users();
        await movies(userIds);
        await trivias();

        console.log('..seeds complete..');
        process.exit(0);
    } catch (error) {
        console.error('..failed to seed database..', error);
        process.exit(1);
    }
}

seedDB().then(() => {
    mongoose.connection.close();
    console.log('..database closed..');
});