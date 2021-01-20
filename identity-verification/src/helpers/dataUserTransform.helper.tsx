import { DataUserInterface, DataCustomerRequestInterface } from '../interfaces';

/**
 * Tranform data by upload component
 *
 * @param {(DataCustomerRequestInterface | undefined)} data
 * @return {*}  {(DataUserInterface | undefined)}
 */
export const dataUserTransform = (
  data: DataCustomerRequestInterface | undefined,
): DataUserInterface | undefined => {

  if (data) {
    const {
      informationObject: {
        customerData: { birthplace, gender, CURP, datebirth, idIne, residence },
        customerName: { name }
      },
    } = data;
    
    return {
      gender,
      residence,
      birthplace,
      curp: CURP,
      name,
      idIne,
      nationality: '',
      datebirth,
    };
  }
  return;
};
