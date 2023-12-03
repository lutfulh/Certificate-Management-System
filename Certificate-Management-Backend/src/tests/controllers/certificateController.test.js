const certificateController = require('../../controllers/certificateController');
const certificateModel = require('../../models/certificateModel');

// Mock the database service
jest.mock('../../services/databaseService', () => ({
    connectToDatabase: jest.fn(),
    getDb: jest.fn(() => ({
 
    })),
}));

// Mocked array of certificates
const mockedCertificates = [
    {
        id: 1,
        productName: "Product 1",
        licenseType: "License Type 1",
        issueDate: "2023-11-11",
        expirationDate: "2024-11-11",
        licensedTo: "Company A",
        maxUsers: 10,
        activationStatus: "Active"
    },
    {
        id: 2,
        productName: "Product 2",
        licenseType: "License Type 2",
        issueDate: "2023-02-01",
        expirationDate: "2024-02-01",
        licensedTo: "Company B",
        maxUsers: 5,
        activationStatus: "Inactive"
    },

]

    // example valid certificate data ...
    const validCertificateData = {
        productName: "Product Name",
        licenseType: "License Type",
        issueDate: "2023-11-11",
        expirationDate: "2024-11-11",
        licensedTo: "Company Name",
        maxUsers: 10,
        activationStatus: "Active"    
};

beforeEach(() => {
    // Reset the mocks before each test
    jest.clearAllMocks();

    // Setup mock implementations
    certificateModel.create = jest.fn().mockImplementation((certificateData, callback) => {
        callback(null, { id: 123, ...certificateData });
    });
    certificateModel.getAll = jest.fn().mockImplementation((callback) => {
        callback(null, mockedCertificates);
    });
    certificateModel.deleteCertificate = jest.fn().mockImplementation((id, callback) => {
        if (id === "invalid-id") {
            callback(new Error('Invalid ID'), null);
        } else {
            callback(null, { changes: 1 });
        }
    });
});

describe('Certificate Controller', () => {
    let mockReq, mockRes;

    beforeEach(() => {
        mockReq = {};
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            send: jest.fn()
        };
    });

    describe('createCertificate', () => {
        it('successfully creates a certificate with valid input', async () => {
            mockReq.body = validCertificateData;

            await certificateController.createCertificate(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(201);
            expect(mockRes.json).toHaveBeenCalledWith(expect.objectContaining(validCertificateData));
        });
    });

    describe('listCertificates', () => {
        it('successfully retrieves all certificates', async () => {
            await certificateController.listCertificates(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith(mockedCertificates);
        });
    });

    describe('deleteCertificate', () => {
        it('handles deletion with a valid ID', async () => {
            mockReq.params = { id: "valid-id" };

            await certificateController.deleteCertificate(mockReq, mockRes);

            expect(mockRes.status).toHaveBeenCalledWith(200);
            expect(mockRes.json).toHaveBeenCalledWith({ message: 'Certificate deleted successfully' });
        });

       // Modify this part of your test case
it('handles deletion with an invalid or non-existent ID', async () => {
    mockReq.params = { id: "invalid-id" };

    await certificateController.deleteCertificate(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(404);
    // Make sure this line matches the actual output from the controller
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Certificate not found' });
});

    });
});
