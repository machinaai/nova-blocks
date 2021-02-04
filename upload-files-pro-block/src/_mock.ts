import { Request, Response } from 'express';

export default {
  'POST /services/flowproxyml/api/upload-front': (req: Request, res: Response) => {
    res.status(200).send({
      name: 'Juan',
      last_name: 'Lopez',
      second_last_name: 'Lopez',
      address: 'C Zaragoza MZA2 LT4 PBLO DE TAMPICO 03400 BENITO JUAREZ D.F ',
      curp: 'LOLJ890614HDFR97',
      id: 'LOL53434546565656',
      birth_date: '1986/10/10',
      gender: 'H',
      rectifiedImage: null,
      register_date: null,
    });
  },
  'POST /services/flowproxyml/api/upload-adress': (req: Request, res: Response) => {
    res.status(200).send({
      adress: 'Carretera Pablo, 38, Bilzen,Sáez del Tuy, 7709, México'
    });
  },
};
