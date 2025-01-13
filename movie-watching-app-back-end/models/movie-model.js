const mongoose = require("mongoose");

const MovieSchema = mongoose.Schema({
    banner: String,
    name: {
        type: String,
        required: true
    },
    releaseDate: String,
    duration: String,
    ageRating: String,
    category: {
        type: Array,
        default: []
    },
    rating: Number,
    totalRating: Number,
    description: String,
    director: {
        type: Array,
        default: []
    },
    stars: {
        type: Array,
        default: []
    },
    video: String,
    movie_id: Number,
    deleted: Boolean,
});

const Movie = mongoose.model('Movie', MovieSchema, 'movies');

module.exports = Movie;