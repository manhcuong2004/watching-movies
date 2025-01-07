const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
    customer_id: Number,
    lastName: String,
    firstName: String,
    dob: Date,
    phoneNumber: String,
    email: String,
    address: String,
    username: String,
    password: String,
    description: String,
    avatar: String,
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

const Customer = mongoose.model('Customer', CustomerSchema, 'customers');

module.exports = Customer;