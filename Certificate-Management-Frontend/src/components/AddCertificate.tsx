import React, { useState, FormEvent } from 'react';
import CertificateForm from './CertificateForm/CertificationForm';
import useCertificates from '../hooks/useCertificates';
import { License, LicenseValidationErrors } from '../types/type';


const AddCertificate: React.FC = () => {
  const { createCertificate } = useCertificates();

  // Local state to manage form data
  const [formData, setFormData] = useState<Partial<License>>({
    productName: '',
    licenseType: '',
    issueDate: '',
    expirationDate: '',
    licensedTo: '',
    maxUsers: undefined,
    activationStatus: '',
  });

  // State for validation messages
  const [validationErrors, setValidationErrors] = useState<LicenseValidationErrors>({});

  // Form validation logic
  const validateForm = (data: Partial<License>): LicenseValidationErrors => {
    let errors: LicenseValidationErrors = {};

    if (!data.productName) {
      errors.productName = 'Product name is required';
    }
    if (!data.licenseType) {
      errors.licenseType = 'License type is required';
    }
    if (!data.issueDate) {
      errors.issueDate = 'Issue date is required';
    }
    if (!data.expirationDate) {
      errors.expirationDate = 'Expiration date is required';
    }
    if (!data.licensedTo) {
      errors.licensedTo = 'Licensed to is required';
    }
    if (data.maxUsers === undefined || data.maxUsers < 1) {
      errors.maxUsers = 'Max users must be a positive number';
    }
    if (!data.activationStatus) {
      errors.activationStatus = 'Activation status is required';
    }

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      await createCertificate(formData as License);
      setFormData({
        productName: '',
        licenseType: '',
        issueDate: '',
        expirationDate: '',
        licensedTo: '',
        maxUsers: undefined,
        activationStatus: '',
      });
      setValidationErrors({}); // Reset validation errors
    } else {
      setValidationErrors(errors); // Set validation errors
    }
  };

  // Update local state on input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Add New License</h2>
      <CertificateForm 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        validationErrors={validationErrors} 
      />
    </div>
  );
};

export default AddCertificate;
