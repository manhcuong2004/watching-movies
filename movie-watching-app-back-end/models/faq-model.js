const mongoose = require("mongoose");

const FAQSchema = mongoose.Schema({
    faq_id: Number,
    question: String,
    answer: String,
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

const FAQ = mongoose.model('FAQ', FAQSchema, 'faq');

module.exports = FAQ;