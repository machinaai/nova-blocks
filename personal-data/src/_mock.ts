import { Request, Response } from 'express';

export default {
  'POST  /services/flowproxyml/api/flows/accounts/steps/_customer_data': (req: Request, res: Response) => {
    res.status(200).send();
  },
};
