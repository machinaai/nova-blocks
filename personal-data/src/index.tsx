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
import {removeEmoji} from './helpers/helper';
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
        customerData: { CURP, idINE, residence, gender },
      } = dataSave;
      form.setFieldsValue({
        name,
        ine: idINE,
        gender,
        residence,
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
      customerName: {
        name: removeEmoji(values.name),
        lastName: removeEmoji(values.lastName),
        motherLastName: removeEmoji(values.secondlastName),
      },
      customerData: {
        CURP: values.curp,
        idIne: values.ine,
        datebirth: dateFormatView,
        residence: removeEmoji(values.residence),
        gender: values.gender,
      },
    };

    dispatch({
      type: 'personalData/submitCustomerData',
      payload: {
        flowId: "1234",
        customerName: {
          name: removeEmoji(values.name),
          lastName: removeEmoji(values.lastName),
          motherLastName: removeEmoji(values.secondlastName),
          },
        customerData: {
          idINE: values.ine,
          gender: values.gender,
          birthDate: dateService,
          birthPlace: removeEmoji(values.residence),
          curp: values.curp,
        },
        phone: phoneUser
      },
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
                    maxLength={60}
                    onPasteDisabled
                    onCopyDisabled
                    onlyLetters
                  />
                </Form.Item>
              </div>

              <div className={styles.colum}>
                <Form.Item name="lastName" rules={[{ required: true }]}>
                  <InputAuto
                    placeholder={internationalization.formatMessage({
                      id: 'personaldata.formManually.lastName',
                    })}
                    className={styles.input}
                    maxLength={60}
                    onPasteDisabled
                    onCopyDisabled
                    onlyLetters
                  />
                </Form.Item>
              </div>

              <div className={styles.colum}>
                <Form.Item name="secondlastName" rules={[{ required: true }]}>
                  <InputAuto
                    placeholder={internationalization.formatMessage({
                      id: 'personaldata.formManually.secondlastName',
                    })}
                    className={styles.input}
                    maxLength={60}
                    onPasteDisabled
                    onCopyDisabled
                    onlyLetters
                  />
                </Form.Item>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.colum}>
                <p className={styles.label_date}>{internationalization.formatMessage({
                  id: 'personaldata.formManually.date',
                })}</p>
                <Form.Item name="date" rules={[{ required: true }]}>
                  <DatePicker
                    format={dateFormat}
                    picker="date"
                    placeholder=''
                    defaultPickerValue={
                      dataSave?.customerData.datebirth || moment('01/01/1990', dateFormat)
                    }
                    onChange={dateOk}
                    inputReadOnly
                    className={styles.date}
                    disabledDate={disabledDate}
                  />
                </Form.Item>
              </div>
              <div className={styles.colum}>
                <Form.Item name="residence" rules={[{ required: true }]}>
                  <InputAuto
                    placeholder={internationalization.formatMessage({
                      id: 'personaldata.formManually.address',
                    })}
                    className={styles.input}
                    maxLength={100}
                    onPasteDisabled
                    onCopyDisabled
                    onlyNumbersAndLetters
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
                      !form.isFieldsTouched(true) || form.getFieldValue(['curp'])?.length < 18 || form.getFieldValue(['ine'])?.length < 18 ||
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
