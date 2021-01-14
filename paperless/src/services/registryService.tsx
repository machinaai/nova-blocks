import request from 'umi-request';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
export async function registryService(params: any) {
  return request('/api/registry/alertsRegistry', {
    method: 'POST',
    data: params,
    errorHandler,
  });
}
