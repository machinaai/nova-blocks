import { ClockCircleOutlined, StopOutlined } from '@ant-design/icons';
import handIcon from './tap.svg';
import React from 'react';

export const fontFamFixture = {
  fontTitle: 'Signika-Regular_Regular',
  fontSubtitle: 'Signika-Regular_Regular',
}
export const dataFixture = [
  {
    type: 'step1',
    count: 23,
    averageTime: 0.0,
  },
  {
    type: 'step2',
    count: 23,
    averageTime: 0.3,
  },
  {
    type: 'step3',
    count: 23,
    averageTime: 1.0,
  },
  {
    type: 'step4',
    count: 18,
    averageTime: 2,
  },
  {
    type: 'step5',
    count: 13,
    averageTime: 0.5,
  },
  {
    type: 'step6',
    count: 7,
    averageTime: 1.5,
  },
  {
    type: 'step7',
    count: 4,
    averageTime: 1,
  },
  {
    type: 'step8',
    count: 3,
    averageTime: 0.9,
  },
  {
    type: 'step9',
    count: 1,
    averageTime: 0.0,
  },
];



export const iconsFixture = {
  icon1: <ClockCircleOutlined />,
  icon2: <img src={handIcon} />,
  icon3: <StopOutlined rotate={90} />
}
