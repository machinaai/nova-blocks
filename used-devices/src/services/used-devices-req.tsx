import { enviromentEndPoints } from '../enviroments/enviroments.fixture';
import { ServiceParams } from '@/interfaces/componentsDefinition.interface';
import request from 'umi-request';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function UsedDevicesService(params: ServiceParams) {
  const { data, endPoint} = params;    
  console.log('paramas', params)
  if (data) {  
    const {userType, startDate,endDate} = data;
    
    return request(
      `${endPoint}?userType=${userType}&startDate=${startDate}&endDate=${endDate}`,
      {
        method: 'GET',
        errorHandler
      },
    );
  } else {
    return request(
      `${params?.endPoint}?userType=&startDate=&endDate=`,
      {
        method: 'GET',
        errorHandler
      },
    );
  }
}

