// Core mods
// Addon mods
// Custom mods
const ComicBook = require('../models/comicBookModel');
const validation = require('../validation/validate');

// -------------------- //
// S T A R T    C O D E //

// @desc | GET => Get all comic books
exports.getAllComicBooks = async (req, res) => {
    /// SWAGGER START ///
    /*
     * #swagger.tags = ['ComicBooks']
     * #swagger.summary = 'Get all comic books'
     * #swagger.description = 'Endpoint used to fetch all comic books'
     */
    /// SWAGGER END ///
    try {
        const allComicBookData = await ComicBook.find();
        res.status(200).send(allComicBookData);
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error occurred while retrieving comic books.'
        });
    }
};

// @desc | GET => Get a single comic book
exports.getSingleComicBook = async (req, res) => {
    /// SWAGGER START ///
    /*
     * #swagger.tags = ['ComicBooks']
     * #swagger.summary = 'Get single comic book'
     * #swagger.description = 'Endpoint used to fetch a single comic book | comicBookId required'
     */
    /// SWAGGER END ///
    try {
        const comicBookId = req.params.comicBookId;
        const singleComicBookData = await ComicBook.findById(comicBookId);
        res.status(200).send(singleComicBookData);
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving the comic book.",
        });
    }
};

// @desc | POST => Create a comic book
exports.createComicBook = async (req, res) => {
    /// SWAGGER START ///
    /*
     * #swagger.tags = ['ComicBooks']
     * #swagger.summary = 'Create comic book'
     * #swagger.description = 'Endpoint used to create a comic book'
     */
    /// SWAGGER END ///
    try {

        const newComicBook = {
            title: req.body.title,
            imageURL: req.body.imageURL,
            description: req.body.description,
            writer: req.body.writer,
            coverArtist: req.body.coverArtist,
            published: {
                month: req.body.publishMonth,
                day: req.body.publishDay,
                year: req.body.publishYear
            }
        };
        const comicBook = new ComicBook(newComicBook);
        const savedComicBook = await comicBook.save();
        console.log(`Comic book created`);
        res.status(201).send(savedComicBook);
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error occurred while creating the comic book.'
        });
    }
};

// @desc | PUT => Update a comic book
exports.updateComicBook = async (req, res) => {
    //// SWAGGER START ///
    /*
     * #swagger.tags = ['ComicBooks']
     * #swagger.summary = 'Update comic book'
     * #swagger.description = 'Endpoint used to update a single comic book | comicBookId required'
     */
    /// SWAGGER END ///
    try {
        const comicBookId = req.params.comicBookId;

        const comicBook = await ComicBook.findById(comicBookId);
        comicBook.title = req.body.title,
            comicBook.imageURL = req.body.imageURL,
            comicBook.description = req.body.description,
            comicBook.writer = req.body.writer,
            comicBook.coverArtist = req.body.coverArtist,
            comicBook.published.month = req.body.publishMonth,
            comicBook.published.day = req.body.publishDay,
            comicBook.published.year = req.body.publishYear;

        const updateResult = await comicBook.save();

        console.log(`Comic book updated`);
        res.status(201).send(updateResult);
    } catch (err) {
        res.status(500).json({
            message: err.message || 'Some error occurred while updating the comic book.'
        });
    }
};

// @desc | DELETE => Delete a comic book
exports.deleteComicBook = async (req, res) => {
    /// SWAGGER START ///
    /*
     * #swagger.tags = ['ComicBooks']
     * #swagger.summary = 'Delete comic book'
     * #swagger.description = 'Endpoint used to delete a single comic book | comicBookId required'
     */
    /// SWAGGER END ///
    try {
        const comicBookId = req.params.comicBookId;
        await ComicBook.findByIdAndRemove(comicBookId);
        console.log(`Comic book deleted`);
        res.status(200).send({
            message: 'Comic book was deleted.'
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || 'Some error occurred while deleting comic book.'
        });
    }
};

// -------------------- //
// E N D   //   C O D E //