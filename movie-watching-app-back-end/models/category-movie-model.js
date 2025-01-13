const mongoose = require("mongoose");

const CategoryMovieSchema = mongoose.Schema({
    movie_id: Number,
    category_id: Number,
    deleted: {
        type: Boolean,
        default: false
    },
});

const CategoryMovie = mongoose.model('CategoryMovie', CategoryMovieSchema, 'categoryMovie');

module.exports = CategoryMovie;