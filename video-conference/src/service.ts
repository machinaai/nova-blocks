import request from 'umi-request';

/**
 * errorHandler service
 *
 * @param {{ response: Response }} error
 * @return {*}  {Response}
 */
const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

/**
 * Get otp speech
 *
 * @export
 * @param {*} params
 * @return {*} 
 */
export async function getOtpUser(params: any) {
  return request('/services/flowproxyml/api/flows/otps/steps/_get_otp_speech', {
    method: 'POST',
    data: params,
    errorHandler
  });
}