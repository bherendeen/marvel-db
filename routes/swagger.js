// Core mods
// Addon mods
const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
// Custom mods
const swaggerDocument = require('../swagger.json');

// -------------------- //
// S T A R T    C O D E //

// sagger docs
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

// -------------------- //
// E N D   //   C O D E //

// Exports
module.exports = router;