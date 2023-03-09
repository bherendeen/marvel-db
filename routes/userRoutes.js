// Core mods
// Addon mods
const express = require('express');
// Custom mods
const userController = require('../controllers/userController');

// -------------------- //
// C O N F I G  C O D E //

// Set up router
const router = express.Router();

// -------------------- //
// S T A R T    C O D E //

// @desc    | Get all users
// @route   | GET => '/'
router.get('/', userController.getAllUsers);

// @desc    | Get a single user
// @route   | GET => '/:userId'
router.get('/:userId', userController.getSingleUser);

// @desc    | Create a user
// @route   | POST => '/'
router.post('/', userController.createUser);

// @desc    | Update a user
// @route   | PUT => '/:userId'
router.put('/:userId', userController.updateUser);

// @desc    | Delete a user
// @route   | DELETE => '/:userId'
router.delete('/:userId', userController.deleteUser);

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = router;