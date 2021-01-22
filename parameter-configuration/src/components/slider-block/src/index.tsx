import React, { useState } from 'react';
import { Col, InputNumber, Row, Slider } from 'antd';
import { useIntl } from 'umi';
import styles from './index.less'

const SliderBlock: React.FC<any> = ({ range = 100 }) => {
  const intl = useIntl();
  const [state, setState] = useState(0);
  const marks = {
    0: '0',
    [100 / 2]: 100 / 2,
    [range]: range,
  };

  const onChange = (value: any) => {
    setState(value);
  };

  return (
    <Row>
      <Col xs={12} md={16} xl={20} className={styles.slider}>
        <Slider min={0} max={range} marks={marks} onChange={onChange} value={state} />
      </Col>
      <Col xs={4} xl={4}>
        <InputNumber
          min={0}
          max={range}
          style={{ margin: '0 0 0 48px' }}
          value={state}
          onChange={onChange}
          placeholder={intl.formatMessage({ id: 'slider.block.placeholder' })}
        />
      </Col>
    </Row>
  );
};

export default SliderBlock;
