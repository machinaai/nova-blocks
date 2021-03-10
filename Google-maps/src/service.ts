import request from 'umi-request';
import { enviromentEndPoints } from './enviroments/enviroments.fixture';
import credencials from './enviroments/credencials';

const errorHandler = (error: { response: Response }): Response => {
  return error.response;
};

  export function getDistance(params: any){
    console.log(params);
      return request(`${enviromentEndPoints.distanceMatrix}json?origins=${params.matrix.origin.lat},${params.matrix.origin.lng}&destinations=${params.matrix.destination.lat},${params.matrix.destination.lng}&mode=${params.mode.mode}&key=${credencials.mapsKey}`, {
        method: 'POST',
        errorHandler,
        credentials: 'omit',
        
        
      })

    }
        export function getMyGeolocation(){
          return request(enviromentEndPoints.geolocation,{
            method: 'POST',
            errorHandler,
            credentials: 'omit',
          })
        }