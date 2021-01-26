import { Request, Response } from 'express';

export default {
  'GET /services/flowconsole/api/dashboard/_search/request-devices': (
    req: Request,
    res: Response,
  ) => {
    res.status(200).send({
      respo1: 9,
      respo2: 12,
    });
  },
  'GET /services/flowconsole/api/dashboard/_search/request-close': (
    req: Request,
    res: Response,
  ) => {
    res.status(200).send({
      respo1: 2,
      respo2: 3,
    });
  },
};
