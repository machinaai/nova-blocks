import React, { useEffect } from 'react';
import { Col, Form, Row } from 'antd';
import styles from './index.less';
import { dataFieldsFixture, setDataFixture } from './fixture/dataFixture';
import { PropsBlock } from './Interface/formInterface.interface';

const FormBlock: React.FC<PropsBlock> = ({ fieldsData = dataFieldsFixture, onSave }) => {
  const [form] = Form.useForm();
  const { section1, section2 } = fieldsData;
  const { titleSection: titleSec1, fields: { col1: col1Sec1, col2: col2Sec1 } } = section1;
  const { titleSection: titleSec2, fields: { col1: col1Sec2, col2: col2Sec2 } } = section2;
  const newDataCo1Sec2 = [...col1Sec2];
  newDataCo1Sec2.shift();

  const layout = {
    wrapperCol: { span: 23 },
  };

  return (
    <Form
      {...layout}
      layout="vertical"
      name="nest-messages"
      form={onSave} >
      <Row>
        <Col xl={12} xs={24} >
          <div className={styles.title}>{titleSec1}</div>
          <Row>
            <Col xl={12} md={12} xs={24}>
              {col1Sec1.map((val: any) => (
                <Form.Item key={val.inputName} name={val.inputName} label={<p className={styles.inputName}>{val.label}</p>} >
                  {val.element}
                </Form.Item>
              ))}
            </Col>
            <Col xl={12} md={12} xs={24}>
              {col2Sec1.map((val: any) => (
                <Form.Item key={val.inputName} name={val.inputName} label={<p className={styles.inputName}>{val.label}</p>}  >
                  {val.element}
                </Form.Item>
              ))}
            </Col>
          </Row>
        </Col>
        <Col xl={12} xs={24} >
          <div className={styles.title}>{titleSec2}</div>
          <Form.Item name={col1Sec2[0].inputName} label={<p className={styles.inputName}>{col1Sec2[0].label}</p>}>
            {col1Sec2[0].element}
          </Form.Item>
          <Row>
            <Col xl={12} md={12} xs={24}>
              {newDataCo1Sec2.map((val: any) => (
                <Form.Item key={val.inputName} name={val.inputName} label={<p className={styles.inputName}>{val.label}</p>}  >
                  {val.element}
                </Form.Item>
              ))}
            </Col>
            <Col xl={12} md={12} xs={24}>
              {col2Sec2.map((val: any) => (
                <Form.Item key={val.inputName} name={val.inputName} label={<p className={styles.inputName}>{val.label}</p>}  >
                  {val.element}
                </Form.Item>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  )
}
export default FormBlock;