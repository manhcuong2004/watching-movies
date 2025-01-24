const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: String,
});

const Category = mongoose.model('Category', CategorySchema, 'categories');

module.exports = Category;