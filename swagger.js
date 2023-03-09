const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        description: 'A database to look up Marvel movies, comic books, and characters.',
        version: '1.0.0',
        title: 'Marvel DB'
    },
    host: 'marvel-rest-api.onrender.com',
    schemes: ['https'],
    tags: [{
            name: 'Movies',
            description: 'Everything to lookup, add, update, delete movies.'
        },
        {
            name: 'ComicBooks',
            description: 'Everything to lookup, add, update, delete comic books.'
        },
        {
            name: 'Characters',
            description: 'Everything to lookup, add, update, delete characters.'
        },
        {
            name: 'Users',
            description: 'Everything to lookup, add, update, delete users.'
        }
    ]
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);