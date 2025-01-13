const mongoose = require("mongoose");

const CategoryTvseriesSchema = mongoose.Schema({
    tvseries_id: Number,
    category_id: Number,
    deleted: {
        type: Boolean,
        default: false
    },
});

const CategoryTvseries = mongoose.model('CategoryTvseries', CategoryTvseriesSchema, 'categoryTvseries');

module.exports = CategoryTvseries;