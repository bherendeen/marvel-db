// Core mods
// Addon mods
const express = require('express');
// Custom mods
const comicBookController = require('../controllers/comicBookController');

// -------------------- //
// C O N F I G  C O D E //

// Set up router
const router = express.Router();

// -------------------- //
// S T A R T    C O D E //

// @desc    | Get all comic books
// @route   | GET => '/'
router.get('/', comicBookController.getAllComicBooks);

// @desc    | Get a single comic book
// @route   | GET => '/:comicBookId'
router.get('/:comicBookId', comicBookController.getSingleComicBook);

// @desc    | Create a comic book
// @route   | POST => '/'
router.post('/', comicBookController.createComicBook);

// @desc    | Update a comic book
// @route   | PUT => '/:comicBookId'
router.put('/:comicBookId', comicBookController.updateComicBook);

// @desc    | Delete a comic book
// @route   | DELETE => '/:comicBookId'
router.delete('/:comicBookId', comicBookController.deleteComicBook);

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = router;