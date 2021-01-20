import { InfoCircleOutlined } from '@ant-design/icons';
import React from 'react';
import logoAbandonadas from './ico-abandonadas.svg';
import logoProceso from './ico-enproceso.svg';
import logoIniciadas from './ico-iniciadas.svg';
import logoSolicitudes from './ico-solicitudes.svg';
import logoTerminadas from './ico-terminadas.svg';

export const dataFixture={
        title:'Title',
        fontFam:{
            fontTitle:'Signika-Regular_Regular',
            fontTotalReq:'Signika-Medium',
            fontSubtitle:'Signika-Regular_Regular',
            fontOptions:'Signika-Medium',
            fontTotalReqOp:'Signika-Light'
        },
        imgTitle:logoSolicitudes,
        totalRequest:0,
        optionInfo:{
            tooltipTitle:'Ayuda',
            icon:<InfoCircleOutlined style={{ fontSize: '16px'}} />,
            action:()=>{console.log('option info');
            }
        },
        subtitle:'subtitle',
        options:[
            {
                nameOption:'option1',
                totalRequest:0,
                icon:<img src={logoIniciadas} />
            },
            {
                nameOption:'option2',
                totalRequest:0,
                icon:<img src={logoProceso} />
            },
            {
                nameOption:'option3',
                totalRequest:0,
                icon:<img src={logoAbandonadas} />
            },
            {
                nameOption:'option4',
                totalRequest:0,
                icon:<img src={logoTerminadas} />
            }
        ]
}