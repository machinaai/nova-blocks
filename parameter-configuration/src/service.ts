import request from 'umi-request';
import { enviromentEndPoints } from './enviroments/enviroments.fixture';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};
/**
 * Example service Post
 *
 * must include interfaces
 *
 * @export
 * @param {*} params
 * @return {*}  {Promise<any>}
 */
export function getService(params: any): Promise<any> {
  return request(enviromentEndPoints.raiz, {
    method: 'POST',
    data: params,
    errorHandler,
  });
}
