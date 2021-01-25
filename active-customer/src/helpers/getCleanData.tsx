import { DataTable } from '../interfaces/ProblockProps.interface';

/**
 * Method to clean data to show in the table
 * @param data get data with data about active customer.
 */
export const getCleanData = (data: any) => {
    let dataTable: any[] = [];
    
    for (const property in data) {
        const { requestNumber, userName, mLastName, userLastName, activeProducts, activeRequests } = data[property];
        dataTable = [...dataTable, {
            key: requestNumber,
            idAccount: requestNumber,
            customerName: `${userName} ${userLastName} ${mLastName}`,
            product: activeProducts,
            request: activeRequests,
            data: 'Ver detalle',
        }]
    }
    return dataTable
}

/**
   * Filter the data according to the input value
   * @param query String to search
   * @param data Table's data
   */
export const filterEntry = (query: any, data: any) => {
    console.log(data,'filter');
    
    return data.filter((el: any)=> {
        let newIdAccount = el.idAccount.replace(/[()-]/g, '');
        newIdAccount = newIdAccount.replace(/ /gi, '');
        return (
            newIdAccount?.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
            el.customerName?.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    });
};
