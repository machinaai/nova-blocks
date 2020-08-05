import request from 'umi-request';
import { enviroment } from './enviroments/enviroments.fixture';
import { FormLoginType } from './FormLogin/interfaces/formLogin.interface';
import { FormLoginTypeOTP } from './FormLoginOtp/interfaces/formLoginOTP.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function accountLogin(params: FormLoginType) {
  return request(enviroment.urlBase + enviroment.login, {
    method: 'POST',
    data: params,
    errorHandler,
    credentials: 'include',
  });
}

export async function getOTPLogin() {
  return request(enviroment.urlBase + enviroment.requestOTPLogin, {
    method: 'GET',
    errorHandler,
    credentials: 'include',
  });
}

export async function validateOTPLogin(params: FormLoginTypeOTP) {
  return request(enviroment.urlBase + enviroment.validateOTPLogin, {
    method: 'POST',
    data: params,
    errorHandler,
    credentials: 'include',
  });
}
