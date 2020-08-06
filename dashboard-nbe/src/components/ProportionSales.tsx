import { Card } from 'antd';
import React from 'react';

import styles from '../style.less';

const ProportionSales = ({ dropdownGroup }: { dropdownGroup: React.ReactNode }) => (
  <Card
    className={styles.salesCard}
    style={{
      height: '100%',
    }}
    extra={
      <div className={styles.salesCardExtra}>
        {dropdownGroup}
        <div className={styles.salesTypeRadio} />
      </div>
    }
  />
);

export default ProportionSales;
