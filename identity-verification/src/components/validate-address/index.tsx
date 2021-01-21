import React from 'react';
import { Button} from 'antd';
import { useIntl } from "umi";
import styles from './index.less';

/**
 * Interface to ValidateAddres
 */
export interface ComponentProps {
  address:string,
  fonts?:Fonts,
  actionBtn: Function | any
}

/**
* Interface of definition for the component
*/
export interface Fonts{
  fontTitle:string,
  fontSubtitle:string,
  fontAddress:string
}
/**
 * Component ValidateAddres
 *
 * @param {*} { address, fonts, actionBtn }
 * @return {*} 
 */
const ValidateAddres: React.FC<ComponentProps> = ({ address, fonts, actionBtn }) => {
  const intl = useIntl();
  const userAgent = navigator.userAgent || navigator.vendor;
  const valBlock = (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) ? true : false;

  return (
    <div className={styles.container} >
      <div className={styles.heading}>
        <h2 style={{ fontFamily: fonts?.fontTitle }}>{intl.formatMessage({ id: 'identityVerification.validate-address-screen.title' })}</h2>
        <p style={{ fontFamily: fonts?.fontSubtitle }}>{intl.formatMessage({ id: 'identityVerification.validate-address-screen.subtitle' })}</p>
      </div>
      <p style={{ fontFamily: fonts?.fontAddress }}>{address}</p>
      <Button type="primary" shape="round" size='large' block={valBlock} onClick={actionBtn}>{intl.formatMessage({ id: 'identityVerification.validate-address-screen.btn' })}</Button>
    </div>
  );
}

export default ValidateAddres;
