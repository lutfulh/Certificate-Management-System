import React from 'react';
import {License} from'../types/type'
import './ListCertificate/ListCertificate.css';

interface CertificateProps {
  license: License;
  handleRemoveLicense: (id: string) => void;
}

const Certificate: React.FC<CertificateProps> = ({ license, handleRemoveLicense }) => {
  
  
  // Destructure the properties from the license object
  const {
    id,
    licenseKey,
    productName,
    licenseType,
    issueDate,
    expirationDate,
    licensedTo,
    maxUsers,
    activationStatus,
  } = license;

  const formattedIssueDate = new Date(issueDate).toLocaleDateString();
  const formattedExpirationDate = expirationDate 
    ? new Date(expirationDate).toLocaleDateString() 
    : 'N/A';
    
      const handleDelete = () => {
        if (id) {
          handleRemoveLicense(id);
        } else {
          console.error('Error: License ID is undefined.');
        }
      };

  return (
    <div className="license-item">
      <h3>{productName}</h3>
      {/* Display the license details */}
      <p><strong>License Key:</strong>{licenseKey}</p>
      <p><strong>Type:</strong> {licenseType}</p>
      <p><strong>Issued To:</strong> {licensedTo}</p>
      <p><strong>Issue Date:</strong> {formattedIssueDate}</p>
      <p><strong>Expiration Date:</strong> {formattedExpirationDate}</p>
      <p><strong>Max Users:</strong> {maxUsers}</p>
      <p><strong>Status:</strong> {activationStatus}</p>
      
      {/* Actions for deleting a license */}
      <div className="license-actions">
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Certificate;
