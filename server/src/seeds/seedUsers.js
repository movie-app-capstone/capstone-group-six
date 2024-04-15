//  setup
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

//  seed
const seedUsers = async () => {
    try {
        const hashedPassword = await bcrypt.hash('ilovemovies', 12);

        const userOne = new User({
        name: 'skalnik',
        email: 'friedspam@musubi.com',
        password: hashedPassword,
        image: 'img',
        movies: []
        })
        await userOne.save();

        const userTwo = new User({
            name: 'muta',
            email: 'cacodemon@doom.com',
            password: hashedPassword,
            image: 'img',
            movies: []
        })
        await userTwo.save();

        const userThree = new User({
            name: 'arbo',
            email: 'zoot@herbs.com',
            password: hashedPassword,
            image: 'img',
            movies: []
        })
        await userThree.save();

        console.log('..users seeded..');
        return [userOne, userTwo, userThree];
    } catch (error) {
        console.error('..failed to seed users..', error);
        process.exit(1);
    }
}

module.exports = seedUsers;