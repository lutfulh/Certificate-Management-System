import React from 'react';
import { License, LicenseValidationErrors } from '../../types/type';
import './CertificateForm.css';


interface CertificateFormProps {
  formData: Partial<License>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  validationErrors: LicenseValidationErrors;
}

const CertificateForm: React.FC<CertificateFormProps> = ({ formData, handleChange, handleSubmit, validationErrors }) => {
  return (
    <div className="license-form-container">
      <form onSubmit={handleSubmit} className="license-form">
        {/* Product Name */}
        <div className="form-field">
          <input
            type="text"
            name="productName"
            value={formData.productName || ''}
            onChange={handleChange}
            placeholder="Product Name"
          />
          {validationErrors.productName && <div className="error-message">{validationErrors.productName}</div>}
        </div>

        {/* License Type */}
        <div className="form-field">
          <select
            name="licenseType"
            value={formData.licenseType || ''}
            onChange={handleChange}
          >
            <option value="">Select License Type</option>
            <option value="single-user">Single-user</option>
            <option value="multi-user">Multi-user</option>
            <option value="enterprise">Enterprise</option>
          </select>
          {validationErrors.licenseType && <div className="error-message">{validationErrors.licenseType}</div>}
        </div>

        {/* Issue Date */}
        <div className="form-field">
          <input
            type="date"
            name="issueDate"
            value={formData.issueDate || ''}
            onChange={handleChange}
          />
          {validationErrors.issueDate && <div className="error-message">{validationErrors.issueDate}</div>}
        </div>

        {/* Expiration Date */}
        <div className="form-field">
          <input
            type="date"
            name="expirationDate"
            value={formData.expirationDate || ''}
            onChange={handleChange}
          />
          {validationErrors.expirationDate && <div className="error-message">{validationErrors.expirationDate}</div>}
        </div>

        {/* Licensed To */}
        <div className="form-field">
          <input
            type="text"
            name="licensedTo"
            value={formData.licensedTo || ''}
            onChange={handleChange}
            placeholder="Licensed To"
          />
          {validationErrors.licensedTo && <div className="error-message">{validationErrors.licensedTo}</div>}
        </div>

        {/* Max Users */}
        <div className="form-field">
          <input
            type="number"
            name="maxUsers"
            value={formData.maxUsers || ''}
            onChange={handleChange}
            placeholder="Max Users"
          />
          {validationErrors.maxUsers && <div className="error-message">{validationErrors.maxUsers}</div>}
        </div>

        {/* Activation Status */}
        <div className="form-field">
          <select
            name="activationStatus"
            value={formData.activationStatus || ''}
            onChange={handleChange}
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="expired">Expired</option>
          </select>
          {validationErrors.activationStatus && <div className="error-message">{validationErrors.activationStatus}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">Submit License</button>
      </form>
    </div>
  );
};

export default CertificateForm;
