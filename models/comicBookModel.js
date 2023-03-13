// Core mods
// Addon mods
const mongoose = require('mongoose')
// Custom mods

// -------------------- //
// S T A R T    C O D E //

const comicBookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 48
    },
    imageURL: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 750
    },
    writer: {
        type: String,
        required: false,
        trim: true,
        maxlength: 48
    },
    coverArtist: {
        type: String,
        required: false,
        trim: true,
        maxlength: 48
    },
    published: {
        month: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 9
        },
        day: {
            type: Number,
            required: true,
            trim: true,
            maxlength: 2
        },
        year: {
            type: Number,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 4
        }
    }
});

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = mongoose.model('ComicBook', comicBookSchema);