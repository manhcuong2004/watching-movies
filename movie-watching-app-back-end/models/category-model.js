const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    category_id: Number,
    name: {
        type: String,
        required: true
    },
    banner: String,
    deleted: {
        type: Boolean,
        default: false
    },
});

const Category = mongoose.model('Category', CategorySchema, 'categories');

module.exports = Category;