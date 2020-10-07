import React from 'react';
import { Chart, Geom } from 'bizcharts';
import { DataInterface } from './data.interface';
import { dataFixture } from './data.fixture';

interface Props {
  data?: DataInterface[],
  height?: number,
  firstColor?: string,
  lastColor?: string,
  selected?: Function,
}

const BarGraph: React.FC<Props> = ({data = dataFixture, height = 100, firstColor = '#ffeeee', lastColor = '#ff6565', selected}) => {

  const onClickInterval = (event: any) => (event.data && selected && selected(event.data._origin));

  return (
    <>
      <Chart height={height} forceFit={true} data={data} padding='auto' onIntervalClick={onClickInterval}>
        <Geom select={[true, {
            mode: 'single',
              style: { 
                fill: 'blue',
              }
          }]} color={["text",`${firstColor}-${lastColor}`]} type="interval" position="text*value" />
      </Chart>
    </>
  );
}

export default BarGraph;
