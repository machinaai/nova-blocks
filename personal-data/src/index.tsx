import React, { useEffect, useState } from 'react';
import { Form, DatePicker, Radio, Button, ConfigProvider } from 'antd';
import moment from 'moment';
import { connect, useIntl, useDispatch } from 'umi';
import 'moment/locale/es';
import locale from 'antd/lib/locale/es_ES';

import styles from './index.less';
import InputAuto from './blocks/input-label-up';
import { StateModel } from './models/model';
import TooltipHelp from './blocks/tooltipHelp';
import ineBack from './blocks/tooltipHelp/assets/ine-back.png';
import ifeBack from './blocks/tooltipHelp/assets/ife-back.png';
// import { phoneTest } from '../../Account-Opening/components/Step1/index';

interface PersonalDataProps {
  flagFlowComplete?: StateModel['flowComplete'];
  onComplete?: Function;
  onReturn?: Function;
  dataSave?: StateModel['data'];
  onSetUserData: Function;
  phoneUser?: string | number;
}

const PersonalData: React.FC<PersonalDataProps> = ({
  flagFlowComplete,
  onComplete,
  onReturn,
  dataSave,
  onSetUserData,
  phoneUser,
}) => {
  const internationalization = useIntl();

  const dispatch = useDispatch();
  const dateFormat = 'DD/MM/YYYY';
  const [form] = Form.useForm();
  const [, setIsDisabled] = useState({});
  //state to save object API
  const [objectService, setObjectService] = useState<any>();
  //state to save date in  ther correct format from API
  const [dateService, setDateService] = useState('');

  //state to save date in  ther correct format from next view
  const [dateFormatView, setDateFormatView] = useState('');

  let informationObject;

  const dateOk = (e: any) => {
    if (e !== null) {
      const eventDate = e._d;
      setDateService(moment(eventDate).format('YYYY-MM-DD'));
      setDateFormatView(moment(eventDate).format('DD/MM/YYYY'));
    } else {
      setDateService('');
      setDateFormatView('');
    }
  };

  useEffect(() => {
    if (dataSave) {
      const {
        customerName: { name },
        customerData: { CURP, idINE, placeBirth, gender },
      } = dataSave;
      form.setFieldsValue({
        name,
        ine: idINE,
        gender,
        placeBirth,
        CURP,
      });
    }
    setIsDisabled({});
  }, [dataSave]);

  useEffect(() => {
    if (flagFlowComplete && onComplete) {
      onComplete(flagFlowComplete);
    }
    if (!flagFlowComplete && onReturn) {
      onReturn(flagFlowComplete);
    }
  }, [flagFlowComplete]);

  const submitInfo = (values: any) => {
    informationObject = {
      // phone ??
      // flow id
      customerName: {
        name: values.name,
        lastName: 'name',
        motherLastName: 'name',
      },
      customerData: {
        CURP: values.curp,
        idIne: values.ine,
        datebirth: dateFormatView,
        birthplace: values.birthplace,
        gender: values.gender,
      },
    };

    setObjectService({
      phone: phoneUser,
      flowId: "1234",
      name: values.name,
      secondName: "name",
      lastName: "name",
      mlastName: "name",
      ineNumber: values.ine,
      gender: values.gender,
      birthDate: dateService,
      birthPlace: values.birthplace,
      curp: values.curp,
    });

    dispatch({
      type: 'personalData/submitCustomerData',
      payload: objectService,
    });

    if (informationObject && onSetUserData) {
      onSetUserData(informationObject);
    }
  };

  /**
   * Function that only enables dates for people over 18 years old
   *
   */
  const disabledDate = (current: any) => {
    return current && current > moment().subtract(6570, 'days');
  };
  
  
  

  return (
    <div className={styles.form_data}>
      <div className={styles.container}>
        <p className={styles.title}>
          {internationalization.formatMessage({
            id: 'personaldata.formManually.title',
          })}
        </p>
        <p className={styles.subtitle}>
          {internationalization.formatMessage({
            id: 'personaldata.formManually.subtitle',
          })}
        </p>
      </div>
      <div className={styles.form}>
        <Form form={form} name="control-hooks" onFinish={submitInfo}>
          <div className={styles.fullgroup}>
            <div className={styles.group}>
              <div className={styles.colum}>
                <Form.Item name="ine" rules={[{ required: true }]}>
                  <InputAuto
                    placeholder={internationalization.formatMessage({
                      id: 'personaldata.formManually.id',
                    })}
                    className={styles.input}
                    maxLength={18}
                    toolTip={
                      <TooltipHelp
                        title={internationalization.formatMessage({
                          id: 'tooltipHelp.title',
                        })}
                        subtitle={internationalization.formatMessage({
                          id: 'tooltipHelp.subtitle',
                        })}
                        firstContent={ineBack}
                        secondContent={ifeBack}
                      />
                    }
                    upperCase
                    onPasteDisabled
                    onCopyDisabled
                    onPattern="[A-Z0-9]*"
                    onlyNumbersAndLetters
                  />
                </Form.Item>
              </div>
            
              <div className={styles.colum}>
                <Form.Item name="name" rules={[{ required: true }]}>
                  <InputAuto
                    placeholder={internationalization.formatMessage({
                      id: 'personaldata.formManually.name',
                    })}
                    className={styles.input}
                    upperCase
                    maxLength={60}
                    onPasteDisabled
                    onCopyDisabled
                    onPattern="[A-Z0-9]*"
                    onlyLetters
                  />
                </Form.Item>
              </div>

              <div className={styles.colum}>
                <p className={styles.radio}>
                  {internationalization.formatMessage({
                    id: 'personaldata.formManually.gender',
                  })}
                </p>
                <Form.Item name="gender" rules={[{ required: true }]}>
                  <Radio.Group size="large" buttonStyle="solid">
                    <Radio value="H">
                      {internationalization.formatMessage({
                        id: 'personaldata.formManually.gender.1',
                      })}
                    </Radio>
                    <Radio value="M">
                      {internationalization.formatMessage({
                        id: 'personaldata.formManually.gender.2',
                      })}
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.colum}>
                <ConfigProvider locale={locale}>
                  <Form.Item name="date" rules={[{ required: true }]}>
                    <DatePicker
                      format={dateFormat}
                      picker="date"
                      placeholder={internationalization.formatMessage({
                        id: 'personaldata.formManually.date',
                      })}
                      defaultPickerValue={
                        dataSave?.customerData.datebirth || moment('01/01/1990', dateFormat)
                      }
                      onChange={dateOk}
                      inputReadOnly
                      className={styles.date}
                      disabledDate={disabledDate}
                    />
                  </Form.Item>
                </ConfigProvider>
              </div>
              <div className={styles.colum}>
                <Form.Item name="address" rules={[{ required: true }]}>
                  <InputAuto
                    placeholder={internationalization.formatMessage({
                      id: 'personaldata.formManually.address',
                    })}
                    className={styles.input}
                    maxLength={100}
                    onPasteDisabled
                    onCopyDisabled
                    onPattern="[\sA-Za-zäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ.,#0-9]*"
                  />
                </Form.Item>
              </div>
              <div className={styles.colum}>
                <Form.Item name="curp" rules={[{ required: true }]}>
                  <InputAuto
                    placeholder={internationalization.formatMessage({
                      id: 'personaldata.formManually.curp',
                    })}
                    className={styles.input}
                    upperCase
                    maxLength={18}
                    onPasteDisabled
                    onCopyDisabled
                    onPattern="[A-Z0-9]*"
                    onlyNumbersAndLetters
                  />
                </Form.Item>
              </div>

            </div>
          </div>
          <div className={styles.btnContainer}>
            <div>
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    className={styles.btn}
                    type="primary"
                    shape="round"
                    htmlType="submit"
                    disabled={
                      !form.isFieldsTouched(true) || form.getFieldValue(['curp'])?.length < 18 || form.getFieldValue(['ine'])?.length <18 ||
                      form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                  >
                    {internationalization.formatMessage({
                      id: 'personaldata.formManually.save',
                    })}
                  </Button>
                )}
              </Form.Item>
            </div>
            <div className={styles.link}>
              <Button type="link">
                {internationalization.formatMessage({
                  id: 'personaldata.verifyIdentify.action.continue.other',
                })}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default connect(({ personalData }: { personalData: StateModel }) => ({
  dataSave: personalData.data,
  status: personalData.status,
  flagFlowComplete: personalData.flowComplete,
}))(PersonalData);
