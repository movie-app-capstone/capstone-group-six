//  setup
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  schema
const movieSchema = new Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    rating: { type: Number, required: true },
    review: { type: String, required: true, minLength: 5, maxLength: 250 },
    creator: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
});

module.exports = mongoose.model('Movie', movieSchema);