import React from 'react';
import { Form, Input } from 'antd';
import styles from './index.less';

interface Props {
  options?: Item[],
  actionForm?:Function | any,
  BtnOptions?:React.ReactNode
}
interface Item {
  inputName: string,
  label: string,
  valPlaceholder:string,
  ruleValidate: Object[],
}

const FormBlock: React.FC<Props> = ({ options,actionForm,BtnOptions}) => {

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };  

  return (
    <Form layout="vertical" name="nest-messages" onFinish={actionForm} validateMessages={validateMessages}>
      {
        options?.map((item) => (
          <Form.Item key={item.label} name={['user', `${item.inputName}`]} label={`${item.label}`} rules={item.ruleValidate} >
            <Input placeholder={`${item.valPlaceholder}`} />
          </Form.Item>
        ))
      }
      <Form.Item className={styles.BtnOpt}>
        {BtnOptions}
      </Form.Item>
    </Form>
  )
}
export default FormBlock;