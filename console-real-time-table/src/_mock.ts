import { Request, Response } from 'express';

export default {
  'GET /services/flowconsole/api/account-opening/_search_pending': (
    req: Request,
    res: Response,
  ) => {
    res.status(200).send(
      [{
        "requestNumber": "5545046006",
        "userName": "Eduardo",
        "userLastName": "*",
        "device": "ios",
        "status": "INITIATED",
        "stepsComplete": {
            "ine": false,
            "valId": false,
            "otp": false,
            "firma": false,
            "beneficiary": false
        },
        "section": "REAL_TIME",
        "mlastName": "*"
    },
    {
        "requestNumber": "8965243715",
        "userName": 'Ana',
        "userLastName": '*',
        "device": "android",
        "status": "IN_PROCESS",
        "stepsComplete": {
            "ine": false,
            "valId": true,
            "otp": true,
            "firma": true,
            "beneficiary": false
        },
        "section": "PENDING_DOCUMENTS",
        "mlastName": '*'
    },
    {
        "requestNumber": "578877555",
        "userName": "Maria",
        "userLastName": "*",
        "device": "ios",
        "status": "IN_PROCESS",
        "stepsComplete": {
            "ine": false,
            "valId": false,
            "otp": false,
            "firma": false,
            "beneficiary": false
        },
        "section": "PENDING_DOCUMENTS",
        "mlastName": "*"
    },
    {
        "requestNumber": "5613262679",
        "userName": "Guadalupe",
        "userLastName": "*",
        "device": "android",
        "status": "IN_PROCESS",
        "stepsComplete": {
            "ine": false,
            "valId": false,
            "otp": true,
            "firma": true,
            "beneficiary": false
        },
        "section": "REAL_TIME",
        "mlastName": '*'
    },
    {
        "requestNumber": "8888888888",
        "userName": "Juan",
        "userLastName": "*",
        "device": "ios",
        "status": "IN_PROCESS",
        "stepsComplete": {
            "ine": false,
            "valId": false,
            "otp": false,
            "firma": false,
            "beneficiary": false
        },
        "section": "REAL_TIME",
        "mlastName": '*'
    },
    {
        "requestNumber": "2222222222",
        "userName": "Maria",
        "userLastName": "*",
        "device": "android",
        "status": "IN_PROCESS",
        "stepsComplete": {
            "ine": false,
            "valId": false,
            "otp": false,
            "firma": false,
            "beneficiary": false
        },
        "section": "REAL_TIME",
        "mlastName": "*"
    },
    {
        "requestNumber": "5612676764",
        "userName": "Ana",
        "userLastName": "*",
        "device": "android",
        "status": "IN_PROCESS",
        "stepsComplete": {
            "ine": false,
            "valId": false,
            "otp": true,
            "firma": true,
            "beneficiary": false
        },
        "section": "PENDING_DOCUMENTS",
        "mlastName": '*'
    }]
    );
  },
};