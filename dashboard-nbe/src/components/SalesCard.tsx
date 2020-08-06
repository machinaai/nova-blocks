import { Card, Col, Row, Tabs } from 'antd';
import { formatMessage } from 'umi';

import React from 'react';
import styles from '../style.less';

const { TabPane } = Tabs;

const rankingListData: { title: string; total: number }[] = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: formatMessage({ id: 'dashboardanalysis.analysis.test' }, { no: i }),
    total: 323234,
  });
}

const SalesCard = ({
  isActive,
  loading,
  selectDate,
}: {
  isActive: (key: 'today' | 'week' | 'month' | 'year') => string;
  loading: boolean;
  selectDate: (key: 'today' | 'week' | 'month' | 'year') => void;
}) => (
  <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
    <div className={styles.salesCard}>
      <Tabs
        tabBarExtraContent={
          <div className={styles.salesExtraWrap}>
            <div className={styles.salesExtra}>
              <a className={isActive('today')} onClick={() => selectDate('today')}>
                {' '}
              </a>

              <a className={isActive('week')} onClick={() => selectDate('week')}>
                {' '}
              </a>

              <a className={isActive('month')} onClick={() => selectDate('month')}>
                {' '}
              </a>

              <a className={isActive('year')} onClick={() => selectDate('year')}>
                {' '}
              </a>
            </div>
          </div>
        }
        size="large"
        tabBarStyle={{ marginBottom: 24 }}
      >
        <TabPane>
          <Row>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesBar} />
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesRank} />
            </Col>
          </Row>
        </TabPane>
        <TabPane>
          <Row>
            <Col xl={16} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesBar} />
            </Col>
            <Col xl={8} lg={12} md={12} sm={24} xs={24}>
              <div className={styles.salesRank}>
                <ul className={styles.rankingList}>
                  {rankingListData.map((item, i) => (
                    <li key={item.title}>
                      <span
                        className={`${styles.rankingItemNumber} ${i < 3 ? styles.active : ''}`}
                      />
                      <span className={styles.rankingItemTitle} title={item.title} />
                      <span />
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </TabPane>
      </Tabs>
    </div>
  </Card>
);

export default SalesCard;
