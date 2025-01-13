const mongoose = require("mongoose");

const TVseriesSchema = mongoose.Schema({
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
    tvseries_id: Number,
    deleted: Boolean,
});

const TVseries = mongoose.model('TVseries', TVseriesSchema, 'tvSeries');

module.exports = TVseries;