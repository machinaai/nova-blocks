import React, { useCallback, useState } from 'react';
import { Chart, Geom, Tooltip, Coord, Guide, Legend } from 'bizcharts';
import styles from './index.less';
import { PieGraphInterfaceProps } from './interfaces/dataInterface.interface';
import { dataFixture } from './fixtures/balance-summary.fixture';
import { currencyHelper } from './helper/currency.helper';

const { Text } = Guide;
/**
 * PieGraph 
 *
 * @param {*} { data = dataFixture, height = 285 }
 * @return {*} 
 */
const PieGraph: React.FC<PieGraphInterfaceProps> = ({ data = dataFixture, height = 285 }) => {

  const [index, setIndex] = useState(0);

  const onClickAccount = useCallback(
    (event: { data: { _origin: any; }; }) => {
      if (data && event.data) {
        const { _origin: Origin } = event.data;
        const indexSelected = data.indexOf(
          data.find((item) => item.type === Origin.type) || data[0],
        );
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
        padding={['auto', 190, 'auto', -30]}
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
        <Legend
          position="right-center"
          textStyle={{
            textAlign: 'start',
            fill: '#404040',
            fontSize: '14',
            textBaseline: 'top',
          }}
          slidable
        />

        <Tooltip showTitle={false} />
        <Geom type="intervalStack" position="percentage" color="type" shape="circle">
          <Guide>
            <Text
              position={['50%', '50%']}
              content={data && data[index]?.type}
              style={{
                fontSize: '14',
                fill: '#000000',
                textAlign: 'center',
              }}
              offsetY={-20}
            />
            <Text
              position={['50%', '50%']}
              content={data && currencyHelper(Number(data[index]?.balance?.toString()))}
              style={{
                fontSize: '30',
                fill: '#262626',
                textAlign: 'center',
                fontWeight: 'bold',
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

export default PieGraph;
