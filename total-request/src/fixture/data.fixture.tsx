import React from 'react';
import logoAbandonadas from './ico-abandonadas.svg';
import logoProceso from './ico-enproceso.svg';
import logoIniciadas from './ico-iniciadas.svg';
import logoSolicitudes from './ico-solicitudes.svg';
import logoTerminadas from './ico-terminadas.svg';

export const dataFixture = {
  font: {
    fontTitle: 'Signika-Regular_Regular',
    fontTotalReq: 'Signika-Medium',
    fontSubtitle: 'Signika-Regular_Regular',
    fontOptions: 'Signika-Medium',
    fontTotalReqOp: 'Signika-Light'
  },
  icons: {
    iconTotalReq: logoSolicitudes,
    iconOp1: <img src={logoIniciadas} alt='option1' />,
    iconOp2: <img src={logoProceso} alt='option2' />,
    iconOp3: <img src={logoAbandonadas} alt='option3' />,
    iconOp4: <img src={logoTerminadas} alt='option4' />
  },
  request: {
    totalRequest: 54,
    initiated: 10,
    inProccess: 14,
    abandoned: 8,
    finished: 22,
  },
  actionInfo: () => { console.log('Option info') }
}

export const totalRequest = {
  "userType": "movil",
  "startDate": '',
  "endDate":''
};