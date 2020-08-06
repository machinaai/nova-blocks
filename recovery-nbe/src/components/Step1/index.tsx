import React, { useState, useEffect } from 'react';
import { Form, Button } from 'antd';
import { connect, Dispatch, useIntl, Link } from 'umi';
import { UserOutlined } from '@ant-design/icons';
import FormItem from '../FormItem';
import { StateType } from '../../model';
import styles from './index.less';

/**
 * Interface for data and dispatch
 */
interface Step1Props {
  data?: StateType['step'];
  dispatch?: Dispatch;
  stateCurrent?: StateType['stateCurrent'];
}

/**
 * Template for Step 1
 * @param props data to send
 */
const Step1: React.FC<Step1Props> = (props) => {
  const useintl = useIntl();
  const { dispatch, data, stateCurrent } = props;
  const [form] = Form.useForm();
  const [, setIsDisabled] = useState();

  useEffect(() => {
    const { maskedBusinessName, maskedUserName } = data;
    if (stateCurrent) {
      form.setFieldsValue({
        maskedBusinessName,
        maskedUserName,
      });
    }
    setIsDisabled({});
  }, [data]);
  /**
   * Function dispatch cancel operation
   */
  const returnOperation = () => {
    if (dispatch) {
      dispatch({
        type: 'recoverStepForm/finalizeOperation',
      });
    }
  };

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
      if (stateCurrent) {
        dispatch({
          type: 'recoverStepForm/continueFlow',
          payload: 'number',
        });
      } else {
        dispatch({
          type: 'recoverStepForm/validateUserData',
          payload: values,
          statusCode: undefined,
        });
      }
    }
  };

  return (
    <>
      <Form form={form} layout="horizontal" className={styles.stepForm} onFinish={validateForm}>
        <div className={styles.userContainer}>
          {!stateCurrent ? (
            <>
              <FormItem
                prefix={<UserOutlined />}
                name="user"
                placeholder={useintl.formatMessage({
                  id: 'recoverStepForm.step1.input.name.placeholder',
                })}
                maxLength={20}
                onPasteDisabled
                rules={[
                  {
                    required: true,
                    message: useintl.formatMessage({ id: 'recoverStepForm.step1.input.empty' }),
                  },
                  {
                    min: 3,
                    message: useintl.formatMessage({ id: 'recoverStepForm.step1.input.check' }),
                  },
                ]}
              />
            </>
          ) : (
            <>
              <FormItem
                prefix={<UserOutlined />}
                name="maskedBusinessName"
                placeholder={useintl.formatMessage({
                  id: 'recoverStepForm.step1.legal.name',
                })}
                maxLength={21}
                onPasteDisabled
                disabled
                className={styles.disable}
                rules={[
                  {
                    required: true,
                    message: useintl.formatMessage({ id: 'recoverStepForm.step1.input.empty' }),
                  },
                  {
                    min: 3,
                    message: useintl.formatMessage({ id: 'recoverStepForm.step1.input.check' }),
                  },
                ]}
              />
              <FormItem
                prefix={<UserOutlined />}
                name="maskedUserName"
                placeholder={useintl.formatMessage({
                  id: 'recoverStepForm.step1.user.name',
                })}
                maxLength={21}
                onPasteDisabled
                disabled
                className={styles.disable}
                rules={[
                  {
                    required: true,
                    message: useintl.formatMessage({ id: 'recoverStepForm.step1.input.empty' }),
                  },
                  {
                    min: 3,
                    message: useintl.formatMessage({ id: 'recoverStepForm.step1.input.check' }),
                  },
                ]}
              />
            </>
          )}

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
                {useintl.formatMessage({ id: 'recoverStepForm.validate.button' })}
              </Button>
            )}
          </Form.Item>
          <div className={styles.operations}>
            {stateCurrent && (
              <Link to="/user/recover" style={{ float: 'left' }} onClick={returnOperation}>
                {useintl.formatMessage({ id: 'recoverStepForm.label.itsnome' })}
              </Link>
            )}

            <Link to="/user/login" style={{ float: 'right' }} onClick={returnOperation}>
              {useintl.formatMessage({ id: 'recoverStepForm.label.cancel' })}
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default connect(({ recoverStepForm }: { recoverStepForm: StateType }) => ({
  data: recoverStepForm.step,
  stateCurrent: recoverStepForm.stateCurrent,
}))(Step1);
