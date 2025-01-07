const mongoose = require("mongoose");

const TVseriesSchema = mongoose.Schema({

    tvseries_id: Number,
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
    },
});

const TVseries = mongoose.model('TVseries', TVseriesSchema, 'tvSeries');

module.exports = TVseries;