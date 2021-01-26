import React, { useCallback, useEffect, useState } from 'react';
import { Chart, Tooltip, Axis, Interval, Coordinate, View, Annotation, Legend } from 'bizcharts';
import { PieChartProps } from './interfaces/dataInterface.interface';
import { dataFixture } from './fixtures/used-channels.fixture';
import styles from './index.less';

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

  const colors = ['#9e59ff', '#3092ff', '#e8e8e8'];

  const widget = (
    <div className={styles.widget}>

      <Chart
        placeholder={false}
        height={height}
        autoFit
        label={false}
        style={{ padding: '20, 80, 20, 20' }}
        forceUpdate
        forceFit
      >
        <Legend visible={false} />
        <View data={data}>
          <Legend visible={false} />
          <Tooltip shared showTitle={false} />
          <Coordinate type="theta" innerRadius={0.9} />
          <Interval
            position="percent"
            adjust="stack"
            color={['type', colors]}
            style={{
              stroke: '#444',
              lineWidth: 1,
            }}
            tooltip={false}
          />
          <Annotation.Text
            position={['50%', '40%']}
            content={data && `${data[index]?.value?.toString()}%`}
            className={styles.percentaje}
            style={{
              fontSize: '30',
              fill: '#262626',
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: '50%',
            }}
            offsetY={-20}
          />
          <Annotation.Text
            position={['50%', '60%']}
            content={data && data[index]?.type}
            style={{
              fontSize: '20',
              fill: '#000000',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
            offsetY={10}
          />
        </View>
        <View data={data}>
          <Axis visible={false} />
          <Coordinate type="polar" innerRadius={0.9} />
          <Interval
            label={false}
            position="type*value"
            color="#444"
            tooltip={false}
            size={['type', (val) => {
              if (val % 3 === 0) {
                return 4;
              }
              return 1;
            }]}
          />
        </View>
        <View data={data} scale={{
        }}>
          <Coordinate type="theta" innerRadius={0.75} />
          <Interval
            position="percent"
            adjust="stack"
            color="type"
            label={false}
          />
        </View>
      </Chart>
    </div >
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
