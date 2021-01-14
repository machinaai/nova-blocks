import request from 'umi-request';
import { enviromentEndPoints } from './enviroments/enviroments.fixture';
import { DataCustomerRequestInterface } from './interfaces/request-data.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export function customerDataService(params: DataCustomerRequestInterface): Promise<any> {
    return request(enviromentEndPoints.customerData, {
      method: 'POST',
      data: params,
      errorHandler,
    });
  }