import { Request, Response } from 'express';

/*
 * HTTP Status 4XX
 */
const send500 = {
  messageError: 'Servicio no disponible.',
  errorCode: '002',
  system: 'M01',
};

/*
 * HTTP Status 5XX
 */
const send400 = {
  messageError: 'Verifica el estatus de tu operación.',
  errorCode: '001',
  system: 'M01',
};
export default {
  'POST /private/v1/corporate/resetPassword/customer/getUserData': (
    req: Request,
    res: Response,
  ) => {
    const { user } = req.body;
    if (user === 'errorcuatro') {
      res.status(400).send(send400);
    } else if (user === 'errorcinco') {
      res.status(500).send(send500);
    } else {
      res
        .status(200)
        .header({
          'Set-Cookie': 'SESSION = YTk2MDFhNTMtY2Y3Ni00M2I5LWJmYWItZDA0ODFjN',
        })
        .send({
          maskedBusinessName: 'M* E***** S.A. de C.V',
          maskedUserName: 'C***** L**** C******',
          maskedPhoneNumber: '** **** 1234',
        });
    }
  },
  'POST /private/v1/corporate/resetPassword/customer/validatePhoneNumber': (
    req: Request,
    res: Response,
  ) => {
    const { phoneNumber } = req.body;
    if (phoneNumber === '4444441234') {
      res.status(400).send(send400);
    } else if (phoneNumber === '5555551234') {
      res.status(500).send(send500);
    } else {
      res.status(200).send({});
    }
  },
  'POST /private/v1/corporate/resetPassword/customer/setPassword': (
    req: Request,
    res: Response,
  ) => {
    const { newPassword } = req.body;
    if (newPassword === 'Errorcuatro') {
      res.status(400).send(send400);
    } else if (newPassword === 'Errorcinco') {
      res.status(500).send(send500);
    } else {
      res.status(200).send({});
    }
  },
  'POST /private/v1/corporate/secondAuthentication/requestOTP': (req: Request, res: Response) => {
    const { transactionInformation } = req.body;
    if (transactionInformation === '400') {
      res.status(400).send(send400);
    } else if (transactionInformation === '500') {
      res.status(500).send(send500);
    } else {
      res.status(200).send({});
    }
  },

  'POST /private/v1/corporate/secondAuthentication/validateOTP': (req: Request, res: Response) => {
    const { OTP } = req.body;
    if (OTP === '400') {
      res.status(400).send(send400);
    } else if (OTP === '500') {
      res.status(500).send(send500);
    } else {
      res.status(200).send({});
    }
  },
};
