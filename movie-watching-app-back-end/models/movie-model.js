const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
    movies_id: Number,
    name: {
        type: String,
        required: true
    },
    description: String,
    director: String,
    starring: {
        type: Array,
        default: []
    },
    duration: Number,
    releaseDate: Date,
    ageRating: String,
    thumbnail: String,
    category_id: Number,
    deleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: Date.now
    },
});

const Movie = mongoose.model('Movie', MovieSchema, 'movies');

module.exports = Movie;