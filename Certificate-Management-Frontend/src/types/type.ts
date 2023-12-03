export type License = {
    id?: string;
    productName: string;
    licenseKey: string,
    licenseType: string;
    issueDate: string; 
    expirationDate: string;
    licensedTo: string;
    maxUsers?: number; 
    activationStatus: "Active" | "Inactive" | "Expired" | "";
    termsAndConditions: string;
    remarks: string;
  };
  
  export type LicenseValidationErrors = {
    productName?: string;
    licenseType?: string;
    issueDate?: string;
    expirationDate?: string;
    licensedTo?: string;
    maxUsers?: string;
    activationStatus?: string;
  }
  