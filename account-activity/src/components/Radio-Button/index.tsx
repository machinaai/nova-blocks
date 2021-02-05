import React, { useState, useEffect } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import styles from './index.less';
import { useIntl } from 'umi';

/**
 * Component radio button;
 *
 * @param {*} props
 * @return {*} 
 */
const RadioButton = (props: any) => {
  const { setStateCheck } = props;
  const intl = useIntl();
  const [show, setShow] = useState(false);

  const radioButton = () => {
    if (show) {
      setShow(false);
      setStateCheck({
        checked: false,
      });
    } else {
      setShow(true);
      setStateCheck({
        checked: true,
      });
    }
  };

  return (
    <div className={styles.radioContainer}>
      <div className={styles.container} onClick={radioButton}>
        {show ? <CheckCircleFilled className={styles.icon} /> : null}
      </div>
      <p className={styles.textTerms}>
      {intl.formatMessage({ id: 'AccountActivity.terms-conditions1' })} <a className={styles.termsLikn} href="#">{intl.formatMessage({ id: 'AccountActivity.terms-conditions2' })}</a>
      </p>
    </div>
    
  );
};

export default RadioButton;
