import styles from './index.less';
import { formatMessage } from 'umi-plugin-react/locale';
import React from 'react';
import SelectLang from './components/SelectLang/index';
import logo from './assets/logos/bne-logo.svg';

const HeaderNbe: React.FC = () => {
  
  return (

      <div className={styles.container}>
        <div className={styles.lang}>
          <div className={styles.logo_Reboot}>
            <img src="https://images7.bamboohr.com/152496/logos/cropped.jpg?v=39" alt="" />
          </div>
          <SelectLang />
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <img alt="logo" className={styles.logo} src={logo} />
              <span className={styles.title}>
                {formatMessage({
                  id: 'login.corporateBanking',
                  defaultMessage: 'Banca empresarial',
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeaderNbe;
