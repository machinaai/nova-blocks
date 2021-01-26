import { DataChart } from '../interfaces/ProblockProps..interface';

export const getPercentage = (data: any) => {
  if (data) {
    let dataDevice: DataChart[] = [];
    const totalDev = data.mobile + data.web + data.tablet;
    
    for (const property in data) {
      dataDevice = [
        ...dataDevice,
        {
          type: property,
          value: Number(((100 * data[property]) / totalDev).toFixed(2)),
          percent: Number(((100 * data[property]) / totalDev).toFixed(2))/100,
        },
      ];
    }

    return dataDevice;
  }

  return [
    {
      type: 'mobile',
      value: 0,
      percent: 0,
    },
    {
      type: 'web',
      value: 0,
      percent: 0,
    },
    {
      type: 'tablet',
      value: 0,
      percent: 0,
    },
  ];
};
