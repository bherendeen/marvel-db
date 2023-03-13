// Core mods
// Addon mods
const express = require('express');
// Custom mods
const characterController = require('../controllers/characterController');

// -------------------- //
// C O N F I G  C O D E //

// Set up router
const router = express.Router();

// -------------------- //
// S T A R T    C O D E //

// @desc    | Get all characters
// @route   | GET => '/'
router.get('/', characterController.getAllCharacters);

// @desc    | Get a single character
// @route   | GET => '/:characterId'
router.get('/:characterId', characterController.getSingleCharacter);

// @desc    | Create a character
// @route   | POST => '/'
router.post('/', characterController.createCharacter);

// @desc    | Update a character
// @route   | PUT => '/:characterId'
router.put('/:characterId', characterController.updateCharacter);

// @desc    | Delete a character
// @route   | DELETE => '/:characterId'
router.delete('/:characterId', characterController.deleteCharacter);

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = router;