const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Certificate Management API',
      version: '1.0.0',
      description: 'API for managing digital certificates',
      contact: {
        name: 'Lutful Haider',
        email: 'lutfulhdr@gmail.com',
      },
      servers: [{ url: 'http://localhost:3000' }],
    },
    components: {
      schemas: {
        CertificateInput: {
          type: 'object',
          required: [
            'productName',
            'licenseType',
            'issueDate',
            'expirationDate',
            'licensedTo',
            'maxUsers',
            'activationStatus',
          ],
          properties: {
            productName: {
              type: 'string',
              description: 'Name of the product',
            },
            licenseType: {
              type: 'string',
              description: 'Type of license',
            },
            issueDate: {
              type: 'string',
              format: 'date',
              description: 'Date when the certificate is issued',
            },
            expirationDate: {
              type: 'string',
              format: 'date',
              description: 'Date when the certificate expires',
            },
            licensedTo: {
              type: 'string',
              description: 'Entity to whom the certificate is licensed',
            },
            maxUsers: {
              type: 'integer',
              description: 'Maximum number of users allowed',
            },
            activationStatus: {
              type: 'string',
              description: 'Status of the certificate',
              enum: ['active', 'inactive', 'expired'],
            },
          },
        },
        Certificate: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for the certificate',
            },
            productName: {
              type: 'string',
              description: 'Name of the product',
            },
            licenseType: {
              type: 'string',
              description: 'Type of license',
            },
            issueDate: {
              type: 'string',
              format: 'date',
              description: 'Date when the certificate is issued',
            },
            expirationDate: {
              type: 'string',
              format: 'date',
              description: 'Date when the certificate expires',
            },
            licensedTo: {
              type: 'string',
              description: 'Entity to whom the certificate is licensed',
            },
            maxUsers: {
              type: 'integer',
              description: 'Maximum number of users allowed',
            },
            activationStatus: {
              type: 'string',
              description: 'Status of the certificate',
              enum: ['active', 'inactive', 'expired'],
            },
           
          },
        },
        
      },
    },
  },
  apis: ['./src/routes/*.js'], 
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
