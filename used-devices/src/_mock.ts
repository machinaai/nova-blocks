import { Request, Response } from 'express';

export default {
  'GET /services/flowconsole/api/dashboard/_search/request-devices': (
    req: Request,
    res: Response,
  ) => {
    res.status(200).send({
      android: 5,
      ios: 2,
    });
  },
};
