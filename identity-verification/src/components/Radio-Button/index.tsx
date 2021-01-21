import React, { useState } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import styles from './index.less';

/**
 * Component radio button;
 *
 * @param {*} props
 * @return {*} 
 */
const RadioButton = (props: any) => {
  const { radio } = props;
  const [show, setShow] = useState(false);

  const radioButton = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  radio(show);

  return (
    <div className={styles.container} onClick={radioButton}>
      {show ? <CheckCircleFilled className={styles.icon} /> : null}
      {show}
    </div>
  );
};

export default RadioButton;
