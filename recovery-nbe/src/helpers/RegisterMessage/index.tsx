import React from 'react';
import { Alert } from 'antd';
import styles from './index.less';

interface RegisterMessageInterface {
  content: string;
  closeForm: any;
  setIsError?: React.Dispatch<React.SetStateAction<boolean>>;
}
/**
 * Const that shows message error
 * @param content message that shows inside input
 */
const RegisterMessage: React.FC<RegisterMessageInterface> = ({ content, closeForm }) => {
  return (
    <Alert
      className={styles.error}
      message={content}
      type="error"
      showIcon
      closable
      onClose={closeForm}
    />
  );
};

export default RegisterMessage;
