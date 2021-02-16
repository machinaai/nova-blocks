import { Card, Row, Col, Button, Tooltip } from 'antd';
import React from 'react';
import styles from './index.less';
import { PropsDataReq } from '../../interfaces/dataReq.interface';
import { InfoCircleOutlined } from '@ant-design/icons';


const DataRequestBlock: React.FC<PropsDataReq> = ({
  titles,
  fontFam,
  imageCard,
  optionInfo,
  options,
  percentage
}) => {

  return (
    <Card>
      <div>
        <Row>
          <Col span={19}>
            <div className={styles.header}>
              <h2 style={{ fontFamily: fontFam?.fontTitle }}>{titles?.title}</h2>
              <Tooltip placement="top" className={styles.icon} title={optionInfo?.tooltipTitle}>
                <InfoCircleOutlined />
              </Tooltip>
            </div>
            {options?.map((op: any) => (
              <div className={styles.options} key={op.nameOp}>
                <p className={styles.valOption} style={{ fontFamily: fontFam?.fontValOp }}>
                  {op.valOp}{percentage ? '%' : ''}
                </p>
                <p className={styles.nameOption} style={{ fontFamily: fontFam?.fontNameOp }}>{op.nameOp}</p>
              </div>
            ))}
          </Col>
          <Col span={5}>
            <div className={styles.imgContainer}>
              <img className={styles.imgTitle} src={imageCard} />
            </div>
          </Col>
        </Row>
      </div>

    </Card>
  );
};

export default DataRequestBlock;