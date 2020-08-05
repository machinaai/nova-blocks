import { Alert, Checkbox } from 'antd';
import Form from 'antd/lib/form';
import React, { useState, useEffect } from 'react';
import { connect, Dispatch, useIntl, Link } from 'umi';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { StateType } from '../model';
import LoginForm from './components/user';
import styles from './index.less';
import FormItem from './components/FormItem';
import { FormLoginType } from './interfaces/formLogin.interface';

const { Submit } = LoginForm;
interface LoginProps {
  dispatch: Dispatch;
  userLogin: StateType['data'];
  status: StateType['status'];
}

/**
 * Const that shows message error
 * @param content message that shows inside input
 */
const LoginMessage: React.FC<{
  content: string;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ content, setError }) => (
  <Alert
    style={{
      marginTop: 16,
      marginBottom: 16,
    }}
    message={content}
    type="error"
    showIcon
    closable
    afterClose={() => {
      setError(false);
    }}
  />
);

const Login: React.FC<LoginProps> = (props) => {
  const intl = useIntl();
  const [form] = Form.useForm();
  const { status } = props;
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState<string>('account');
  const [isUserName, setIsUserName] = useState<boolean>(true);
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const today = new Date();
  const currentHour = today.getHours();
  let messageGood: string;

  useEffect(() => {
    if (status !== 200 && status !== undefined) {
      setIsError(true);
    }
  }, [status]);

  const messageError: string = intl.formatMessage({
    id: 'login.messageError',
    defaultMessage: 'Introduce la información',
  });
  const messageErrorVerify: string = intl.formatMessage({
    id: 'login.messageErrorVerify',
    defaultMessage: 'Verifica la información',
  });
  const goodDay: string = intl.formatMessage({
    id: 'login.goodDay',
    defaultMessage: 'Buen día.',
  });
  const goodEvening: string = intl.formatMessage({
    id: 'login.goodEvening',
    defaultMessage: 'Buena tarde.',
  });
  const goodNight: string = intl.formatMessage({
    id: 'login.goodNight',
    defaultMessage: 'Buena noche.',
  });

  /**
   * Function that changes welcome message
   */
  if (currentHour >= 6 && currentHour < 12) {
    messageGood = goodDay;
  } else if (currentHour >= 12 && currentHour < 19) {
    messageGood = goodEvening;
  } else {
    messageGood = goodNight;
  }

  /**
   * Function that sends the request to login
   * @param values
   */
  const handleSubmit = (values: FormLoginType) => {
    const { dispatch } = props;
    dispatch({
      type: 'authentication/login',
      payload: { ...values },
    });
    setIsUserName(true);
    setIsPassword(true);
    form.resetFields();
  };

  /**
   * Function that verify if input has at least 3 characters
   * @param event input event
   */
  const onChangeHandlerUserName = (event: any) => {
    setIsUserName(event.target.value.length < 3);
  };

  /**
   * Function that verify if input has at least 3 characters
   * @param event input event
   */
  const onChangeHandlerPassword = (event: any) => {
    setIsPassword(event.target.value.length < 3);
  };

  return (
    <div className={styles.main}>
      <LoginForm activeKey={type} onTabChange={setType} onSubmit={handleSubmit} from={form}>
        {!isError ? (
          <span className={styles.message}>
            {intl.formatMessage({
              id: 'login.messageWelcome',
              defaultMessage: '¡Bienvenido!',
            })}{' '}
            {messageGood}
          </span>
        ) : (
          <span className={styles.messageError}>
            <LoginMessage
              content={intl.formatMessage({
                id: 'login.signinError',
                defaultMessage: 'Servicio no disponible.',
              })}
              setError={setIsError}
            />
          </span>
        )}
        <FormItem
          prefix={<UserOutlined />}
          className={styles.obelisco}
          name="user"
          maxLength={20}
          onPasteDisabled
          onCopyDisabled
          onChanged={(event) => onChangeHandlerUserName(event)}
          placeholder={intl.formatMessage({
            id: 'login.user',
            defaultMessage: 'Usuario',
          })}
          rules={[
            {
              required: true,
              message: messageError,
            },
            {
              min: 3,
              message: messageErrorVerify,
            },
          ]}
        />
        <FormItem
          prefix={<LockOutlined />}
          inputPassword
          className={styles.obelisco}
          name="password"
          maxLength={20}
          onPasteDisabled
          onCopyDisabled
          onChanged={(event) => onChangeHandlerPassword(event)}
          placeholder={intl.formatMessage({
            id: 'login.password',
            defaultMessage: 'Contraseña',
          })}
          rules={[
            {
              required: true,
              message: messageError,
            },
            {
              min: 3,
              message: messageErrorVerify,
            },
          ]}
        />
        <div className={styles.containerCheck}>
          <Checkbox
            checked={autoLogin}
            onChange={(e) => setAutoLogin(e.target.checked)}
            className={styles.check}
          >
            <span className={styles.checkboxText}>
              {intl.formatMessage({
                id: 'login.rememberMe',
                defaultMessage: 'Recordarme',
              })}
            </span>
          </Checkbox>
          <Link
            style={{
              float: 'right',
              fontFamily: 'Roboto-Regular, Arial, Helvetica, sans-serif',
            }}
            to="#"
          >
            {intl.formatMessage({
              id: 'login.recoveryPassword',
              defaultMessage: 'Recuperar contraseña',
            })}
          </Link>
        </div>
        <Submit disabled={isUserName || isPassword}>
          {intl.formatMessage({
            id: 'login.signin',
            defaultMessage: 'Acceder',
          })}
        </Submit>
        <Link className={styles.register} to="#">
          {intl.formatMessage({
            id: 'login.signup',
            defaultMessage: 'Registro',
          })}
        </Link>
      </LoginForm>
    </div>
  );
};

export default connect(({ authentication }: { authentication: StateType }) => ({
  userLogin: authentication.data,
  status: authentication.status,
}))(Login);
