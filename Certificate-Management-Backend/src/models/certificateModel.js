const { getDb } = require('../services/databaseService');

const certificateModel = {
    create: (certificateData, callback) => {
        const db = getDb();
        const {
            productName,
            licenseType,
            issueDate,
            expirationDate,
            licensedTo,
            maxUsers,
            activationStatus
        } = certificateData;

        // First, check if a certificate with the same details already exists
        const checkSql = `SELECT id FROM certificates WHERE 
            productName = ? AND 
            licenseType = ? AND 
            issueDate = ? AND 
            expirationDate = ? AND 
            licensedTo = ? AND 
            maxUsers = ? AND 
            activationStatus = ?`;

        db.get(checkSql, [
            productName, licenseType, issueDate, expirationDate,
            licensedTo, maxUsers, activationStatus
        ], (err, row) => {
            if (err) {
                callback('Error checking for existing certificate.');
            } else if (row) {
                // If a record is found, a certificate with the same details exists
                callback('A certificate with the given details already exists.');
            } else {
                // If no record is found, proceed to create a new certificate
                const licenseKey = generateLicenseKey();
                const insertSql = `INSERT INTO certificates (
                    licenseKey, productName, licenseType, issueDate, expirationDate, 
                    licensedTo, maxUsers, activationStatus
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

                db.run(insertSql, [
                    licenseKey, productName, licenseType, issueDate, expirationDate,
                    licensedTo, maxUsers, activationStatus
                ], function (err) {
                    if (err) {
                        callback('Failed to create a new certificate due to a database error.');
                    } else {
                        callback(null, { id: this.lastID, licenseKey });
                    }
                });
            }
        });
    },

    // Function to get all certificates
    getAll: (callback) => {
        const db = getDb();
        const sql = `SELECT * FROM certificates`;

        db.all(sql, [], (err, rows) => {
            if (err) {
                callback('Failed to retrieve certificates due to a database error.');
            } else {
                callback(null, rows);
            }
        });
    },

    // Function to delete a certificate by ID
    deleteCertificate: (id, callback) => {
        const db = getDb();
        const sql = `DELETE FROM certificates WHERE id = ?`;

        db.run(sql, [id], function (err) {
            if (err) {
                callback('Failed to delete the certificate due to a database error.');
            } else {
                if (this.changes === 0) {
                    callback('No certificate found with the given ID.');
                } else {
                    callback(null, { changes: this.changes });
                }
            }
        });
    }
};

function generateLicenseKey(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

module.exports = certificateModel;
