import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import User from './models/UserModel.js';
import Review from './models/ReviewModel.js';

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Array of user objects
const users = [
    { name: 'User1', firstName:'d', email: 'user1@example.com', password: 'password1' },
    // Add more user objects here
];

// Array of review objects
const reviews = [
    { title: 'Review1', genre: 'Genre1', rating: 5, review: 'This is a review.' },
    // Add more review objects here
];

// Save users to the database
users.forEach(async (user) => {
    const newUser = new User(user);
    await newUser.save();
});

// Save reviews to the database
reviews.forEach(async (review) => {
    const newReview = new Review(review);
    await newReview.save();
});