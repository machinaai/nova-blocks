import React, { useEffect, useState } from 'react';
import { Statistic, Row, Col, Card } from 'antd';
import { Chart, Geom, Tooltip } from 'bizcharts';
import { optionsFixture } from './fixtures/dataOption.fixture';
import { StageRequestProps } from './interfaces/dataInterface.interface';
import styles from './index.less';

const FunnelChartBlock: React.FC<StageRequestProps> = ({ dataOptions = optionsFixture, paddingStatistic = 68, heightCanvas = 140 }) => {
  const [charData, setCharData] = useState([{}]);
  const newData = [...dataOptions];
  newData.pop();
  const lastElement = dataOptions[dataOptions.length - 1];

  const data = () => {
    setCharData(dataOptions
    )
  }
  useEffect(() => {
    data()
  }, []);

  const cols = {
    type: {
      range: [0, 1]
    }
  };
  return (
    <>
      <div className={styles.chartContainer}>
        <Chart height={heightCanvas} forceFit={true} padding='auto' data={charData} scale={cols} className={styles.chart}>
          <Tooltip />
          <Geom type="area" tooltip={false} position="type*percentage" shape="smooth" />
        </Chart>
      </div>
      <div className={styles.requestContainer}>
        <Row >
          {newData.map((option: any) => (
            <Col flex={1} key={option.key} >
              <Statistic title={option.type} value={`${option.percentage}%`} valueStyle={{ paddingBottom: paddingStatistic }} className={styles.option} />
            </Col>
          ))}
          <Col flex={1} key={lastElement.key} >
            <Statistic title={lastElement.type} value={`${lastElement.percentage}%`} valueStyle={{ paddingBottom: paddingStatistic }} className={styles.option1} />
          </Col>
        </Row>
      </div>
    </>

  );
};
export default FunnelChartBlock;
