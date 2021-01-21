import React from 'react';
import logoCierre from './ico-cierre.svg';
import { InfoCircleOutlined } from '@ant-design/icons';

export const dataFixture = {
    title: 'Title',
    fontFam: {
        fontTitle: 'Signika-Regular_Regular',
        fontValOp: 'Signika-Medium',
        fontNameOp: 'Signika-Medium',
    },
    imgTitle: logoCierre,
    optionInfo:{
        tooltipTitle:'Ayuda',
        icon:<InfoCircleOutlined style={{ fontSize: '16px'}} />,
        action:()=>{console.log('option info');
        }
    },
    options: [
        {
            valOp: 0,
            nameOp: 'Option1'
        },
        {
            valOp: 0,
            nameOp: 'Option2'
        },
    ]
}