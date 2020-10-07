import React, { useState, useEffect } from 'react';
import { Chart, Tooltip, Geom, Axis, Legend } from 'bizcharts';
import {DataGraficInterface} from './interfaces/dataGrafic.interface';
import moment from "moment";

const valExample= [
  {month: "09", day: "05", balance: 34},
  {month: "09", day: "06", balance: 100,}];

const LinealGrafic: React.FC <DataGraficInterface> = ({data=valExample,titleGrafic='',dropValue='1',width=500, height=200}) => {
  const [charData, setCharData] = useState(data);

  useEffect(() => {
    setCharData(data)
  }, [data]);

  let valX = '';
  valX = dropValue === '1' ? 'day' : 'month';

  return (
    <>
    <Chart width={width} height={height}  data={charData} padding='auto' forceFit >
      <span className='main-title'>{titleGrafic}</span>
      <Axis name={valX} />
      <Axis name="balance" label={{ formatter: (val:string) => `${val}%` }} />
      <Legend />
      <Tooltip useHtml htmlContent={
        (title:string, items:any) => {
          let value;
          let yearValue;
          let monthh;
          items?.forEach((val: any) => {
            const { point: { _origin: origin } } = val;
            const { year, month, balance } = origin;
            value = balance;
            monthh = month;
            yearValue = year;
          });
          return `
          <div class="g2-tooltip" style='position:absolute;'>
          <div class="g2-tooltip-title">
          <p>${dropValue === '1' ? `${title} ${moment.months(Number(monthh) - 1)}`
              : `${(moment.months(Number(title) - 1).charAt(0).toUpperCase()) +
              moment.months(Number(title) - 1).slice(1)} ${yearValue}`}</p>
          </div>
          <div>${value}%</div>
          </div>`
        }}
      />
      <Geom type="line" position={`${valX}*balance`} size={2} />
      <Geom type="point" position={`${valX}*balance`} shape="circle" size={3} />
    </Chart>
    </>
  );
}

export default LinealGrafic;
