// Core mods
// Addon mods
const mongoose = require('mongoose')
// Custom mods


// -------------------- //
// S T A R T    C O D E //

const movieSchema = mongoose.Schema({
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
    rating: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 5
    },
    movieMinutes: {
        type: Number,
        required: true,
        trim: true,
        maxlength: 3
    },
    genre: {
        action: {
            type: Boolean,
            required: true
        },
        adventure: {
            type: Boolean,
            required: true
        },
        animation: {
            type: Boolean,
            required: true
        },
        biography: {
            type: Boolean,
            required: true
        },
        comedy: {
            type: Boolean,
            required: true
        },
        crime: {
            type: Boolean,
            required: true
        },
        documentary: {
            type: Boolean,
            required: true
        },
        drama: {
            type: Boolean,
            required: true
        },
        family: {
            type: Boolean,
            required: true
        },
        fantasy: {
            type: Boolean,
            required: true
        },
        history: {
            type: Boolean,
            required: true
        },
        horror: {
            type: Boolean,
            required: true
        },
        music: {
            type: Boolean,
            required: true
        },
        musical: {
            type: Boolean,
            required: true
        },
        mystery: {
            type: Boolean,
            required: true
        },
        romance: {
            type: Boolean,
            required: true
        },
        sciFi: {
            type: Boolean,
            required: true
        },
        shortFilm: {
            type: Boolean,
            required: true
        },
        sport: {
            type: Boolean,
            required: true
        },
        superhero: {
            type: Boolean,
            required: true
        },
        thriller: {
            type: Boolean,
            required: true
        },
        war: {
            type: Boolean,
            required: true
        },
        western: {
            type: Boolean,
            required: true
        }
    },
    moviePreview: {
        type: String,
        required: true,
        trim: true
    }
});

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = mongoose.model('Movie', movieSchema);