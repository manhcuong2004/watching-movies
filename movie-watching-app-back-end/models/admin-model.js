const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    admin_id: Number,
    firstName: String,
    lastName: String,
    dob: Date,
    description: String,
    position: String,
    avatar: String,
    userName: String,
    password: String,
    role_id: Number,
    status: String,
    linkFacebook: String,
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

const Admin = mongoose.model('Admin', AdminSchema, 'admin');

module.exports = Admin;