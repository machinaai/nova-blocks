import React, { useEffect, useState } from 'react';
import { useIntl, useDispatch } from 'umi';
import { Button, Skeleton } from 'antd';

import RadioButton from '../Radio-Button';
import styles from './index.less';
import { DataUserInterface } from '../../interfaces';

/**
 * Interface VerifyDataProps
 *
 * @interface VerifyDataProps
 */
interface VerifyDataProps {
  data?: DataUserInterface;
  action?: Function;
  setUpdateAdressValue?: Function;
}
/**
 * Component VerifyData
 *
 * @param {*} { data, action }
 * @return {*} 
 */
const VerifyData: React.FC<VerifyDataProps> = ({ data, action }) => {
  
  const internationalization = useIntl();
  const [valor, setvalor] = useState(false);

  const radio = (value: any) => {    
    setvalor(value);
  };

  return (
    <>
      {!data ? (
        <Skeleton active paragraph={{ rows: 5 }} />
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.header_title}>
              <h2 className={styles.title}>
                {internationalization.formatMessage({
                  id: 'identityVerification.formVerify.title',
                })}
              </h2>
              <p className={styles.subtitle}>
                {internationalization.formatMessage({
                  id: 'identityVerification.formVerify.subtitle',
                })}
              </p>
            </div>
            <div className={styles.subcontainer}>
              <div className={styles.field_container}>
                <p className={styles.label}>
                  {internationalization.formatMessage({
                    id: 'identityVerification.formManually.name',
                  })}:
                </p>
                <p className={styles.p}>{data.name}</p>
              </div>
              <div className={styles.field_container}>
                <p className={styles.label}>
                  {internationalization.formatMessage({
                    id: 'identityVerification.formManually.gender',
                  })}:
                </p>
                <p className={styles.p}>
                  {data.gender === 'H'
                    ? internationalization.formatMessage({
                        id: 'identityVerification.formManually.gender.1',
                      })
                    : internationalization.formatMessage({
                        id: 'identityVerification.formManually.gender.2',
                      })}
                </p>
              </div>
              <div className={styles.field_container}>
                <p className={styles.label}>
                  {internationalization.formatMessage({
                    id: 'identityVerification.formManually.date',
                  })}:
                </p>
                <p className={styles.p}>{data.datebirth}</p>
              </div>
              <div className={styles.field_container}>
                <p className={styles.label}>
                  {internationalization.formatMessage({
                    id: 'identityVerification.formManually.address',
                  })}:
                </p>
                <p className={styles.p}>{data.birthplace} </p>
              </div>
              <div className={styles.field_container}>
                <p className={styles.label}>
                  {internationalization.formatMessage({
                    id: 'identityVerification.formManually.curp',
                  })}:
                </p>
                <p className={styles.p}>{data.curp}</p>
              </div>
              <div className={styles.field_container}>
                <p className={styles.label}>
                  {internationalization.formatMessage({
                    id: 'identityVerification.formManually.id',
                  })}:
                </p>
                <p className={styles.p}>{data.idIne}</p>
              </div>
             {data.residence && (
                <div className={styles.field_container}>
                <p className={styles.label}>
                  {internationalization.formatMessage({
                    id: 'identityVerification.formVerify.residence',
                  })}
                </p>
                <p className={styles.p}>{data.residence}</p>
              </div>
             )}
              <div className={styles.buttons_container}>
                <div className={styles.group_radio}>
                  <div className={styles.radio_button}>
                    <RadioButton radio={radio} />
                  </div>
                  <p className={styles.radio_label}>
                    {internationalization.formatMessage({
                      id: 'identityVerification.formVerify.radio.register',
                    })}
                  </p>
                </div>

                <div>
                  <Button
                    className={styles.btn}
                    type="primary"
                    shape="round"
                    onClick={() => {
                      if (action) {
                        action(valor);
                      }
                    }}
                  >
                    {internationalization.formatMessage({
                      id: 'identityVerification.formManually.save',
                    })}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default VerifyData;
