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
          url: 'assets/nova-bank/ico-paperless.png',
          type: 'IMAGE',
        },
        {
          url: 'assets/nova-bank/ico-paperless.png',
          type: 'IMAGE',
        },
        {
          url: 'assets/nova-bank/ico-paperless.png',
          type: 'IMAGE',
        },
        {
          url: 'assets/nova-bank/videoTest.mp4',
          type: 'VIDEO',
        },
        {
          url: 'assets/nova-bank/videoTest.mp4',
          type: 'VIDEO',
        },
        {
          url: 'assets/nova-bank/videoTest.mp4',
          type: 'VIDEO',
        },
        {
          url: 'assets/nova-bank/videoTest.mp4',
          type: 'VIDEO',
        },
        {
          url: 'assets/nova-bank/audioTest.mp3',
          type: 'AUDIO',
        },
        {
          url: 'assets/nova-bank/audioTest.mp3',
          type: 'AUDIO',
        },
        {
          url: 'assets/nova-bank/audioTest.mp3',
          type: 'AUDIO',
        },
      ],
    });
  },
};
