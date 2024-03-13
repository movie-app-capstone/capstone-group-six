const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    //  movie id, user id, rating, review 
})

module.exports = mongoose.model('Review', reviewSchema);