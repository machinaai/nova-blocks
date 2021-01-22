import { DataTable } from '../interfaces/ProblockProps.interface';

/**
 * Method to clean data to show in the table
 * @param data get data with data about customer.
 */
export const getCleanData = (data: any) => {
    let dataTable: DataTable[] = [];
    for (const property in data) {
        const { requestNumber, userName, mlastName, userLastName, device, stepsComplete, activeProducts, activeRequests } = data[property];
        dataTable = [...dataTable, {
            key: requestNumber,
            idRequest: requestNumber,
            name: `${userName} ${userLastName} ${mlastName}`,
            origin: device,
            statusIne: stepsComplete.ine,
            statusVal: stepsComplete.valId,
            statusOtp: stepsComplete.otp,
            statusSign: stepsComplete.firma,
            statusBen: stepsComplete.beneficiary,
            action: ' '
        }]
    }
    return dataTable
}

/**
 * Method that filters the data that matches the set value
 * @param data get data
 * @param valFilter get the value to run the filter within the data.
 */
export const filterDataByRadioBtn = (data: any, valFilter: string) => {
    let arrData:object[]=[];
    for (const property in data) {
        arrData = [...arrData,data[property]];        
    }
    return arrData.filter((el: any) =>{
        const filter = valFilter;
        return el.section?.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    });
}



/**
   * Filter the data according to the input value
   * @param query String to search
   * @param data Table's data
   */
export const filterEntry = (query: any, data: any) => {
    return data.filter((el: any)=> {
        let newIdRequest = el.idRequest.replace(/[()-]/g, '');
        newIdRequest = newIdRequest.replace(/ /gi, '');
        return (
            newIdRequest?.toLowerCase().indexOf(query.toLowerCase()) > -1 ||
            el.name?.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
    });
};



