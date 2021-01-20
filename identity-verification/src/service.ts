// import request from 'umi-request';
// import { enviromentEndPoints } from './enviroments/enviroments.fixture';

export const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};


