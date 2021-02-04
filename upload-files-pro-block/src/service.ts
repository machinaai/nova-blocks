import request from 'umi-request';
import { enviromentEndPoints } from './enviroments/enviroments.fixture';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function uploadFilesServices(params: any) {
  return request(enviromentEndPoints.ineFront, {
    method: 'POST',
    data: params,
    errorHandler,
  });
}

export async function uploadAdressServices(params: any) {
  return request(enviromentEndPoints.adressEndPoint, {
    method: 'POST',
    data: params,
    errorHandler,
  });
}
