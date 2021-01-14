import request from 'umi-request';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

export async function twilioService(params: any) {
  return request('/chat/api/message', {
    method: 'POST',
    data: params,
    errorHandler,
  });
}
