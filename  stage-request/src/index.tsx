import React from 'react';
import { Statistic, Row, Col, Card } from 'antd';
import { optionsFixture } from './fixtures/dataOption.fixture';
import { StageRequestProps } from './interfaces/dataInterface.interface';
import styles from './index.less';

const StageRequestBlock: React.FC<StageRequestProps> = ({ dataOptions = optionsFixture, paddingBtm = 76 }) => {
  const newData = [...dataOptions];
  newData.pop();
  const lastElement = dataOptions[dataOptions.length - 1];
  return (
    <Row>
      {newData.map((option: any) => (
        <Col flex={1} key={option.key} >
          <Statistic title={option.type} value={`${option.percentage}%`} valueStyle={{ paddingBottom: paddingBtm }} className={styles.option} />
        </Col>
      ))}
      <Col flex={1} key={lastElement.key} >
        <Statistic title={lastElement.type} value={`${lastElement.percentage}%`} valueStyle={{ paddingBottom: paddingBtm }} className={styles.option1} />
      </Col>
    </Row>
  );
};
export default StageRequestBlock;
