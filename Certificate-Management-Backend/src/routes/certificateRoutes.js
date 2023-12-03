const express = require('express');
const router = express.Router();
const certificateController = require('../controllers/certificateController');

/**
 * @swagger
 * /certificates:
 *   post:
 *     summary: Create a new certificate
 *     description: Adds a new certificate to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CertificateInput'
 *     responses:
 *       201:
 *         description: Certificate created successfully
 *       400:
 *         description: Invalid data provided
 */
router.post('/', certificateController.createCertificate);

/**
 * @swagger
 * /certificates:
 *   get:
 *     summary: List all certificates
 *     description: Retrieves a list of all certificates
 *     responses:
 *       200:
 *         description: A list of certificates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Certificate'
 */
router.get('/', certificateController.listCertificates);

/**
 * @swagger
 * /certificates/{id}:
 *   delete:
 *     summary: Delete a certificate
 *     description: Deletes a certificate with the specified ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the certificate to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Certificate deleted successfully
 *       404:
 *         description: Certificate not found
 */
router.delete('/:id', certificateController.deleteCertificate);

module.exports = router;
