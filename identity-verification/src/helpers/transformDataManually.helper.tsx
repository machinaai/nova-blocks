/**
 * Tranform data by manually component
 *
 * @param {*} data
 * @return {*}
 */
export const transformDataManually = (data:any) => {

    const {customerName : {
    name,
    lastName,
    motherLastName
    }, customerData: {
    CURP,
    idIne,
    datebirth,
    residence,
    gender
    } } = data;
    
    if (data) {
    return {
    customerData: {
    residence,
    birthplace: 'Mexico',
    gender,
    CURP,
    datebirth,
    idIne,
    },
    customerName: { name: `${name} ${lastName} ${motherLastName}` },
    };
    }
    
   };
   