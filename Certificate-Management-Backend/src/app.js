// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swaggerConfig'); 

const certificateRoutes = require('./routes/certificateRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Define the routes
app.use('/certificates', certificateRoutes);

// Handle 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!');
});

// Handle 500 - Any server error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
});

module.exports = app;
