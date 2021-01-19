import { Request, Response } from 'express';

export default {
  'POST /services/flowproxyml/api/upload-front': (req: Request, res: Response) => {
    res.status(200).send({
      name: 'Juan',
      fatherName: 'Lopez',
      motherName: 'Lopez',
      address: 'C Zaragoza MZA2 LT4 PBLO DE TAMPICO 03400 BENITO JUAREZ D.F ',
      curp: 'LOLJ890614HDFR97',
      electorID: 'LOL53434546565656',
      brthDate: '1986/10/10',
      gender: 'H',
      rectifiedImage: null,
      register_date: null,
    });
  },
  'POST /services/flowproxyml/api/upload-back': (req: Request, res: Response) => {
    res.status(200).send({ responde: 'ok' });
  },
  'POST /services/flowproxyml/api/upload-document': (req: Request, res: Response) => {
    res.status(400).send({ responde: 'ok' });
  },
};
