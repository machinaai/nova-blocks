export interface DataCustomerRequestInterface {
    informationObject: InformationObject;
  }
  
  interface InformationObject {
    customerName: CustomerName;
    customerData: CustomerData;
  }
  
  interface CustomerData {
    CURP: string;
    idINE: string;
    datebirth: string;
    placeBirth: string;
    gender: string;
  }
  
  interface CustomerName {
    name: string;
    lastName: string;
    motherLastName: string;
  }