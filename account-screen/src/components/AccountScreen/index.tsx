import { WalletOutlined } from '@ant-design/icons';
import { Button, Skeleton } from 'antd';
import user from 'mock/user';
import React from 'react';
import { useIntl } from 'umi';
import { useWindowSize } from '../../hooks/useWindowSize';
import { PropsAccount } from '../../interfaces/account-screen';
import styles from './index.less';

export const AccountScreen: React.FC<PropsAccount> = ({
  nameUser,
  numberCard,
  actionBtn,
  actionPlayStore,
  actionAppStore,
  actionWallet,
  font,
  logoDesk,
  logoMob,
  imageRobot,
  imgAppStore,
  imgPlayStore,
  iconCircle,
}) => {
  const intl = useIntl();
  const size = useWindowSize();
  let circuleBackground;

  const userAgent = navigator.userAgent || navigator.vendor;
  let downStore;
  if (/android/i.test(userAgent)) {
    downStore = <img src={imgAppStore} alt="PlayStore" className={styles.imgWrapper} onClick={actionAppStore} width="120px" height="37px" />;
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    downStore = <img src={imgPlayStore} alt="AppStore" className={styles.imgWrapper} onClick={actionPlayStore} width="120px" height="37px" />;
  }

  if (size.width < 768) {
    circuleBackground = iconCircle;
  } else {
    circuleBackground = ''
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerDescription} >
        <div style={{
          backgroundImage: `url(${circuleBackground})`

        }}
          className={styles.containerMobile}>
          <div className={styles.mainLogo}>
            <img src={logoDesk} className={styles.logoDesk} />
            <img src={logoMob} className={styles.logoMobile} />
          </div>
          {nameUser ? (
            <div className={styles.heading} style={{ fontFamily: font?.fontTitle }}>
              <p>
                {`¡${intl.formatMessage({ id: 'accountScreen.H_title' })}`}
              </p>
              <p>
                {nameUser}!
            </p>
            </div>
          ) : (
              <Skeleton loading active />
            )}
          <div className={styles.messageVirtual}>
            <p className={styles.txt} style={{ fontFamily: font?.fontSubtitle }}>
              {intl.formatMessage({ id: 'accountScreen.H_subtitle' })}
            </p>
          </div>
          <div className={styles.robotMobile}>
            <img src={imageRobot} alt="robot" width="169px" height="152px" className={styles.imageRobot} />
          </div>
          <div className={styles.wallet}>
            <p className={styles.cardLabel}>
              {intl.formatMessage({ id: 'accountScreen.B_desc1' })}
            </p>
            {numberCard ? (
              <p className={styles.cardNumber}>{numberCard}</p>
            ) : (
                <Skeleton loading active />
              )}
            <Button
              icon={<WalletOutlined />}
              className={styles.btnWallet}
              type="primary"
              shape="round"
              size="large"
              block
              onClick={actionWallet}
            >
              {intl.formatMessage({ id: 'accountScreen.wallet_btn' })}
            </Button>
          </div>

          <div className={styles.sendMessage}>
            <p>{intl.formatMessage({ id: 'accountScreen.B_desc2' })}</p>
          </div>
          <div className={styles.sendBtn}>
            <Button
              className={styles.btn}
              type="primary"
              shape="round"
              size="large"
              onClick={actionBtn}
            >
              {intl.formatMessage({ id: 'accountScreen.text_btn' })}
            </Button>
          </div>
          <div className={styles.downloadContainer}>
            <p>
              Descarga nuestra aplicación en:
            </p>
            <div className={styles.imageContainer}>
              <div className={styles.imageContainerApp}>
                <img src={imgAppStore} alt="AppStore" width="120px" height="37px" onClick={actionAppStore} className={styles.imgSpace} />
              </div>
              <div>
                <img src={imgPlayStore} alt="PlayStore" width="120px" height="38px" onClick={actionPlayStore} />
              </div>
            </div>
          </div>
          <div className={styles.bottomWrapper2}>
            <p>
              Descarga nuestra app en la tienda
            </p>
            {downStore}
          </div>
        </div>
        <div className={styles.sendBtnMobile}>
          <Button
            className={styles.btn}
            type="primary"
            shape="round"
            size="large"
            onClick={actionBtn}
          >
            {intl.formatMessage({ id: 'accountScreen.text_btn' })}
          </Button>
        </div>
      </div>
      <div className={styles.containerImages} style={{ backgroundImage: `url(${iconCircle})` }}>
        <div className={styles.robot}>
          <img src={imageRobot} alt="robot" className={styles.robotImage} />
        </div>
      </div>
    </div>
  );
};
