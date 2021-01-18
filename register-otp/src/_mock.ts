import type { Request, Response } from 'express';

export default {
  'POST  /services/flowproxyml/api/flows/otps/steps/_get_otp_phone': (req: Request, res: Response) => {
    res.status(200).send(
      {
      "step": "GET_OTP_PHONE",
      "flowId": "1234",
      "phone": "1234567891",
      "metadata": {
        "success": true
      }
    }
  );
  },
  'POST  /services/flowproxyml/api/flows/otps/steps/_validate_otp_phone': (req: Request, res: Response) => {
    res.status(200).send({
      "token": "hkhj2h3kh3kjh4k2jh4kj2h4khjkjh2kh4kj2h34kjh2kj34hh"
    });
  }
};
