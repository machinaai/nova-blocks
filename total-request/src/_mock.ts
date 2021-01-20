import { Request, Response } from 'express';

export default {
  'GET /services/flowconsole/api/dashboard/_search/request-totals': (
    req: Request,
    res: Response,
  ) => {
    res.status(200).send({
      totalRequest: 100,
      initiated: 5,
      inProccess: 10,
      abandoned: 10,
      finished: 30,
    });
  },
};
