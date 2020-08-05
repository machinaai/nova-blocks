import React from 'react';
import { Alert } from 'antd';
import styles from './index.less';

interface RegisterMessageInterface {
  content: string;
  setIsError?: React.Dispatch<React.SetStateAction<boolean>>;
}
/**
 * Const that shows message error
 * @param content message that shows inside input
 */
const RegisterMessage: React.FC<RegisterMessageInterface> = ({ content }) => {
  return <Alert className={styles.error} message={content} type="error" showIcon closable />;
};

export default RegisterMessage;
