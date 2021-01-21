import { Card, Row, Col, Button, Tooltip } from 'antd';
import React from 'react';
import { dataFixture } from './fixture/data.fixture';
import styles from './index.less';
import { PropsDataReq } from './interfaces/totalReq.interface';


const DataRequestBlock: React.FC<PropsDataReq> = ({
  title = dataFixture.title,
  fontFam = dataFixture.fontFam,
  imgTitle = dataFixture.imgTitle,
  optionInfo = dataFixture.optionInfo,
  options = dataFixture.options
}) => {

  return (
    <Card>
      <div>
        <Row>
          <Col span={19}>
            <div className={styles.header}>
              <h2 style={{ fontFamily: fontFam.fontTitle }}>{title}</h2>
              <Tooltip placement="top" title={optionInfo.tooltipTitle} className={styles.icon}>
                <div className={styles.btnInfo}>
                  <Button type='text' shape="circle" icon={optionInfo.icon} size='large' onClick={optionInfo.action} />
                </div>
              </Tooltip>
            </div>
            {options.map((op: any) => (
              <div className={styles.options} key={op.nameOp}>
                <p className={styles.valOption} style={{ fontFamily: fontFam.fontValOp }}>
                  {op.valOp}
                </p>
                <p className={styles.nameOption} style={{ fontFamily: fontFam.fontNameOp }}>{op.nameOp}</p>
              </div>
            ))}
          </Col>
          <Col span={5}>
            <div className={styles.imgContainer}>
              <img className={styles.imgTitle} src={imgTitle} />
            </div>
          </Col>
        </Row>
      </div>

    </Card>
  );
};

export default DataRequestBlock;