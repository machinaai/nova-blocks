import { Request, Response } from 'express';

export default {
  'GET /services/flowconsole/api/dashboard/_search/request-channels': (
    req: Request,
    res: Response,
  ) => {
    res.status(200).send({
      mobile: 3,
      web: 1,
      tablet: 1,
    });
  },
};
