import React from 'react';
import styles from './index.css';
import { RedoOutlined } from '@ant-design/icons';

interface Props {
  onClick?: Function,
  message: string,
  iconSize?: number,
  fontSize?: number
}

const RetryBlock: React.FC<Props> = ({onClick, message = 'Volver intentar', iconSize = 50, fontSize = 16}) => {

  const onRetry = () => (onClick && onClick());

  return (
    <>
      <div className={styles.error}>
        <RedoOutlined onClick={onRetry} style={{fontSize: `${iconSize}px`}}/>
        <p onClick={onRetry} className={styles.errorText} style={{fontSize: `${fontSize}px`}}> { message } </p>
      </div>
    </>
  );
}

export default RetryBlock;
