// Core mods
// Addon mods
const mongoose = require('mongoose')
// Custom mods


// -------------------- //
// S T A R T    C O D E //

const characterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 48,
    },
    aka: {
        type: String,
        required: false,
        trim: true,
        maxlength: 48,
    },
    biography: {
        type: String,
        required: true,
        maxlength: 3000,
    },
    abilityDescription: {
        type: String,
        required: false,
        trim: true,
        maxlength: 750,
    }
});

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = mongoose.model('Character', characterSchema);