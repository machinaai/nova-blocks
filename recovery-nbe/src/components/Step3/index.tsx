import { Button, Form } from 'antd';
import React, { useState, useEffect } from 'react';
import { connect, Dispatch, Link, useIntl } from 'umi';
import { UserOutlined } from '@ant-design/icons';
import FormItem from '../FormItem';
import { StateType } from '../../model';
import styles from './index.less';
import check from './assets/img/check.svg';

/**
 * Step 3 Interface
 */
interface Step3Props {
  data?: StateType['step'];
  dispatch?: Dispatch;
}

/**
 * Step 3 function component
 * @param props Step 3 props
 */
const Step3: React.FC<Step3Props> = (props) => {
  const useintl = useIntl();
  const { data, dispatch } = props;
  const [form] = Form.useForm();

  /**
   * Validate all the checks
   */
  const [validateChecks, setValidateChecks] = useState(true);

  /**
   * Conditions for check list
   */
  const conditions = {
    condition1: false,
    condition2: false,
    condition3: false,
    condition4: false,
    condition5: false,
  };

  /**
   * Password received
   */
  const [password, setPassword] = useState(conditions);

  /**
   * Executes when password changes
   */
  useEffect(() => {
    let variable = false;
    Object.keys(password).forEach((condition: any) => {
      if (password[condition] === false) {
        variable = true;
      }
    });
    setValidateChecks(variable);
  }, [password]);

  /**
   * Validate the passwords
   */
  const [equalPasswords, setEqualPasswords] = useState(false);

  if (!data) {
    return null;
  }
  const onFinish = () => {
    if (dispatch) {
      dispatch({
        type: 'recoverStepForm/finalizeOperation',
      });
    }
  };

  /**
   * Function that will display the rules list onFocus
   */
  const showRules = () => {
    document.getElementById('rules').style.display = 'block';
  };

  /**
   * Function that will hide the rules list onFocus
   */
  const hideRules = () => {
    document.getElementById('rules').style.display = 'none';
  };

  /**
   * Constant to save values from the Form
   */
  const { validateFields } = form;

  /**
   * Function that receive data and send it to Step 2
   */
  const onValidateForm = async () => {
    const values = await validateFields();
    if (dispatch) {
      dispatch({
        type: 'recoverStepForm/validationSetPassword',
        payload: values,
      });
    }
  };

  /**
   * Funtion that executes on input event
   */
  const handleValue = (e: any) => {
    const { user } = data;
    const { value } = e.target;
    const regExLetters = /^(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})/;
    const regEx2equals = /([0-9]|[aA-zZ])\1\1/;
    const regEx2secuentials = /abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|ABC|BCD|CDE|DEF|EFG|FGH|GHI|HIJ|IJK|JKL|KLM|LMN|MNO|NOP|OPQ|PQR|QRS|RST|STU|TUV|UVW|VWX|WXY|XYZ|123|234|345|456|567|678|789|890/;
    let greater;
    let equalName;
    let mayusMinus;
    let equalSymbs;
    let secuentialSymbs;

    if (value.length > 0) {
      greater = true;
    } else {
      greater = false;
    }
    if (value !== user) {
      equalName = true;
    } else {
      equalName = false;
    }
    if (regExLetters.test(value)) {
      mayusMinus = true;
    } else {
      mayusMinus = false;
    }
    if (!regEx2equals.test(value)) {
      equalSymbs = true;
    } else {
      equalSymbs = false;
    }
    if (!regEx2secuentials.test(value)) {
      secuentialSymbs = true;
    } else {
      secuentialSymbs = false;
    }
    if (value.length === 0) {
      greater = false;
      equalName = false;
      mayusMinus = false;
      secuentialSymbs = false;
      equalSymbs = false;
    }
    setPassword({
      ...password,
      condition1: greater,
      condition2: equalName,
      condition3: mayusMinus,
      condition4: equalSymbs,
      condition5: secuentialSymbs,
    });
  };

  /**
   * Function that is listening both imput values
   */
  const handleCompare = () => {
    const confirm = form.getFieldValue('confirmPassword');
    const newPassword = form.getFieldValue('newPassword');

    if (confirm === newPassword) {
      setEqualPasswords(true);
    } else {
      setEqualPasswords(false);
    }
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      className={styles.stepForm}
      hideRequiredMark
      onChange={handleCompare}
    >
      <div className={styles.userContainer}>
        <FormItem
          onChanged={handleValue}
          onFocus={showRules}
          onBlur={hideRules}
          prefix={<UserOutlined />}
          name="newPassword"
          placeholder={useintl.formatMessage({ id: 'recoverStepForm.step3.input.password' })}
          maxLength={20}
          onPasteDisabled
          inputPassword
          className={equalPasswords && styles.equalPassword}
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
          name="confirmPassword"
          placeholder={useintl.formatMessage({ id: 'recoverStepForm.step3.input.confirm' })}
          maxLength={20}
          onPasteDisabled
          inputPassword
          className={equalPasswords && styles.equalPassword}
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

        <div className={styles.rulesContainer} id="rules">
          <span className={styles.rulesTitle}>
            {useintl.formatMessage({ id: 'recoverStepForm.step3.input.rules' })}
          </span>
          <div className={styles.rule}>
            {password.condition1 ? (
              <img src={check} alt="check" className={styles.checkedIcon} />
            ) : (
              <div className={styles.unCheckIcon} />
            )}
            <p>{useintl.formatMessage({ id: 'recoverStepForm.step3.rule-A' })}</p>
          </div>
          <div className={styles.rule}>
            {password.condition2 ? (
              <img src={check} alt="check" className={styles.checkedIcon} />
            ) : (
              <div className={styles.unCheckIcon} />
            )}
            <p>{useintl.formatMessage({ id: 'recoverStepForm.step3.rule-B' })}</p>
          </div>
          <div className={styles.rule}>
            {password.condition3 ? (
              <img src={check} alt="check" className={styles.checkedIcon} />
            ) : (
              <div className={styles.unCheckIcon} />
            )}{' '}
            <p>{useintl.formatMessage({ id: 'recoverStepForm.step3.rule-C' })}</p>
          </div>
          <div className={styles.rule}>
            {password.condition4 ? (
              <img src={check} alt="check" className={styles.checkedIcon} />
            ) : (
              <div className={styles.unCheckIcon} />
            )}{' '}
            <p>{useintl.formatMessage({ id: 'recoverStepForm.step3.rule-D' })}</p>
          </div>
          <div className={styles.rule}>
            {password.condition5 ? (
              <img src={check} alt="check" className={styles.checkedIcon} />
            ) : (
              <div className={styles.unCheckIcon} />
            )}{' '}
            <p>{useintl.formatMessage({ id: 'recoverStepForm.step3.rule-E' })}</p>
          </div>
        </div>

        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={!equalPasswords || validateChecks}
              className={styles.buttonContinue}
              onClick={onValidateForm}
            >
              {useintl.formatMessage({ id: 'recoverStepForm.step3.button' })}
            </Button>
          )}
        </Form.Item>

        <Link
          style={{
            textAlign: 'center',
            fontFamily: 'PingFang SC Regular, Arial, Helvetica, sans-serif',
            fontSize: '14px',
          }}
          onClick={onFinish}
          to="/user/login"
        >
          {useintl.formatMessage({ id: 'recoverStepForm.label.cancel' })}
        </Link>
      </div>
    </Form>
  );
};

export default connect(({ recoverStepForm }: { recoverStepForm: StateType }) => ({
  data: recoverStepForm.step,
}))(Step3);
