// Core mods
// Addon mods
const express = require('express');
// Custom mods
const swaggerRoutes = require('./swagger');
// const movieRoutes = require('./movieRoutes');
// const comicBookRoutes = require('./comicBookRoutes');
// const characterRoutes = require('./characterRoutes');
const userRoutes = require('./userRoutes');

// -------------------- //
// C O N F I G  C O D E //

// Set up router
const router = express.Router();

// -------------------- //
// S T A R T    C O D E //

// Use API swagger doc
router.use('/', swaggerRoutes);

// Use API routes
// router.use('/movies', movieRoutes);
// router.use('/comics', comicBookRoutes);
// router.use('/characters', characterRoutes);
router.use('/users', userRoutes);

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = router;