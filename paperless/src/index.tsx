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

  const submit = (val: any) => {
    console.log(val);
  }
  dispatch({ type: 'nbeWidgetCash/saveCardNumber', payload: card });

  const propsButton: ButtonProps = {
    but_option1: `${intl.formatMessage({ id: 'paperless_submit_Op1' })}`,
    colorOp1: colorBtn1,
    but_option2: `${intl.formatMessage({ id: 'paperless.button_submit_Op2' })}`,
    colorOp2: colorBtn2,
    actionOp2: () => { submit('cancel') }
  }
  const history = useHistory();

  const onFinish = ({ user: { email } }: any) => {
    console.log(email);
    dispatch({
      type: "paperless/saveCardNumber",
      payload: cardNumber,
    });
    dispatch({
      type: "paperless/setFlowStatus",
      payload: true
    });
    dispatch({
      type: "paperless/setEmail",
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
        type: "paperless/setFlowStatus",
        payload: false
      })

    }
  }, [flowComplete]);

  const PropsForm: FormProps = {
    options: [
      {
        inputName: 'email',
        label: `${intl.formatMessage({ id: 'paperless.placeholderEmail' })}`,
        valPlaceholder: `${intl.formatMessage({ id: 'paperless.placeholderEmail' })}`,
        ruleValidate: [{ type: 'email' }]
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
        <h1 style={{ fontFamily: font?.fontTitle }}>{intl.formatMessage({ id: 'paperless_title' })}</h1>
        <p style={{ fontFamily: font?.fontSubtitle }}>{intl.formatMessage({ id: 'paperless_subtitle' })}</p>
        <div className={styles.btnWrapper}>
          <FormBlock {...PropsForm} />
        </div>
      </div>
    </>
  );
};

export default connect(({ paperless }: { paperless: StateModel }) => ({
  cardNumber: paperless.cardNumber,
  emailVal: paperless.emailVal,
  flowComplete: paperless.flowComplete,
}))(Paperless);