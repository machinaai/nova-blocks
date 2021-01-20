/**
 * Interface DataCustomerRequestInterface
 *
 * @interface DataCustomerRequestInterface
 */
export interface DataCustomerRequestInterface {
  informationObject: InformationObject;
}
/**
 * Interface InformationObject
 *
 * @interface InformationObject
 */
export interface InformationObject {
  customerName: CustomerName;
  customerData: CustomerData;
}
/**
 * Interface CustomerData
 *
 * @interface CustomerData
 */
interface CustomerData {
  CURP: string;
  idIne: string;
  datebirth: string;
  birthplace: string;
  gender: string;
  residence?: string;
}
/**
 * Interface CustomerName
 *
 * @interface CustomerName
 */
interface CustomerName {
  name: string;
  lastName: string;
  motherLastName: string;
}
