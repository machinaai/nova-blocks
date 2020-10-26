import React from 'react';
import { FirstViewInterface, SecondViewInterface  } from '../../interfaces/interface';
import styles from './index.less';

export interface UploadTitlesProps {
    firstView? : FirstViewInterface;
    secondView ? : SecondViewInterface;
}
 
const UploadTitles: React.SFC<UploadTitlesProps> = ({firstView}) => {

    return ( 
        <div className={styles.firtsView}>
            <div className={styles.header}>
              <div className={styles.optional}>{firstView?.firstHeaderTitle}</div>
              <div className={styles.title}>{firstView?.firstTitle}</div>
              <div className={styles.subtitle}>
                {firstView?.firstSubtitle}
              </div>
            </div>
            <div className={styles.details}>
              <div className={styles.secondHeader}>{firstView?.detailsTitle}</div>
              <div className={styles.list}>
                <ul>
                  <li>{firstView?.detailsElement1}</li>
                  <li>{firstView?.detailsElement2}</li>
                </ul>
              </div>
            </div>
          </div>
     );
}
 
export default UploadTitles;