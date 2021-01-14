import { Request, Response } from 'express';

export default {
  'POST /chat/api/message': (req: Request, res: Response) => {
    res.status(200).send({ status: 'ok' });
  },
};
