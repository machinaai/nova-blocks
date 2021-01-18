import React from 'react';
import styles from './index.less';

export interface ContentTitlePropsInterface {
  data: MessageInterface
}

interface MessageInterface {
  upTitle: string;
  title: string;
  content: string;
}

const ContentTitle: React.FC<ContentTitlePropsInterface> = ({data}) => {
  return (
    <>
      <div className={styles.validate_Container}>
        <div className={styles.info}>
          <div className={styles.message}>{data.upTitle}</div>
          <div className={styles.second_message}>{data.title}</div>
          <div className={styles.third_message}>
          {data.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentTitle;
