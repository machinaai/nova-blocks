import { enviromentEndPoints } from '../enviroments/enviroments.fixture';
import request from 'umi-request';
import { ComponentsDefinition } from '../interfaces/componentsDefinition.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function RequestChannelsService(params: ComponentsDefinition) {  
  if (params) {
    const { userType, startDate, endDate } = params;
    return request(
      `${enviromentEndPoints.requestChannels}?userType=${userType}&startDate=${startDate}&endDate=${endDate}`,
      {
        method: 'GET',
        errorHandler
      },
    );
  } else {
    return request(
      `${enviromentEndPoints.requestChannels}?userType=&startDate=&endDate=`,
      {
        method: 'GET',
        errorHandler
      },
    );
  }
}

