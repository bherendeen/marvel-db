// Core mods
// Addon mods
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Custom mods

// -------------------- //
// C O N F I G  C O D E //

// Load config.env
dotenv.config({
    path: '../config/config.env'
});

// Used to remove annoying warning in console
mongoose.set('strictQuery', false);

// -------------------- //
// S T A R T    C O D E //

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`>> MongoDB Connected: ${connect.connection.host}`);

    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

// -------------------- //
// E N D   //   C O D E //

// Export
module.exports = connectDB;