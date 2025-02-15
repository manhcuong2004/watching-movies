const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
    customer_id: Number,
    lastName: String,
    firstName: String,
    dob: Date,
    phoneNumber: String,
    email: String,
    address: String,
    displayName: String,
    password: String,
    description: String,
    avatar: String,
    tokenUser: String,
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