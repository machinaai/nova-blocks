// eslint-disable-next-line import/no-extraneous-dependencies
import { Request, Response } from 'express';

const random = () => {
  return (
    Math.random().toString(16).substring(2, 12).toUpperCase() +
    Math.random().toString(16).substring(2, 12).toUpperCase()
  );
};

export default {
  'POST  /private/v1/corporate/customer/registry/validateClient': (req: Request, res: Response) => {
    const { legalBusinessName } = req.body;
    if (legalBusinessName === 'error400') {
      res.status(400).send({
        messageError: 'Verifica el estatus de tu operación.',
        errorCode: '001',
        system: 'M01',
      });
    } else if (legalBusinessName === 'error500') {
      res.status(500).send({
        messageError: 'Servicio no disponible.',
        errorCode: '002',
        system: 'M01',
      });
    } else {
      res.status(200).send({
        isClient: true,
        clientStatusCode: 'Active',
      });
    }
  },
  'POST /private/v1/corporate/customer/registry/registerClient': (req: Request, res: Response) => {
    const { representative } = req.body;
    if (representative.userName === 'errorcuatro') {
      res.status(400).send({
        messageError: 'Verifica el estatus de tu operación.',
        errorCode: '001',
        system: 'M01',
      });
    } else if (representative.userName === 'errorcinco') {
      res.status(500).send({
        messageError: 'Servicio no disponible.',
        errorCode: '002',
        system: 'M01',
      });
    } else {
      res.status(200).send({
        authorizationNumber: random(),
      });
    }
  },
};
