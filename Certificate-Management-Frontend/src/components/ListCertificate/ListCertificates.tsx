import React from 'react';
import Certificate from '../Certificates';
import useCertificates from '../../hooks/useCertificates';
import './ListCertificate.css';

const ListCertificates: React.FC = () => {
  const { certificates, deleteCertificate } = useCertificates();

  if (!certificates || certificates.length === 0) {
    return <p className="no-licenses">No licenses available. Please add some licenses.</p>;
  }

  const handleRemove = (id: string | undefined) => {
    if (id) {
      deleteCertificate(id);
    } else {
      console.error("Attempted to delete a license without an ID");
    }
  };

  // Render a list of Certificate components
  return (
    <div className="license-list">
      {certificates.map(license => (
        <Certificate
          key={license.id}
          license={license}
          handleRemoveLicense={() => handleRemove(license.id)}
        />
      ))}
    </div>
  );
};

export default ListCertificates;
