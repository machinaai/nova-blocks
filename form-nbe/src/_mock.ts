import { Request, Response } from 'express';

export default {
  /**
   * Mock form login method POST
   */
  'POST /private/v1/corporate/session/login': (req: Request, res: Response) => {
    const { password, user } = req.body;
    if (password === 'nova.2020' && user === 'clopez') {
      res.status(200).send({
        maskedBusinessName: 'N*** S******* S****** SA de CV',
        maskedUserName: 'J*** P**** L***',
      });
    } else if (password === 'E500') {
      res.status(500).send({
        messageError: 'Missing or invalid Parameters',
        errorCode: '500',
        system: 'error',
      });
    } else {
      res.status(400).send({
        messageError: 'Missing or invalid Parameters',
        errorCode: '400',
        system: 'error',
      });
    }
  },
  /**
   * Mock form login OTP method POST
   */
  'POST /private/v1/corporate/session/validateOTPLogin': (req: Request, res: Response) => {
    const { OTP } = req.body;
    if (OTP === '202044') {
      res.status(200).send({
        token:
          'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI5NjA2MDU2MSIsImRpbm5udiI6Ijk2MDYwNTYxIiwiY29udHJhY3QiOiI4OTQyNTgzIiwiZXhwIjoxNTg1MDAxMjA5LCJpYXQiOjE1ODUwMDA5MDl9.UPF108YFjE0wvPPjHmjGnFm_DSzXZJuBDcT-C_JeRt-ELyn_ALTyq9EseE1Kx6XO6mTVVNCX0LyHOqJcoqK0lw',
      });
    } else if (OTP === 'E500') {
      res.status(500).send({
        messageError: 'Missing or invalid Parameters',
        errorCode: '500',
        system: 'error',
      });
    } else {
      res.status(400).send({
        messageError: 'Missing or invalid Parameters',
        errorCode: '400',
        system: 'error',
      });
    }
  },
  /**
   * Mock form login method GET
   */
  'GET /private/v1/corporate/session/requestOTPLogin': (req: Request, res: Response) => {
    res.status(200).send();
  },
};
