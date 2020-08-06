import request from 'umi-request';
import { enviroment } from '../enviroments/enviroments.fixture';

/*
 * Interface for request OTP
 */
interface RequestOTPInterface {
  /*
   * description: 'Cipher transaction information plus timestamp'
   * example: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NjA2MDU2MSIsImRpbm5udiI6Ijk2MDYwNTYxIiwiY29udHJhY3QiOiI4OTQyNTgzIiwiZXhwIjoxNTg1MDAxMjA5LCJpYXQiOjE1ODUwMDA5MDl9.UPF108YFjE0wvPPjHmjGnFm_DSzXZJuBDcT-C_JeRt-ELyn_ALTyq9EseE1Kx6XO6mTVVNCX0LyHOqJcoqK0lw'
   */
  transactionInformation: string;
}
/*
 * Interface for validation OTP
 */
interface ValidationOTPInterface {
  /*
   * description: 'Cipher transaction information plus timestamp'
   * example: 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NjA2MDU2MSIsImRpbm5udiI6Ijk2MDYwNTYxIiwiY29udHJhY3QiOiI4OTQyNTgzIiwiZXhwIjoxNTg1MDAxMjA5LCJpYXQiOjE1ODUwMDA5MDl9.UPF108YFjE0wvPPjHmjGnFm_DSzXZJuBDcT-C_JeRt-ELyn_ALTyq9EseE1Kx6XO6mTVVNCX0LyHOqJcoqK0lw'
   */
  // transactionInformation: string;
  /*
   * example: '1234567890'
   * description: 'One Time Password'
   */
  OTP: string;
}

const mockTransactionInformation = {
  transactionInformation:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NjA2MDU2MSIsImRpbm5udiI6Ijk2MDYwNTYxIiwiY29udHJhY3QiOiI4OTQyNTgzIiwiZXhwIjoxNTg1MDAxMjA5LCJpYXQiOjE1ODUwMDA5MDl9.UPF108YFjE0wvPPjHmjGnFm_DSzXZJuBDcT-C_JeRt-ELyn_ALTyq9EseE1Kx6XO6mTVVNCX0LyHOqJcoqK0lw',
};

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function requestOTP() {
  return request(enviroment.urlBase + enviroment.requestOTP, {
    method: 'POST',
    // headers: {
    //   'Acceptance-Language': 'es-MX',
    //   'Set-Cookie': 'SESSION = YTk2MDFhNTMtY2Y3Ni00M2I5LWJmYWItZDA0ODFjN',
    // },
    data: mockTransactionInformation,
    errorHandler,
  });
}

export async function validateOTP(params: ValidationOTPInterface) {
  const { OTP } = params;
  return request(enviroment.urlBase + enviroment.validateOTP, {
    method: 'POST',
    // headers: {
    //   'Acceptance-Language': 'es-MX',
    //   'Set-Cookie': 'SESSION = YTk2MDFhNTMtY2Y3Ni00M2I5LWJmYWItZDA0ODFjN',
    // },
    data: { ...mockTransactionInformation, OTP },
    errorHandler,
  });
}
