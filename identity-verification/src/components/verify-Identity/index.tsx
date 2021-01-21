import React, { useState } from 'react';
import { Button, List } from 'antd';
import { useIntl } from 'umi';
import {
  ClockCircleOutlined,
  ExpandOutlined,
  InsertRowBelowOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import styles from './index.less';

import { useListRequerments } from '../../hooks/useListRequeriments.hook';
import { useWindowSize } from '../../hooks/useWindowSize';

import ModalDrawer from '../../blocks/m-d-block-options';
import { FlowN2N4Enum } from '../../enums/index';

/**
 * Interface VerifyIdentityProps
 *
 * @interface VerifyIdentityProps
 */
interface VerifyIdentityProps {
  setTypeFlow: Function;
}

/**
 * Component VerifyIdentity
 *
 * @param {*} { setTypeFlow }
 * @return {*} 
 */
const VerifyIdentity: React.FC<VerifyIdentityProps> = ({ setTypeFlow }) => {
  const internationalization = useIntl();

  const { width } = useWindowSize();

  const [ShowDrawer, setShowDrawer] = useState(false);

  const dataList = useListRequerments(3);

  const colorProblock = '#0071ce';

  return (
    <>
      <div className={styles.heading}>
        <div className={styles.divBlock}>
          <h2 className={styles.fontWeightBold}>
            {internationalization.formatMessage({
              id: 'identityVerification.verifyIdentify.title',
            })}
          </h2>
        </div>
        <p className={styles.divP}>
          {internationalization.formatMessage({
            id: 'identityVerification.verifyIdentify.requeriments',
          })}
        </p>
      </div>
      <List
        className={styles.customList}
        itemLayout="horizontal"
        dataSource={dataList}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<div className={styles.listBullet}>{index + 1}</div>}
              title={<p className={styles.listHeading}>{item.title}</p>}
              description={item.content}
            />
          </List.Item>
        )}
      />
      <div className={styles.heading}>
        {width < 768 ? (
          <p className={styles.dSmBlock}>
            {internationalization.formatMessage({
              id: 'identityVerification.verifyIdentify.message.verify.phone',
            })}
          </p>
        ) : (
          <p className={styles.dSmBlock}>
            {internationalization.formatMessage({
              id: 'identityVerification.verifyIdentify.message.verify.desktop',
            })}
          </p>
        )}
      </div>
      <div className={`${styles.btnWrapper} ${styles.step3}`}>
        <div className={styles.remainingTime2}>
          <ClockCircleOutlined className={styles.iconCircle} /> 4 mins.
        </div>
        <Button 
          className={styles.btn} 
          type="primary"
          shape="round"
          onClick={() => {setTypeFlow(FlowN2N4Enum.N4Video)}}
        >
          {internationalization.formatMessage({ id: 'identityVerification.verifyIdentify.action.verify' })}
        </Button>
      </div>
      <hr className={`${styles.w100} ${styles.bord}`} />
      <div className={`${styles.btnWrapper} ${styles.step1}`}>
        <p className={styles.dSmBlock}>
          {internationalization.formatMessage({
            id: 'identityVerification.verifyIdentify.message.connection',
          })}
          <br/>
          {internationalization.formatMessage({
            id: 'identityVerification.verifyIdentify.message.continue',
          })}
        </p>
        <div className={styles.actions}>
          <Button
            className={styles.btn}
            type="primary"
            shape="round"
            onClick={() => {setShowDrawer(true)}}
          >
            {internationalization.formatMessage({
              id: 'identityVerification.verifyIdentify.action.continue',
            })}
          </Button>
          <br/>
          <Button type="link">
            {internationalization.formatMessage({
              id: 'identityVerification.verifyIdentify.action.continue.other',
            })}
          </Button>
        </div>
        {ShowDrawer && (
          <ModalDrawer
          title={internationalization.formatMessage({
            id: 'identityVerification.modalDrawer.title',
          })}
          subtitle={internationalization.formatMessage({
            id: 'identityVerification.modalDrawer.subtitle',
          })}
            options={[
              {
                icon: <ExpandOutlined />,
                valOption: internationalization.formatMessage({
                  id: 'identityVerification.modalDrawer.scanner',
                }),
                color:colorProblock,
                action: () => setTypeFlow(FlowN2N4Enum.N2Scan),
              },
              {
                icon: <UploadOutlined />,
                valOption: internationalization.formatMessage({
                  id: 'identityVerification.modalDrawer.upload',
                }),
                color:colorProblock,
                action: () => setTypeFlow(FlowN2N4Enum.N2Upload),
              },
              {
                icon: <InsertRowBelowOutlined />,
                valOption: internationalization.formatMessage({
                  id: 'identityVerification.modalDrawer.manually',
                }),
                action: () => setTypeFlow(FlowN2N4Enum.N2Manually),
                color:colorProblock
              },
            ]}

            onClose={() => setShowDrawer(false)}

          />
        )}
      </div>
    </>
  );
};

export default VerifyIdentity;
