import { Request, Response } from 'express';

export default {
  'GET /services/flowconsole/api/dashboard/_search/request-steps': (
    req: Request,
    res: Response,
  ) => {
    res.status(200).send(
      [
        {
          type: 'REQUEST_TOTAL',
          count: 40,
          averageTime: 0.0,
        },
        {
          type: 'No. de Celular',
          count: 39,
          averageTime: 0.0,
        },
        {
          type: 'Verificar Celular',
          count: 23,
          averageTime: 0.3,
        },
        {
          type: 'N2-N4',
          count: 23,
          averageTime: 1.0,
        },
        {
          type: 'Datos Usuario',
          count: 18,
          averageTime: 2,
        },
        {
          type: 'Validar ID',
          count: 13,
          averageTime: 0.5,
        },
        {
          type: 'INE frontal',
          count: 7,
          averageTime: 1.5,
        },
        {
          type: 'INE Reverso',
          count: 4,
          averageTime: 1,
        },
        {
          type: 'Prueba de Vida',
          count: 3,
          averageTime: 0.9,
        },
        {
          type: 'Repetir OTP',
          count: 1,
          averageTime: 0.0,
        },
      ]
    );
  },
};
