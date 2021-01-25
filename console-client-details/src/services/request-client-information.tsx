import request from 'umi-request';
import { enviromentEndPoints } from '../enviroments/enviroments.fixture';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
/**
 * Function to get the information of the client.
 * @param params 
 */
export async function ClientInformationRequest(params: any) {
  return request(`${enviromentEndPoints.requestClientInformation}cellphone=${params}`, {
    method: 'GET',
    data: params,
    errorHandler,
  });
}

