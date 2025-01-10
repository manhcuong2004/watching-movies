const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
    movie_id: Number,
    thumbnail: String,
    name: {
        type: String,
        required: true
    },
    releaseDate: Number,
    duration: String,
    ageRating: String,
    category: {
        type: Array,
        default: []
    },
    rating: Number,
    totalRating: Number,
    desc: String,
    director: {
        type: Array,
        default: []
    },
    stars: {
        type: Array,
        default: []
    },
    video: String,
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
    },
});

const Movie = mongoose.model('Movie', MovieSchema, 'movies');

module.exports = Movie;