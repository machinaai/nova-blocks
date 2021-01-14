import React, { useEffect } from "react";
import { useDispatch, connect, useIntl } from 'umi';
import { ButtonsSubmit } from './components/buttons-submit';
import imagePaper from './assets/images/ico-paperless.png';
import styles from './index.less';
import { ButtonProps } from './interfaces/ButtonProps.interface';
import { Fonts } from './interfaces/ProblockProps.interface';
import { fontFixture } from "./fixture/data.fixture";
import FormBlock from "./components/form-block";
import { FormProps } from "./interfaces/FormProps.interface";
import { StateModel } from './models/model';
import { useHistory } from "react-router-dom";
import { card } from "./fixture/cardDetail.fixture";

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
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
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = (props) => {
  const {
    image = imagePaper,
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
    but_option1: `${intl.formatMessage({ id: 'BLOCK_NAME.button_submit_Op1' })}`,
    colorOp1: colorBtn1,
    but_option2: `${intl.formatMessage({ id: 'BLOCK_NAME.button_submit_Op2' })}`,
    colorOp2: colorBtn2,
    actionOp2: () => { submit('cancel') }
  }
  const history = useHistory();

  const onFinish = ({ user: { email } }: any) => {
    console.log(email);
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/saveCardNumber",
      payload: cardNumber,
    });
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/setFlowStatus",
      payload: true
    });
    dispatch({
      type: "BLOCK_NAME_CAMEL_CASE/setEmail",
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
        type: "BLOCK_NAME_CAMEL_CASE/setFlowStatus",
        payload: false
      })

    }
  }, [flowComplete]);

  const PropsForm: FormProps = {
    options: [
      {
        inputName: 'email',
        label: `${intl.formatMessage({ id: 'BLOCK_NAME.placeholderEmail' })}`,
        valPlaceholder: `${intl.formatMessage({ id: 'BLOCK_NAME.placeholderEmail' })}`,
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
        <h1 style={{ fontFamily: font?.fontTitle }}>{intl.formatMessage({ id: 'BLOCK_NAME.paperless_title' })}</h1>
        <p style={{ fontFamily: font?.fontSubtitle }}>{intl.formatMessage({ id: 'BLOCK_NAME.paperless_subtitle' })}</p>
        <div className={styles.btnWrapper}>
          <FormBlock {...PropsForm} />
        </div>
      </div>
    </>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  cardNumber: BLOCK_NAME_CAMEL_CASE.cardNumber,
  emailVal: BLOCK_NAME_CAMEL_CASE.emailVal,
  flowComplete: BLOCK_NAME_CAMEL_CASE.flowComplete,
}))(PAGE_NAME_UPPER_CAMEL_CASE);