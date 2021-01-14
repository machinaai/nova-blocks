import { Request, Response } from 'express';

export default {
  'POST /services/flowproxyml/api/flows/otps/steps/_get_otp_speech': (_: Request, res: Response) => {
    res.send({ 
      message: '3030',
    });
  },
};
