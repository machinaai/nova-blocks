import request from 'umi-request';
import { FormLoginType } from './FormLogin/interfaces/formLogin.interface';
import { FormLoginTypeOTP } from './FormLoginOtp/interfaces/formLoginOTP.interface';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function accountLogin(params: FormLoginType) {
  return request('/private/v1/corporate/session/login', {
    method: 'POST',
    data: params,
    errorHandler,
    credentials: 'include',
  });
}

export async function getOTPLogin() {
  return request('/private/v1/corporate/session/requestOTPLogin', {
    method: 'GET',
    errorHandler,
    credentials: 'include',
  });
}

export async function validateOTPLogin(params: FormLoginTypeOTP) {
  return request('/private/v1/corporate/session/validateOTPLogin', {
    method: 'POST',
    data: params,
    errorHandler,
    credentials: 'include',
  });
}
