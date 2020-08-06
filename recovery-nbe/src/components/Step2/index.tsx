import React, { useEffect, useState } from 'react';
import { Form, Button } from 'antd';
import { connect, Dispatch, useIntl, Link } from 'umi';
import { PhoneOutlined, LockOutlined, ClockCircleOutlined } from '@ant-design/icons';
import FormItem from '../FormItem';
import { StateType } from '../../model';
import styles from './index.less';

interface Step2Props {
  data?: StateType['step'];
  dispatch?: Dispatch;
  stateCurrent?: StateType['stateCurrent'];
  submitting?: boolean;
  status?: StateType['statusCode'];
}

const Step2: React.FC<Step2Props> = (props) => {
  const useintl = useIntl();
  const [form] = Form.useForm();
  const { data, dispatch, stateCurrent, status } = props;
  const [count, setCount] = useState(120 || 0);
  const [, setIsDisabled] = useState();

  const [timing, setTiming] = useState<boolean>(false);
  const [request, setRequest] = useState(false);
  const [validatePhone, setValidatePhone] = useState(true);
  /**
   *
   */
  useEffect(() => {
    setIsDisabled({});
    const { phoneNumber } = data;
    if (stateCurrent) {
      setTiming(true);
      setRequest(false);
      setValidatePhone(false);
      form.setFieldsValue({
        phoneNumber,
      });
    } else {
      setValidatePhone(true);
    }
  }, [data, status, stateCurrent]);

  /**
   * Initialize timing for code request
   */
  useEffect(() => {
    let interval: number = 0;
    if (timing) {
      interval = window.setInterval(() => {
        setCount((preSecond) => {
          if (preSecond === 0) {
            setTiming(false);
            setRequest(true);
            clearInterval(interval);
            return 120;
          }
          return preSecond - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timing]);

  /**
   * Transform the seconds to show it as minutes
   * @param time seconds that receive
   */
  const countDown = (time: number) => {
    const toMinutes = Math.floor(time / 60);
    const toSeconds = time % 60;
    if (toMinutes === 0) {
      if (toSeconds < 10) {
        return `${toMinutes}0:0${toSeconds}`;
      }
      return `${toMinutes}0:${toSeconds}`;
    }
    if (toSeconds < 10) {
      return `0${toMinutes}:0${toSeconds}`;
    }
    return `0${toMinutes}:${toSeconds}`;
  };
  /**
   * Reset values from Form
   */
  const validateForm = () => {
    form.resetFields();
  };

  /**
   * Verify if data exists
   */
  if (!data) {
    return null;
  }

  /**
   * Return to the previous step
   */
  const onPrev = () => {
    if (dispatch) {
      if (stateCurrent) {
        setTiming(false);
        setRequest(false);
        dispatch({
          type: 'recoverStepForm/returnStep',
          payload: {
            current: 'number',
            stateCurrent: false,
          },
        });
      } else {
        dispatch({
          type: 'recoverStepForm/returnStep',
          payload: {
            current: 'user',
            stateCurrent: true,
          },
        });
      }
    }
  };

  /**
   * Return to the Main Page erase all data from Form
   */
  const onCancelForm = () => {
    if (dispatch) {
      dispatch({
        type: 'recoverStepForm/finalizeOperation',
      });
    }
  };

  /**
   * Go forward in the steps of the Form
   */
  const onValidateForm = async () => {
    const value = await form.getFieldValue('phoneNumber');
    if (dispatch) {
      dispatch({
        type: 'recoverStepForm/validationPhone',
        payload: { phoneNumber: value },
      });
    }
    form.resetFields();
    setValidatePhone(true);
  };

  /**
   * Function validate phone number with maskedPhoneNumber
   */
  const validatePhoneBlur = async () => {
    const validate = await form.getFieldValue('phoneNumber');

    if (validate) {
      const { maskedPhoneNumber } = data;
      const lengthValidate = validate.substring(validate.length - 4);
      const lengtMaskedPhone = maskedPhoneNumber?.substring(maskedPhoneNumber.length - 4);
      if (lengthValidate === lengtMaskedPhone) {
        setValidatePhone(false);
      }
    }
  };

  /**
   * Go forward in the Form validating OTP
   */
  const onValidateOTP = async () => {
    const values = await form.getFieldValue('OTP');
    if (dispatch) {
      dispatch({
        type: 'recoverStepForm/validationOTP',
        payload: { OTP: values },
      });
    }
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      className={styles.stepForm}
      hideRequiredMark
      onFinish={validateForm}
    >
      <div className={styles.dataContainer}>
        <FormItem
          className={`${styles.formItem} ${stateCurrent ? styles.disable : ''}`}
          prefix={<PhoneOutlined className={styles.prefixIcon} />}
          placeholder={`${useintl.formatMessage({
            id: 'recoverStepForm.step2.input.placeholder',
          })} ${data.maskedPhoneNumber}`}
          name="phoneNumber"
          disabled={stateCurrent}
          onBlur={validatePhoneBlur}
          rules={[
            {
              pattern: /^[0-9]+\w$/g,
              message: useintl.formatMessage({ id: 'recoverStepForm.step1.input.check' }),
            },
            {
              required: true,
              message: useintl.formatMessage({ id: 'recoverStepForm.step1.input.empty' }),
            },
          ]}
          maxLength={10}
        />
        {stateCurrent && (
          <FormItem
            className={styles.formItem}
            prefix={<LockOutlined className={styles.prefixIcon} />}
            placeholder={useintl.formatMessage({
              id: 'recoverStepForm.step2.input.code-number.placeholder',
            })}
            name="OTP"
            rules={[
              {
                min: 3,
                message: useintl.formatMessage({ id: 'recoverStepForm.step1.input.check' }),
              },
              {
                required: true,
                message: useintl.formatMessage({ id: 'recoverStepForm.step1.input.empty' }),
              },
            ]}
            maxLength={10}
            inputPassword
          />
        )}
        {(timing || request) && (
          <div className={styles.clock}>
            <span className={styles.clockText}>
              <ClockCircleOutlined className={styles.iconClock} />
              {request ? (
                <Button className={styles.requestButton} onClick={onValidateForm}>
                  {useintl.formatMessage({ id: 'recoverStepForm.step2.label.new.code' })}
                </Button>
              ) : (
                <p className={styles.requestCode}>
                  {useintl.formatMessage({ id: 'recoverStepForm.step2.label.newCodeIn' })}{' '}
                  {countDown(count)} min.
                </p>
              )}
            </span>
          </div>
        )}
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                validatePhone ||
                !form.isFieldsTouched(true) ||
                form.getFieldsError().filter(({ errors }) => errors.length).length
              }
              className={styles.buttonContinue}
              onClick={stateCurrent ? onValidateOTP : onValidateForm}
            >
              {stateCurrent
                ? useintl.formatMessage({ id: 'recoverStepForm.continue.button' })
                : useintl.formatMessage({ id: 'recoverStepForm.validate.button' })}
            </Button>
          )}
        </Form.Item>
        <div className={styles.operations}>
          <a type="primary" onClick={onPrev}>
            {useintl.formatMessage({ id: 'recoverStepForm.button.back' })}
          </a>
          <Link to="/user/login" onClick={onCancelForm}>
            {useintl.formatMessage({ id: 'recoverStepForm.label.cancel' })}
          </Link>
        </div>
      </div>
    </Form>
  );
};
export default connect(
  ({
    recoverStepForm,
    loading,
  }: {
    recoverStepForm: StateType;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    submitting: loading.effects['recoverStepForm/submitStepForm'],
    data: recoverStepForm.step,
    stateCurrent: recoverStepForm.stateCurrent,
    status: recoverStepForm.statusCode,
  }),
)(Step2);
