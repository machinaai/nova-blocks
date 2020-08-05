import React, { useState, useEffect } from 'react';
import { Form, Button } from 'antd';
import { connect, Dispatch, formatMessage, Link, useIntl } from 'umi';
import { UserOutlined } from '@ant-design/icons';
import FormItem from '../FormItem';
import { StateType } from '../../model';
import styles from './index.less';
import RegisterMessage from '../../helpers/RegisterMessage';

/**
 * Interface for data and dispatch
 */
interface Step1Props {
  data?: StateType['step'];
  status?: StateType['statusCode'] | undefined;
  dispatch?: Dispatch;
}

/**
 * Template for Step 1
 * @param props data to send
 */
const Step1: React.FC<Step1Props> = (props) => {
  const intl = useIntl();
  const { dispatch, data, status } = props;
  const [form] = Form.useForm();
  const [, setIsDisabled] = useState();

  useEffect(() => {
    setIsDisabled({});
    const { legalBusinessID, legalBusinessName } = data;
    form.setFieldsValue({
      legalBusinessName,
      legalBusinessID,
    });
  }, []);

  /**
   * Function that reset form fields
   */
  const validateForm = () => {
    form.resetFields();
  };

  if (!data) {
    return null;
  }

  const { validateFields } = form;

  /**
   * Function that receive data and send it to Step 2
   */
  const onValidateForm = async () => {
    const values = await validateFields();
    if (dispatch) {
      dispatch({
        type: 'bneStepForm/validateClient',
        payload: values,
      });
      dispatch({
        type: 'bneStepForm/saveCurrentStep',
        payload: 'confirm',
      });
    }
  };

  return (
    <>
      <div className={styles.errorContainer}>
        <span>
          {(status >= 500 || status >= 400) && (
            <RegisterMessage
              content={intl.formatMessage({
                id: 'bneStepForm.registermessage',
              })}
            />
          )}
        </span>
      </div>
      <Form
        form={form}
        layout="horizontal"
        className={styles.stepForm}
        hideRequiredMark
        onFinish={validateForm}
      >
        <div className={styles.userContainer}>
          <FormItem
            prefix={<UserOutlined />}
            name="legalBusinessName"
            placeholder={formatMessage({ id: 'bneStepForm.step1.input.name.placeholder' })}
            maxLength={21}
            onPasteDisabled
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'bneStepForm.verification.empty' }),
              },
              {
                min: 3,
                message: formatMessage({ id: 'bneStepForm.step1.input.check' }),
              },
            ]}
          />
          <FormItem
            prefix={<UserOutlined />}
            name="legalBusinessID"
            placeholder={formatMessage({ id: 'bneStepForm.step1.input.rfc.placeholder' })}
            maxLength={12}
            onPasteDisabled
            upperCase
            rules={[
              {
                required: true,
                message: formatMessage({ id: 'bneStepForm.verification.empty' }),
              },
              {
                pattern: /^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/i,
                message: formatMessage({ id: 'bneStepForm.step1.input.check' }),
              },
            ]}
          />
          <div className={styles.accountQuestion}>
            <Link
              style={{
                float: 'right',
                fontFamily: 'PingFang SC Regular, Arial, Helvetica, sans-serif',
                fontSize: '14px',
              }}
              to="/user/login"
            >
              {formatMessage({ id: 'bneStepForm.basic.account' })}
            </Link>
          </div>
          <Form.Item shouldUpdate>
            {() => (
              <Button
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  form.getFieldsError().filter(({ errors }) => errors.length).length
                }
                className={styles.buttonContinue}
                onClick={onValidateForm}
              >
                {formatMessage({ id: 'bneStepForm.button.continue' })}
              </Button>
            )}
          </Form.Item>
          <div className={styles.operations}>
            <Link to="/user/login" style={{ float: 'right' }}>
              {formatMessage({ id: 'bneStepForm.label.cancel' })}
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default connect(({ bneStepForm }: { bneStepForm: StateType }) => ({
  data: bneStepForm.step,
  status: bneStepForm.statusCode,
}))(Step1);
