const app = require('./app');
const http = require('http');
const { connectToDatabase } = require('./services/databaseService');

require('dotenv').config();

const port = process.env.PORT || 3000;

// Function to start the server
const startServer = () => {

    const server = http.createServer(app);

    server.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
};

// Connect to the database before starting the server
connectToDatabase()
    .then(startServer)
    .catch(err => {
        console.error('Failed to connect to the database:', err);
    });
