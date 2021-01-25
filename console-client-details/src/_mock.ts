import { Request, Response } from 'express';

export default {
  'GET /services/flowconsole/api/account-opening/_search_phone': (req: Request, res: Response) => {
    res.status(200).send({
      id: 4684687,
      userName: 'Maria G',
      userLastName: 'Cruz',
      mLastName: 'Perez',
      birthDate: '2021-01-02',
      curp: 'NUDR762913NDPBB02',
      accountOpeningType: 'N2',
      street: 'Madero',
      externalNumber: '21',
      postalCode: '26481',
      nieghborhood: 'Prueba',
      municipaly: 'Conocido',
      city: 'Jalisco',
      state: 'Sonora',
      country: 'Prueba',
      identificationNumber: '36745GDCFFDFDFDF',
      gender: 'Mujer',
      stepsComplete: {
        ine: true,
        valId: false,
        otp: true,
        firma: false,
        beneficiary: true,
      },
      documents: [
        {
          url: '/static/ico-paperless.65d06432.png',
          type: 'IMAGE',
        },
        {
          url: '/static/ico-paperless.65d06432.png',
          type: 'IMAGE',
        },
        {
          url: '/static/ico-paperless.65d06432.png',
          type: 'IMAGE',
        },
        {
          url: 'https://albalearning.com/S0NID0/cuentos/gshdleyl29/albalearning-eljinetesincabeza_cuentos.mp3',
          type: 'AUDIO',
        },
        {
          url: 'https://albalearning.com/S0NID0/cuentos/gshdleyl29/albalearning-eljinetesincabeza_cuentos.mp3',
          type: 'AUDIO',
        },
        {
          url: 'https://albalearning.com/S0NID0/cuentos/gshdleyl29/albalearning-eljinetesincabeza_cuentos.mp3',
          type: 'AUDIO',
        },
        {
          url: 'https://albalearning.com/S0NID0/cuentos/gshdleyl29/albalearning-eljinetesincabeza_cuentos.mp3',
          type: 'VIDEO',
        },
        {
          url: 'https://albalearning.com/S0NID0/cuentos/gshdleyl29/albalearning-eljinetesincabeza_cuentos.mp3',
          type: 'VIDEO',
        },
        {
          url: 'https://albalearning.com/S0NID0/cuentos/gshdleyl29/albalearning-eljinetesincabeza_cuentos.mp3',
          type: 'VIDEO',
        },
      ],
    });
  },
};
