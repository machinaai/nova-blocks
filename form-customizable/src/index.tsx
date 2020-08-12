import React, { useState, useEffect } from 'react';
import { Form, Button } from 'antd';
import { Link } from 'umi';
import { AimOutlined } from '@ant-design/icons';
import FormItem from './FormItem';
import styles from './index.less';
import { FormProps } from './interfaces/form-props.interface';
import { InputProps } from './interfaces/input-auto-label.interface';

/**
 * Block Customizable Form
 */
const FormCustomizable: React.FC<FormProps> = (props) => {
  const { formFields, valueFields, onSumbit, onCancel, onReturn } = props;
  // Initial form if you don't get formFields
  const fixtureFields: InputProps[] = [{
    prefix: <AimOutlined />,
    name: 'password',
    placeholder: 'Password',
    maxLength: 20,
    rules: [
      {
        required: true,
        message: 'Validate information',
      },
      {
        min: 3,
        message: 'Minimum length 3',
      },
    ],
    inputPassword: true
  }]

  const makeFields = formFields || fixtureFields;
  const [form] = Form.useForm();
  const [, setIsDisabled] = useState();

  // Inputs configuration
  useEffect(() => {
    // Auto fill fields value
    if (valueFields) {
      form.setFieldsValue(valueFields);
    }
    // Disabled button validate
    setIsDisabled({});
  }, [valueFields]);

  /**
   * Function cancel operation
   */
  const returnOperation = () => {
    if (onReturn) {
      onReturn.action();
    }
  };

  /**
   * Function cancel operation
   */
  const cancelOperation = () => {
    if (onCancel) {
      onCancel.action();
    }
  };

  /**
   * Function that reset form fields
   */
  const validateForm = () => {
    form.resetFields();
  };

  /**
   * Function submit form
   */
  const onValidateForm = async () => {
    if (onSumbit) {
    onSumbit.action();
    }
  };

  return (
    <>
      <Form form={form} layout="horizontal" className={styles.form} onFinish={validateForm}>
        <div className={styles.userContainer}>
          
          { // Children fields form
          makeFields.map((item: any) => {
            return <FormItem key={item.name} {...item} rules={item.rules} />;
          })}

          {onSumbit && (
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
                {onSumbit.label}
              </Button>
            )}
          </Form.Item>
          )}
          <div className={styles.operations}>
            {onReturn && (
              <Link to="#" className={styles.option1} onClick={returnOperation}>
                {onReturn.label}
              </Link>
            )}
            {onCancel && (
              <Link to="#" className={styles.option2} onClick={cancelOperation}>
                {onCancel.label}
              </Link>
            )}
          </div>
        </div>
      </Form>
    </>
  );
};

export default FormCustomizable;
