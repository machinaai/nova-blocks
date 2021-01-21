import { Request, Response } from 'express';

export default {
  'GET /services/flowconsole/api/account-opening/_search_finished': (
    req: Request,
    res: Response,
  ) => {
    res.status(200).send([
      {
        requestNumber: '12345',
        userName: 'Mathias',
        userLastName: 'López  ',
        mLastName: 'Sánchez',
        activeProducts: 'prueba',
        activeRequests: 'prueba',
      },
      {
        requestNumber: '7352678',
        userName: 'Paco Man',
        userLastName: 'García',
        mLastName: 'López',
        activeProducts: 'prueba',
        activeRequests: 'prueba',
      },
    ]);
  },
};
