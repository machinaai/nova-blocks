
import React from 'react';
import handIcon from './tap.svg'
import { ClockCircleOutlined, StopOutlined} from '@ant-design/icons';

export const iconsFixture= {
       icon1: <ClockCircleOutlined />,
       icon2: <img src={handIcon}/>,
       icon3:<StopOutlined rotate={90} />
}

export const dataFixture =[
    {
      type: 'Tour',
      count:23,
      averageTime: 0.0,
    },
    {
      type: '# Celular',
      count:23,
      averageTime: 0.3,
    },
    {
      type: 'OTP',
      count:23,
      averageTime: 1.0,
    },
    {
      type: ' N2 -N4',
      count:18,
      averageTime: 2,
    },
    {
      type: 'Permisos',
      count:13,
      averageTime: 0.5,
    },
    {
      type: 'Datos',
      count:7,
      averageTime: 1.5,
    },
    {
      type: 'Validación',
      count:4,
      averageTime: 1,
    },
    {
      type: 'Paperless',
      count:3,
      averageTime: 0.9,
    },
    {
      type: 'Apertura',
      count:1,
      averageTime: 0.0,
    },
  ];
  
 