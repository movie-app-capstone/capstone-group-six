//  setup
const mongoose = require('mongoose');
const Movie = require('../models/movie');
const User = require('../models/user');

//  seed
const seedReviews = async (userIds) => {
    try {
        const reviewOne = new Movie({
            title: 'Prisoners of the Ghostland',
            year: 2021,
            rating: 6,
            review: `Nick Cage is Hero. Ugh, it's such a cool visually stimulating movie, I want to love it so much, but it unfortunately the middle feels a bit dull. Which is an impressive feat since one of Nick Cage's testicles is blown off. I think this one would be a blast with friends!`,
            creator: userIds[0]
        })
        await reviewOne.save();
        const userOne = await User.findById(userIds[0]);
        userOne.movies.push(reviewOne.id);
        await userOne.save();

        const reviewTwo = new Movie({
            title: 'Mandy',
            year: 2018,
            rating: 9,
            review: `Nick Cage is Red. Incredibly metal movie. I've enjoyed it and loved it before, and I still love it after this rewatch.`,
            creator: userIds[1]
        })
        await reviewTwo.save();
        const userTwo = await User.findById(userIds[1]);
        userTwo.movies.push(reviewTwo.id);
        await userTwo.save();

        const reviewThree = new Movie({
            title: 'Face/Off',
            year: 1997,
            rating: 7,
            review: `Nick Cage is Castor Troy. This is such a silly action movie. Just watching them play cat and mouse as they change roles is such a silly premise that is executed in such a fun to watch way.`,
            creator: userIds[2]
        })
        await reviewThree.save();
        const userThree = await User.findById(userIds[2]);
        userThree.movies.push(reviewThree.id);
        await userThree.save();

        console.log('..reviews seeded..');
        return;
    } catch (error) {
        console.error('..failed to seed reviews..', error);
        process.exit(1);
    }
}

module.exports = seedReviews;