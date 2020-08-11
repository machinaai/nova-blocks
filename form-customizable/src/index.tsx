import React, { useState, useEffect } from 'react';
import { Form, Button } from 'antd';
import { useIntl, Link } from 'umi';
import { UserOutlined, AimOutlined } from '@ant-design/icons';
import FormItem from './FormItem';
import styles from './index.less';

/**
 * Block Customizable Form
 */
const FormCustomizable: React.FC = (props) => {
  const useintl = useIntl();
  const [form] = Form.useForm();
  const [, setIsDisabled] = useState();

  // Inputs configuration
  const inputsFixture = [
    {
      prefix: <UserOutlined />,
      name: 'user',
      placeholder: useintl.formatMessage({ id: 'formCustom.placeholder.input1' }),
      maxLength: 20,
      rules: [
        {
          required: true,
          message: useintl.formatMessage({ id: 'formCustom.input.empty' }),
        },
        {
          min: 3,
          message: useintl.formatMessage({ id: 'formCustom.input.check' }),
        },
      ],
    },
    {
      prefix: <AimOutlined />,
      name: 'password',
      placeholder: useintl.formatMessage({ id: 'formCustom.placeholder.input2' }),
      maxLength: 20,
      rules: [
        {
          required: true,
          message: useintl.formatMessage({ id: 'formCustom.input.empty' }),
        },
        {
          min: 3,
          message: useintl.formatMessage({ id: 'formCustom.input.check' }),
        },
      ],
      inputPassword: true
    },
  ];
  
  useEffect(() => {

    // Disabled button validate
    setIsDisabled({});
  },[props]);

  /**
   * Function cancel operation
   */
  const returnOperation = () => {};

  /**
   * Function that reset form fields
   */
  const validateForm = () => {
    form.resetFields();
  };


  /**
   * Function submit form
   */
  const onValidateForm = async () => {};

  return (
    <>
      <Form form={form} layout="horizontal" className={styles.form} onFinish={validateForm}>
        <div className={styles.userContainer}>
          {inputsFixture.map((item) => {
            return <FormItem key={item.name} {...item} rules={item.rules} />;
          })}
          <Form.Item shouldUpdate>
          {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  Boolean(form.getFieldsError().filter(({ errors }) => errors.length).length)
                }
                className={styles.buttonContinue}
                onClick={onValidateForm}
              >
                {useintl.formatMessage({ id: 'formCustom.validate.button' })}
              </Button>
            )}
          </Form.Item>
          <div className={styles.operations}>
            <Link to="#" className={styles.option1} onClick={returnOperation}>
              {useintl.formatMessage({ id: 'formCustom.label.itsnome' })}
            </Link>
            <Link to="#" className={styles.option2} onClick={returnOperation}>
              {useintl.formatMessage({ id: 'formCustom.label.cancel' })}
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default FormCustomizable;
