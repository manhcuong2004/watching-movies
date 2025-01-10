const mongoose = require("mongoose");

const FavouriteMVSchema = mongoose.Schema({
    favourite_mv_id: Number,
    customer_id: Number,
    movie_id: Number,
    deleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
    },
});

const FavouriteMV = mongoose.model('FavouriteMV', FavouriteMVSchema, 'favouriteMovies');

module.exports = FavouriteMV;