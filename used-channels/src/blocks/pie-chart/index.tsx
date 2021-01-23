import React, { useCallback, useEffect, useState } from 'react';
import { Chart, Geom, Tooltip, Coord, Guide } from 'bizcharts';
import { PieChartProps } from './interfaces/dataInterface.interface';
import { dataFixture } from './fixtures/used-channels.fixture';
import styles from './index.less';

const { Text } = Guide;
const PieChart: React.FC<PieChartProps> = ({ data = dataFixture, height = 285, indexVal = 0, setVal }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setIndex(indexVal);
  }, [indexVal])

  const onClickAccount = useCallback(
    (event: { data: { _origin: any; }; }) => {
      if (data && event.data) {
        const { _origin: Origin } = event.data;
        const indexSelected = data.indexOf(
          data.find((item) => item.type === Origin.type) || data[0],
        );
        setVal(indexSelected)
        setIndex(indexSelected);
      }
    },
    [data],
  );

  const widget = (
    <div className={styles.widget}>
      <Chart
        forceUpdate
        height={height}
        data={data}
        forceFit
        padding={[20, 80, 20, 20]}
        onGetG2Instance={(chart: { get: (arg0: string) => any[]; on: (arg0: string, arg1: () => void) => void; }) => {
          const geom = chart.get('geoms')[0];
          const items = geom.get('data');
          geom.setSelected(items[index]);
          chart.on('afterrender', () => {
            geom.setSelected(items[index]);
          });
        }}
        onPlotClick={onClickAccount}
      >
        <Coord type="theta" innerRadius={0.75} />

        <Tooltip showTitle={false} />
        <Geom type="intervalStack" position="percentage" color="type" shape="circle">
          <Guide>
            <Text
              position={['50%', '50%']}
              content={data && `${data[index]?.percentage?.toString()}%`}
              style={{
                fontSize: '30',
                fill: '#262626',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
              offsetY={-20}
            />
            <Text
              position={['50%', '50%']}
              content={data && data[index]?.type}
              style={{
                fontSize: '14',
                fill: '#000000',
                textAlign: 'center',
              }}
              offsetY={10}
            />
          </Guide>
        </Geom>
      </Chart>
    </div>
  );

  return (
    <>
      <div className={styles.container}>
        {data && widget}
      </div>
    </>
  );
};

export default PieChart;
