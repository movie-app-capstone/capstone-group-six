import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema(
    {
        movieTitle: {
            type: String,
            required: true,
        },
        reviewBody: {
            type: String,
            required: false,
        },
        releaseDate: {
            type: Number,
            required: false,
        },
        rottenMovie: {
        type: String,
            required: true,
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
            required: true,
        },
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        userComment: {
            type: String,
            required: false,
        },
        genre: {
            type: String,
            required: true,
        },
        reviewDate: {
            type: Date,
            default: Date.now,
        },
        spoilers: {
            type: String,
            required: false,
        },
        movieYear: {
            type: Number,
        },
        movieDirector: {
            type: String,
        },
        tags: {
            type: [String],
            default: [],
        },
    },
    { timestamps: true }
);

export default mongoose.model('Reviews', ReviewSchema);