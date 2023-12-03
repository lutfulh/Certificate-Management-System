const sqlite3 = require('sqlite3').verbose();
require('dotenv').config();


// Define the schema for a certificate
const certificateSchema = {
    id: 'INTEGER PRIMARY KEY AUTOINCREMENT',
    licenseKey: 'TEXT',
    productName: 'TEXT',
    licenseType: 'TEXT',
    issueDate: 'TEXT',
    expirationDate: 'TEXT',
    licensedTo: 'TEXT',
    maxUsers: 'INTEGER', 
    activationStatus: 'TEXT'
};

const dbPath = process.env.DATABASE_URL;
let db;

// Function to connect to the database
const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
        db = new sqlite3.Database(dbPath, (err) => {
            if (err) {
                console.error('Error connecting to SQLite database', err.message);
                reject(err);
            } else {
                console.log('Connected to the SQLite database.');
                initializeDatabase();
                resolve();
            }
        });
    });
};

// Function to create the certificates table based on the schema
const initializeDatabase = () => {
    const schemaKeys = Object.keys(certificateSchema);
    const schemaString = schemaKeys.map(key => `${key} ${certificateSchema[key]}`).join(', ');

    db.run(`CREATE TABLE IF NOT EXISTS certificates (${schemaString})`, (err) => {
        if (err) {
            console.error('Error creating certificates table', err.message);
        }
    });
};

// Function to get the database object
const getDb = () => {
    if (!db) {
        throw new Error("Database has not been initialized.");
    }
    return db;
};

module.exports = {
    connectToDatabase,
    getDb
};
