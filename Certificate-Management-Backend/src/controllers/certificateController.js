const certificateModel = require('../models/certificateModel');

const certificateController = {
    createCertificate: (req, res) => {
        certificateModel.create(req.body, (err, createdCertificate) => {
            if (err) {
                res.status(400).json({ message: 'Error creating certificate', error: err });
            } else {
                res.status(201).json(createdCertificate);
            }
        });
    },

    listCertificates: (req, res) => {
        certificateModel.getAll((err, certificates) => {
            if (err) {
                res.status(500).json({ message: 'Error listing certificates', error: err });
            } else {
                res.status(200).json(certificates);
            }
        });
    },

    deleteCertificate: (req, res) => {
        certificateModel.deleteCertificate(req.params.id, (err, result) => {
            if (err) {
                if (err.message === 'Invalid ID') {
                    res.status(404).json({ message: 'Certificate not found' });
                } else {
                    res.status(500).json({ message: 'Error deleting certificate', error: err });
                }
            } else if (result && result.changes === 0) {
                res.status(404).json({ message: 'No certificate found with the given ID' });
            } else {
                res.status(200).json({ message: 'Certificate deleted successfully' });
            }
        });
    }
};

module.exports = certificateController;
