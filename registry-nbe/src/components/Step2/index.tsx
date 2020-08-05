import React, { useEffect, useState } from 'react';
import { Form, Button } from 'antd';
import { connect, Dispatch, useIntl, Link } from 'umi';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import FormItem from '../FormItem';
import { StateType } from '../../model';
import styles from './index.less';
import getGeoInfo from '../../helpers/GeoInfo/getGeoInfo';

/**
 * Interface for Step 2 and dispatch
 */
interface Step2Props {
  data?: StateType['step'];
  dispatch?: Dispatch;
  submitting?: boolean;
}

/**
 * Functional Component
 * @param props Component properties
 */
const Step2: React.FC<Step2Props> = (props) => {
  const [form] = Form.useForm();
  const { data, dispatch } = props;
  const [, setIsDisabled] = useState();

  /**
   * Variable for useIntl
   */
  const intl = useIntl();

  useEffect(() => {
    const { name, fatherLastName, motherLastName, companyMail, number } = data;
    form.setFieldsValue({
      name,
      fatherLastName,
      motherLastName,
      companyMail,
      number,
    });
    setIsDisabled({});
  }, [data]);

  /**
   * Function that validate the form
   */
  const validateForm = () => {
    form.resetFields();
  };
  if (!data) {
    return null;
  }

  /**
   * Form destructuring
   */
  const { getFieldsValue } = form;
  /**
   * Function dispatch cancel operation
   */
  const cancelOperation = () => {
    if (dispatch) {
      dispatch({
        type: 'bneStepForm/finalizeForm',
      });
    }
  };
  /**
   * Function onPrev
   */
  const onPrev = () => {
    if (dispatch) {
      const values = getFieldsValue();
      dispatch({
        type: 'bneStepForm/saveStepFormData',
        payload: {
          ...data,
          ...values,
        },
      });
      dispatch({
        type: 'bneStepForm/saveCurrentStep',
        payload: 'info',
      });
    }
  };

  /**
   * Function that validate form on continue button
   */
  const onValidateForm = async () => {
    const values = getFieldsValue();
    const { countryName, countryCode } = getGeoInfo();
    const { legalBusinessName, legalBusinessID } = data;
    const { name, paternalSurname, maternalSurname, email, phoneNumber } = values;
    const formAnswer = {
      country: {
        countryName,
        countryCode,
      },
      company: {
        legalBusinessName,
        legalBusinessID,
      },
      representative: {
        name,
        paternalSurname,
        maternalSurname,
      },
      contact: {
        callingCode: '+52',
        phoneNumber,
        email,
      },
    };

    if (dispatch) {
      dispatch({
        type: 'bneStepForm/registerClient',
        payload: formAnswer,
      });
      dispatch({
        type: 'bneStepForm/saveCurrentStep',
        payload: 'result',
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
          prefix={<UserOutlined />}
          placeholder={intl.formatMessage({ id: 'bneStepForm.personal.information.name' })}
          name="name"
          className={styles.formItem}
          rules={[
            {
              pattern: /^[A-Za-z]+\D(\s[A-Za-z]+\D)?$/g,
              message: intl.formatMessage({ id: 'bneStepForm.verification.information' }),
            },
            {
              required: true,
              message: intl.formatMessage({ id: 'bneStepForm.verification.empty' }),
            },
          ]}
        />
        <div className={styles.lastnames}>
          <FormItem
            prefix={<UserOutlined />}
            placeholder={intl.formatMessage({ id: 'bneStepForm.personal.information.surname' })}
            name="paternalSurname"
            className={styles.inputLastnames}
            rules={[
              {
                pattern: /^[A-Za-z]+\D(\s)?/gim,
                message: intl.formatMessage({ id: 'bneStepForm.verification.information' }),
              },
              {
                required: true,
                message: intl.formatMessage({ id: 'bneStepForm.verification.empty' }),
              },
            ]}
          />
          <FormItem
            prefix={<UserOutlined />}
            placeholder={intl.formatMessage({ id: 'bneStepForm.personal.information.surname-m' })}
            name="maternalSurname"
            className={styles.inputLastnames}
            rules={[
              {
                pattern: /^[A-Za-z]+\D(\s)?/gim,
                message: intl.formatMessage({ id: 'bneStepForm.verification.information' }),
              },
              {
                required: true,
                message: intl.formatMessage({ id: 'bneStepForm.verification.empty' }),
              },
            ]}
          />
        </div>
        <FormItem
          prefix={<MailOutlined />}
          placeholder={intl.formatMessage({ id: 'bneStepForm.personal.information.mail' })}
          name="email"
          rules={[
            {
              pattern: /^[a-zA-Z0-9-]{1,}@[a-zA-Z0-9-]{1,}\.[a-z]{2,3}(\.[a-z]{2})?$/g,
              message: intl.formatMessage({ id: 'bneStepForm.verification.information' }),
            },
            {
              required: true,
              message: intl.formatMessage({ id: 'bneStepForm.verification.empty' }),
            },
          ]}
        />
        <FormItem
          prefix={<PhoneOutlined />}
          placeholder={intl.formatMessage({ id: 'bneStepForm.personal.information.phone' })}
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: intl.formatMessage({ id: 'bneStepForm.verification.empty' }),
            },
            {
              pattern: /[0-9]{9}\w/g,
              message: intl.formatMessage({
                id: 'bneStepForm.personal.information.incorrect-number',
              }),
            },
          ]}
          maxLength={10}
        />
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
              {intl.formatMessage({ id: 'bneStepForm.button.continue' })}
            </Button>
          )}
        </Form.Item>
        <div className={styles.operations}>
          <a type="primary" onClick={onPrev}>
            {intl.formatMessage({ id: 'bneStepForm.button.back' })}
          </a>
          <Link to="/user/login" onClick={cancelOperation}>
            {intl.formatMessage({ id: 'bneStepForm.label.cancel' })}
          </Link>
        </div>
      </div>
    </Form>
  );
};
export default connect(
  ({
    bneStepForm,
    loading,
  }: {
    bneStepForm: StateType;
    loading: {
      effects: { [key: string]: boolean };
    };
  }) => ({
    submitting: loading.effects['bneStepForm/submitStepForm'],
    data: bneStepForm.step,
  }),
)(Step2);
