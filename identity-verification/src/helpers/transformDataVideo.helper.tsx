/**
 * Tranform data by video conference 
 *
 * @param {*} data
 * @return {*} 
 */
export const transformDataVideoConference = (data: any) => {
    const { address, birth_date, curp, id, last_name, register_date, name, nationality } = data;
  
    if (data) {
      return {
        customerData: {
          residence: address,
          birthplace: nationality,
          register_date,
          CURP: curp,
          datebirth: birth_date,
          idIne: id,
        },
        customerName: { name: `${name} ${last_name}` },
      };
    }
    return;
  };
  