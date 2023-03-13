// Core mods
// Addon mods
// Custom mods
const Character = require('../models/characterModel');
const validation = require('../validation/validate');

// -------------------- //
// S T A R T    C O D E //

// @desc | GET => Get all characters
exports.getAllCharacters = async (req, res) => {
    /// SWAGGER START ///
    /*
     * #swagger.tags = ['Characters']
     * #swagger.summary = 'Get all characters'
     * #swagger.description = 'Endpoint used to fetch all characters'
     */
    /// SWAGGER END ///
    try {
        const allCharacterData = await Character.find();
        res.status(200).send(allCharacterData);
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving characters.'
        });
    }
};

// @desc | GET => Get a single character
exports.getSingleCharacter = async (req, res) => {
    /// SWAGGER START ///
    /*
     * #swagger.tags = ['Characters']
     * #swagger.summary = 'Get single character'
     * #swagger.description = 'Endpoint used to fetch a single character | characterId required'
     */
    /// SWAGGER END ///
    try {
        const characterId = req.params.characterId;
        const singleCharacterData = await Character.findById(characterId);
        res.status(200).send(singleCharacterData);
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving the character.'
        });
    }
};

// @desc | POST => Create a character
exports.createCharacter = async (req, res) => {
    /// SWAGGER START ///
    /*
     * #swagger.tags = ['Characters']
     * #swagger.summary = 'Create character'
     * #swagger.description = 'Endpoint used to create a character'
     */
    /// SWAGGER END ///
    try {
        // Character data check
        const characterData = validation.characterValidation(req.body);
        if (characterData.error) {
            res.status(400).send({
                message: characterData.error.details
            });
            return;
        }

        const newCharacter = {
            name: req.body.name,
            aka: req.body.aka,
            biography: req.body.biography,
            abilityDescription: req.body.abilityDescription
        };
        const character = new Character(newCharacter);
        const savedCharacter = await character.save();
        console.log(`Character created`);
        res.status(201).send(savedCharacter);
    } catch (err) {
        res.status(500).json(err);
    }
};

// @desc | PUT => Update a character
exports.updateCharacter = async (req, res) => {
    //// SWAGGER START ///
    /*
     * #swagger.tags = ['Characters']
     * #swagger.summary = 'Update character'
     * #swagger.description = 'Endpoint used to update a single character | characterId required'
     */
    /// SWAGGER END ///
    try {
        const characterId = req.params.characterId;

        // Character data check
        const characterData = validation.characterValidation(req.body);
        if (characterData.error) {
            res.status(400).send({
                message: characterData.error.details
            });
            return;
        }

        const character = await Character.findById(characterId);
        character.name = req.body.name,
            character.aka = req.body.aka,
            character.biography = req.body.biography,
            character.abilityDescription = req.body.abilityDescription;

        const updateResult = await character.save();
        console.log(`Character updated`);
        res.status(201).send(updateResult);
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error occurred while updating the character.'
        });
    }
};

// @desc | DELETE => Delete a character
exports.deleteCharacter = async (req, res) => {
    /// SWAGGER START ///
    /*
     * #swagger.tags = ['Characters']
     * #swagger.summary = 'Delete character'
     * #swagger.description = 'Endpoint used to delete a single character | characterId required'
     */
    /// SWAGGER END ///
    try {
        const characterId = req.params.characterId;
        await Character.findByIdAndRemove(characterId);
        console.log(`Character deleted`);
        res.status(200).send({
            message: 'Character was deleted.'
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting character.'
        });
    }
};

// -------------------- //
// E N D   //   C O D E //