import React, { useEffect, useState } from 'react';
import { Chart, Geom, Tooltip, Axis } from 'bizcharts';
import { optionsFixture } from './fixtures/dataOption.fixture';
import { StageRequestProps } from './interfaces/dataInterface.interface';
import styles from './index.less';

const FunnelChartBlock: React.FC<StageRequestProps> = ({ dataOptions = optionsFixture, heightStatistic = 195, heightCanvas = 140 }) => {
  const [charData, setCharData] = useState([{}]);

  const data = () => {
    setCharData(dataOptions)
  }
  useEffect(() => {
    data()
  }, [dataOptions]);

  const cols = {
    type: {
      range: [0, 1]
    }
  };
  return (
    <>
      <div className={styles.chartContainer}>
        <Chart height={heightCanvas} autoFit={true} padding='auto' data={charData} scale={cols} className={styles.chart}>
          <Tooltip />
          <Axis visible={false}/>
          <Geom type="area" tooltip={false} position="type*percentage" shape="smooth" />
        </Chart>
      </div>
      <div className={styles.requestContainer} style={{ height: heightStatistic }}>
        {dataOptions.map((option: any, index) => (
          <div className={index !== dataOptions.length - 1 ? styles.view : styles.view1} key={option.type}>
            <div className={styles.title}>{option.type}</div>
            <div className={styles.percent}>{option.percentage}%</div>
          </div>
        ))}
      </div>
    </>

  );
};
export default FunnelChartBlock;
