//  setup
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

//  schema
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minLength: 10 },
    image: { type: String, required: true },
    movies: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Movie' }]
});

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', userSchema);