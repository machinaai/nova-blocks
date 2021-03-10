import credencials from './credencials';

export const enviromentEndPoints = {
    distanceMatrix: 'https://maps.googleapis.com/maps/api/distancematrix/',
    geolocation: `https://www.googleapis.com/geolocation/v1/geolocate?key=${credencials.mapsKey}`
}