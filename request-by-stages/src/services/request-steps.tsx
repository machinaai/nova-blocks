import { enviromentEndPoints } from '../enviroments/enviroments.fixture';
import request from 'umi-request';
import { ComponentsDefinition } from '../interfaces/componentsDefinition.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function RequestStepsService(params: ComponentsDefinition) {
  if (params) {
    const { userType, startDate, endDate } = params;
    return request(
      `${enviromentEndPoints.requestSteps}?userType=${userType}&startDate=${startDate}&endDate=${endDate}`,
      {
        method: 'GET',
        errorHandler
      },
    );
  } else {
    return request(
      `${enviromentEndPoints.requestSteps}?userType=&startDate=&endDate=`,
      {
        method: 'GET',
        errorHandler
      },
    );
  }
}

export async function RequestService(params: ComponentsDefinition) {
  if (params) {
    const { userType, startDate, endDate } = params;
    return request(
      `${enviromentEndPoints.totalRequest}?userType=${userType}&startDate=${startDate}&endDate=${endDate}`,
      {
        method: 'GET',
        errorHandler
      },
    );
  } else {
    return request(
      `${enviromentEndPoints.totalRequest}?userType=&startDate=&endDate=`,
      {
        method: 'GET',
        errorHandler
      },
    );
  }
}

