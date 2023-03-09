// Core mods
// Addon mods
const mongoose = require('mongoose')
// Custom mods


// -------------------- //
// S T A R T    C O D E //

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxLength: 32
    },
    lastName: {
        type: String,
        required: true,
        minlength: 2,
        maxLength: 32
    },
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxLength: 32
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    profileImg: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    }
});

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = mongoose.model('User', userSchema);