import React from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import { dataFixture } from './fixture/data.fixture';
import styles from './index.less';

const StepsStatusBlock: React.FC<any> = ({ dataDocDetail = dataFixture }) => {
  return (
    <div className={styles.container}>
      {dataDocDetail.map((val: any) => (
        <div key={val.step} className={(val.complete) ? styles.rounderGreen : styles.rounderOrange}>
          <div>{(val.complete) ? <CheckCircleFilled style={{ fontSize: '16px', color: '#4caf50' }} /> : (<img src={val.iconIncomplete} alt="check icon" className={styles.icon} />)}</div>
          <div className={styles.title}>{val.step}</div>
        </div>
      ))}
    </div>

  );
};

export default StepsStatusBlock;