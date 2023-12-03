
import { useState, useCallback, useEffect } from 'react';
import { License } from '../types/type'; // 

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';


const useCertificates = () => {
  const [certificates, setCertificates] = useState<License[]>([]);

  const fetchCertificates = useCallback(async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/certificates`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setCertificates(data);
    } catch (error) {
      console.error('Error fetching certificates:', error);
    }
  }, []);

  const createCertificate = async (certificate: License) => {
    try {
      const response = await fetch(`${API_BASE_URL}/certificates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(certificate),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      await fetchCertificates(); 
    } catch (error) {
      console.error('Error creating certificate:', error);
    }
  };

  const deleteCertificate = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/certificates/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Network response was not ok');
      await fetchCertificates();
    } catch (error) {
      console.error('Error deleting certificate:', error);
    }
  };

  // Fetch certificates initially
  useEffect(() => {
    fetchCertificates();
  }, [fetchCertificates]);

  return {
    certificates,
    createCertificate,
    deleteCertificate
  };
};

export default useCertificates;
