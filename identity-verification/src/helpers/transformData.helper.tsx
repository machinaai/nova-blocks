/**
 * Tranform data by manually component
 *
 * @param {*} data
 * @return {*} 
 */
export const transformData = (data: any) => {
  const { address, brthDate, curp, electorID, fatherName, gender, motherName, name } = data;

  if (data) {
    return {
      customerData: {
        residence: address,
        birthplace: 'Mexico',
        gender,
        CURP: curp,
        datebirth: brthDate,
        idIne: electorID,
      },
      customerName: { name: `${name} ${fatherName} ${motherName}` },
    };
  }
  return;
};
