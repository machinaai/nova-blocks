import request from 'umi-request';
import { enviroment } from './enviroments/enviroments.fixture';
import ValidateClient from './interfaces/validateClient.interface';
import RegisterClient from './interfaces/registerClient.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function validateClient(params: ValidateClient) {
  return request(enviroment.urlBase + enviroment.validateClient, {
    method: 'POST',
    data: params,
    errorHandler,
    referrerPolicy: 'unsafe-url',
    mode: 'cors',
  });
}

export async function registerClient(params: RegisterClient) {
  return request(enviroment.urlBase + enviroment.registerClient, {
    method: 'POST',
    data: params,
    errorHandler,
    referrerPolicy: 'unsafe-url',
    mode: 'cors',
  });
}
