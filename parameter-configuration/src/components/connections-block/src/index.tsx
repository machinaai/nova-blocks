import React, { useState } from 'react';
import { Col, Divider, InputNumber, Radio, Row, Slider } from 'antd';
import styles from './index.less'
import { dataFixturenNuevos, fontFixture } from './fixture/data.fixture';

interface Props {
  data?: Item[],
  fontFam?: {
    fontTitle: string
    fontContent: string
  }
}
interface Item {
  title: string,
  content: string,
  radioOptions: {
    val1: string,
    val2: string
  }
}

const ConectionsBlock: React.FC<Props> = ({ data = dataFixturenNuevos, fontFam = fontFixture }) => {
  return (
    <div style={{ marginBottom: 19 }}>
      {data.map((element: any, index) => (
        <div key={element.title}>
          <div >
            <p style={{ fontFamily: `${fontFam.fontTitle}` }} className={styles.title}>{element.title}</p>
            <Row>
              <Col xs={24} md={8} xl={8}>
                <p className={styles.textContent} style={{ fontFamily: `${fontFam.fontContent}` }} >{element.content}</p>
              </Col>
              <Col xs ={24} md={14} xl={14} className={styles.radioBtn}>
                <Radio.Group size="large" buttonStyle="solid">
                  <Radio value="true" className={styles.item}>
                    {element.radioOptions.val1}
                  </Radio>
                  <Radio value="falso" className={styles.item}>
                    {element.radioOptions.val2}
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>
          </div>
          {index !== data.length - 1 && <Divider key={index}/>}
        </div>
      ))}
    </div>
  );
};

export default ConectionsBlock;
