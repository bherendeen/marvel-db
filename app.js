// Core mods
// Addon mods
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// Custom mods
const connectDB = require('./database/db');

// -------------------- //
// C O N F I G  C O D E //

// Load config.env
dotenv.config({
    path: './config/config.env'
});

// Run express
const app = express();
// Port
const port = process.env.PORT || 8080;

// Connect to the database and start the server
async function start() {
    try {
        await connectDB();
        setUpMiddlewares();
        startServer();
    } catch (err) {
        console.error('Error connecting to the database', err);
        process.exit(1);
    }
}

function setUpMiddlewares() {
    app.use(bodyParser.json());
    app.use(corsMiddleware);
}

function startServer() {
    app.listen(port, () => {
        console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${port}`);
    });
}

function corsMiddleware(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
}

start();