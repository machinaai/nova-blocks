import request from 'umi-request';
import { enviroment } from '../enviroments/enviroments.fixture';
import { ValidateUser } from '../interfaces/validateUser.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function getUserData(params: ValidateUser) {
  return request(enviroment.urlBase + enviroment.getUserData, {
    method: 'post',
    headers: {},
    data: params,
    errorHandler,
    referrerPolicy: 'unsafe-url',
    mode: 'cors',
  });
}

export async function validatePhoneNumber(params: any) {
  return request(enviroment.urlBase + enviroment.validatePhoneNumber, {
    method: 'POST',
    headers: {
      Cookie: 'SESSION=YTk2MDFhNTMtY2Y3Ni00M2I5LWJmYWItZDA0ODFjN',
    },
    data: params,
    errorHandler,
    referrerPolicy: 'unsafe-url',
    mode: 'cors',
  });
}

export async function setPassword(params: any) {
  return request(enviroment.urlBase + enviroment.setPassword, {
    method: 'POST',
    headers: {
      Cookie: 'SESSION=YTk2MDFhNTMtY2Y3Ni00M2I5LWJmYWItZDA0ODFjN',
    },
    data: params,
    errorHandler,
    referrerPolicy: 'unsafe-url',
    mode: 'cors',
  });
}
