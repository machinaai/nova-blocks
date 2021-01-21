import React from 'react';
import { dataFixture, iconsFixture } from './fixtures/dataOption.fixture';
import { PropOptions } from './interfaces/dataInterface.interface';
import styles from './index.less';

const ExperienceStatisticBlock: React.FC<PropOptions> = ({
  dataOptions = dataFixture,
  icons = iconsFixture,
}) => {
  return (
    <div className={styles.stepsContainer}>
      {dataOptions.map((option: any, index) => (
        <div key={option.type} className={index !== dataOptions.length - 1 ? styles.detailsContainer : styles.detailsContainer1}>
          <div>
            <div className={styles.icon}>
              {icons.icon1}
            </div>
            <div className={styles.icon}>
              {icons.icon2}
            </div>
            <div className={styles.icon}>
              {icons.icon3}
            </div>
          </div>
          <div className={styles.detailInfo}>
            <div>{option.averageTime}s</div>
            <div>0</div>
            <div>0%</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ExperienceStatisticBlock;
