import { Col, Row } from 'antd';

import React from 'react';
import { ChartCard } from './Charts';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const IntroduceRow = () => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <ChartCard title={<p> </p>} total={<p> </p>} footer={<p> </p>} contentHeight={46}>
        <p> </p>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard title={<p> </p>} total={<p> </p>} footer={<p> </p>} contentHeight={46}>
        <p> </p>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard title={<p> </p>} total={<p> </p>} footer={<p> </p>} contentHeight={46}>
        <p> </p>
      </ChartCard>
    </Col>

    <Col {...topColResponsiveProps}>
      <ChartCard title={<p> </p>} total={<p> </p>} footer={<p> </p>} contentHeight={46}>
        <p> </p>
      </ChartCard>
    </Col>
  </Row>
);

export default IntroduceRow;
