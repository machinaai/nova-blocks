import React from 'react';
import styles from './index.less';
import { TooltipHelpProps } from './interfaces/tooltip-help.interface';

const Pop: React.FC<TooltipHelpProps> = ({ title, subtitle, firstContent, secondContent }) => {

  return (
    <div className={styles.cont}>
      <p className={styles.title}>
        {title}
      </p>
      <p className={styles.subtitle}>
        {subtitle}
      </p>
      <div className={styles.imgIne}>
        <p className={styles.space}>
          <img src={firstContent} alt="img INE" width="65px" height="45px" />
          <p className={styles.description}>INE</p>
        </p>
        <p className={styles.space}>
          <img src={secondContent} alt="img IFE" width="65px" height="45px" />
          <p className={styles.description}>IFE</p>
        </p>
      </div>
    </div>
  );
};

export default Pop;
