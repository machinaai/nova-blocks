import React, { Fragment } from 'react';

import { Row, Col, Divider } from 'antd';
import styles from './index.less';
import { dataFixture } from './fixtures/data.fixture';
import { RowDetailsPropsInterface, DataInterface } from './interfaces/rowDetailsProps.interface';

const RowDetails: React.FC<RowDetailsPropsInterface> = ({ title, data=dataFixture, numberOfSections }) => {
  return (
    <>
      <Row className={styles.container}>
        <Col flex="200px">
          <div className={styles.title}>{title}</div>
        </Col>
        {data?.map((section: DataInterface) => {
          return (
            <Fragment key={section.titleSection}>
              <Divider type="vertical" className={styles.divider} />
              <Col flex={numberOfSections ? 'auto' : 4 / 5}>
                <div className={styles.section}>
                  <div>
                    <div className={styles.titleSection}>
                    <p onClick={() => section.action}>{section.titleSection}</p>
                    </div>
                    <div className={styles.content}>
                      <p onClick={() => section.action}>{section.quantity}</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Fragment>
          );
        })}
      </Row>
    </>
  );
};

export default RowDetails;
