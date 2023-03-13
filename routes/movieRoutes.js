// Core mods
// Addon mods
const express = require('express');
// Custom mods
const movieController = require('../controllers/movieController');

// -------------------- //
// C O N F I G  C O D E //

// Set up router
const router = express.Router();

// -------------------- //
// S T A R T    C O D E //

// @desc    | Get all movies
// @route   | GET => '/'
router.get('/', movieController.getAllMovies);

// @desc    | Get a single movie
// @route   | GET => '/:movieId'
router.get('/:movieId', movieController.getSingleMovie);

// @desc    | Create a movie
// @route   | POST => '/'
router.post('/', movieController.createMovie);

// @desc    | Update a movie
// @route   | PUT => '/:movieId'
router.put('/:movieId', movieController.updateMovie);

// @desc    | Delete a movie
// @route   | DELETE => '/:movieId'
router.delete('/:movieId', movieController.deleteMovie);

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = router;