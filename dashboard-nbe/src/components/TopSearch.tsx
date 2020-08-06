import { Card, Col, Row, Table } from 'antd';
import React from 'react';

const TopSearch = () => (
  <Card style={{ height: '100%' }}>
    <Row gutter={68}>
      <Col sm={12} xs={24} style={{ marginBottom: 24 }} />
    </Row>
    <Table<any> />
  </Card>
);

export default TopSearch;
