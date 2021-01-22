import { Request, Response } from 'express';

/**
 * Example mock service Post
 *
 *
 * @export
 *
 * use express
 */
export default {
  'POST  /': (req: Request, res: Response) => {
    res.status(200).send({
      status: 'exito',
    });
  },
};
