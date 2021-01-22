import React, { useEffect } from "react";
import { useDispatch, connect, useIntl } from 'umi';
import { ButtonsSubmit } from './components/buttons-submit';
import styles from './index.less';
import { ButtonProps } from './interfaces/ButtonProps.interface';
import { Fonts } from './interfaces/ProblockProps.interface';
import { fontFixture, dataPaperless } from "./fixture/data.fixture";
import FormBlock from "./components/form-block";
import { FormProps } from "./interfaces/FormProps.interface";
import { StateModel } from './models/model';
import { useHistory } from "react-router-dom";
import { card } from "./fixture/cardDetail.fixture";
import { Form } from "antd";

interface PaperlessProps {
  image?: string,
  colorBtn1?: string,
  colorBtn2?: string,
  font?: Fonts
  redirect?:string

  cardNumber?: StateModel['cardNumber'];
  error: StateModel['error'];
  emailVal?: StateModel['emailVal'];
  flowComplete?: StateModel['flowComplete'];
  onComplete?: Function;
  onReturn?: Function;
}
const Paperless: React.FC<PaperlessProps> = (props) => {
  const {
    image = dataPaperless.iconPaperless,
    colorBtn1,
    colorBtn2,
    font = fontFixture,
    redirect,
    cardNumber,
    error,
    emailVal,
    flowComplete,
    onComplete,
    onReturn } = props;
  const intl = useIntl();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const submit = (val: any) => {
    console.log(val);
  }
  dispatch({ type: 'nbeWidgetCash/saveCardNumber', payload: card });

  const propsButton: ButtonProps = {
    but_option1: `${intl.formatMessage({ id: 'Registry_Paperless.button_submit_Op1' })}`,
    colorOp1: colorBtn1,
    but_option2: `${intl.formatMessage({ id: 'Registry_Paperless.button_submit_Op2' })}`,
    colorOp2: colorBtn2,
    actionOp2: () => { submit('cancel') }
  }
  const history = useHistory();

  const onFinish = ({ user: { email } }: any) => {
    console.log(email);
    dispatch({
      type: "Registry_Paperless/saveCardNumber",
      payload: cardNumber,
    });
    dispatch({
      type: "Registry_Paperless/setFlowStatus",
      payload: true
    });
    dispatch({
      type: "Registry_Paperless/setEmail",
      payload: email
    })

    setTimeout(() => {
      history.push(`${redirect}`);
    }, 1000);
  };

  useEffect(() => {
    if (flowComplete && onComplete) {
      onComplete(true)
    }
    if (!flowComplete && onReturn) {
      onReturn(true)
    }
    return () => {
      dispatch({
        type: "Registry_Paperless/setFlowStatus",
        payload: false
      })

    }
  }, [flowComplete]);

  const PropsForm: FormProps = {
    options: [
      {
        inputName: 'email',
        label: `${intl.formatMessage({ id: 'Registry_Paperless.placeholderEmail' })}`,
        valPlaceholder: `${intl.formatMessage({ id: 'Registry_Paperless.placeholderEmail' })}`,
        ruleValidate: [{ required: true, type: 'email', message: `${intl.formatMessage({ id: 'Registry_Paperless.errorEmail' })}` }]
      }
    ],
    actionForm: onFinish,
    BtnOptions: <ButtonsSubmit {...propsButton} />
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img className={styles.img} src={image} alt="notification" />
        </div>
        <h1 className={styles.title} style={{ fontFamily: font?.fontTitle }}>{intl.formatMessage({ id: 'Registry_Paperless.paperless_title' })}</h1>
        <p className={styles.paragraph} style={{ fontFamily: font?.fontSubtitle }}>{intl.formatMessage({ id: 'Registry_Paperless.paperless_subtitle' })}</p>
        <div className={styles.btnWrapper}>
          <FormBlock {...PropsForm} />
        </div>
      </div>
    </>
  );
};

export default connect(({ Registry_Paperless }: { Registry_Paperless: StateModel }) => ({
  cardNumber: Registry_Paperless.cardNumber,
  emailVal: Registry_Paperless.emailVal,
  flowComplete: Registry_Paperless.flowComplete,
}))(Paperless);