const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    category_id: Number,
    name: {
        type: String,
        required: true
    },
    thumbnail: String,
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

const Category = mongoose.model('Category', CategorySchema, 'categories');

module.exports = Category;