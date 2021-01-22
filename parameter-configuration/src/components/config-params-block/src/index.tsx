import React from 'react';
import { Col, Divider, Row } from 'antd';
import { dataFixture, fontFixture } from './fixture/data.fixture';
import { PropsConfigParams } from './interfaces/configParams.interface';
import styles from './index.less';

const ConfigParamsBlock: React.FC<PropsConfigParams> = ({ data = dataFixture, fontFam = fontFixture }) => {
  const { options, option3, option4 } = data;
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col span={24}>
        {options.map((op: any) => (
          <div key={op.title}>
            <div className={styles.header}>
              <h2 style={{ fontFamily: `${fontFam.fontTitle}` }} className={styles.titleOption}>{op.title}</h2>
            </div>
            <Row style={{ marginBottom: 19 }}>
              <Col span={24} >
                <p className={styles.title} style={{ fontFamily: `${fontFam.fontTitle}` }}>{op.cont1.title}</p>
                <Row>
                  <Col xs={24} md={8} xl={8}>
                    <p className={styles.textContent} style={{ fontFamily: `${fontFam.fontContent}` }}>{op.cont1.content}</p>
                  </Col>
                  <Col xs={24} md={14} xl={14}>
                    {op.cont1.sliderCont}
                  </Col>
                </Row>
              </Col>
              <Divider />
              <Col span={24}>
                <p className={styles.title} style={{ fontFamily: `${fontFam.fontTitle}` }}>{op.cont2.title}</p>
                <Row>
                  <Col xs={24} md={8} xl={8}>
                    <p className={styles.textContent} style={{ fontFamily: `${fontFam.fontContent}` }}>{op.cont2.content}</p>
                  </Col>
                  <Col xs={24} md={14} xl={14}>
                    {op.cont2.sliderCont}
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        ))}
      </Col>
      <Col span={24}>
        <div className={styles.header}>
          <h2 style={{ fontFamily: `${fontFam.fontTitle}` }} className={styles.titleOption}>{option3.title}</h2>
        </div>
        {option3.cont}
      </Col>
      <Col span={24}>
        <div className={styles.header}>
          <h2 style={{ fontFamily: `${fontFam.fontTitle}` }} className={styles.titleOption}>{option4.title}</h2>
        </div>
        <p className={styles.title} style={{ fontFamily: `${fontFam.fontTitle}` }}>{option4.cont.title}</p>
        <Row>
          <Col xs={24} md={8} xl={8}>
            <p className={styles.textContent} style={{ fontFamily: `${fontFam.fontContent}` }}>{option4.cont.content}</p>
          </Col>
          <Col xs={24} md={14} xl={14}>
            {option4.cont.sliderCont}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default ConfigParamsBlock;