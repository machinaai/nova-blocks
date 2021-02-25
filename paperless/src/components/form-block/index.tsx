import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useIntl } from "umi";
import InputAuto from "../input-label-up/index";
import styles from "./index.less";

interface Props {
  options?: Item[];
  actionForm?: Function | any;
  BtnOptions?: React.ReactNode;
}
interface Item {
  inputName: string;
  label: string;
  valPlaceholder: string;
  ruleValidate: Object[];
}

const FormBlock: React.FC<Props> = ({ options, actionForm, BtnOptions }) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
    },
  };

  const intl = useIntl();

  useEffect(() => {
    forceUpdate({});
  }, []);

  return (
    <Form
      form={form}
      name="control-hooks"
      onFinish={actionForm}
      style={{ width: '85%' }}
      validateMessages={validateMessages}>

      {options?.map((item) => (

        <Form.Item
          key={item.label}
          name={["user", `${item.inputName}`]}
          rules={item.ruleValidate}
        >
          <InputAuto
            placeholder={`${item.label}`}
            className={styles.input}
            maxLength={100}
            onlyNumbersAndLetters
          />
        </Form.Item>
      ))}
      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type="primary"
            shape="round"
            size="large"
            htmlType="submit"
            style={{ width: '100%' }}
            className={styles.BtnOpt}
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            {intl.formatMessage({ id: "Registry_Paperless.button_submit_Op1" })}
          </Button>
        )}
      </Form.Item>
      <Form.Item className={styles.BtnOpt}>{BtnOptions}</Form.Item>
    </Form>
  );
};

export default FormBlock;
