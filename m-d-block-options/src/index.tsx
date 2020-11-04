import React, { useEffect, useState } from 'react';
import { dataFixture } from './fixture/dataFixture';
import { Modal, Drawer, Button } from 'antd';
import { ModalProps } from './interfaces/modal.interface';
import styles from './index.less';

const OptionsBlock: React.FC<ModalProps> = (props) => {
  const { title = 'Title', subtitle = 'Subtitle', options = dataFixture, fontFamily: font, onlyModal=true, onlyDrawer=true, setElementType=()=>{}} = props
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const closeModal = () => setShowModal(false);
  const closeDrawer = () => setShowDrawer(false);

  useEffect(()=>{
    if (onlyModal && onlyDrawer) {
      let userAgent = navigator.userAgent || navigator.vendor;
      if (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
        setShowDrawer(true);  
        setElementType('drawer')
      } else {
        setElementType('modal')
        setShowModal(true); 
      }
    } else{
    onlyModal && setShowModal(true); 
    onlyDrawer && setShowDrawer(true); 
    }
  },[onlyModal || onlyDrawer]);

  return (
    <>
     <Modal
        onCancel={closeModal}
        visible={showModal}
        mask={showModal}
        footer={null}
      >
        <div className={styles.heading}>
          <h1 className={styles.title} style={{ fontFamily: font?.fontTitle }}>{title}</h1>
          <p className={styles.subtitle} style={{ fontFamily: font?.fontSubtitle }}>{subtitle}</p>
        </div>
        {options.map(option => (
          <div className={styles.optionWrapper} key={option.valOption}>
            <Button onClick={option.action} icon={option.icon}>
              {option.valOption}
            </Button>
          </div>
        ))}
      </Modal>
      <Drawer 
        placement="bottom"
        closable
        onClose={closeDrawer}
        visible={showDrawer}
        height={300}>
        <div className={styles.heading}>
          <h1 className={styles.title} style={{ fontFamily: font?.fontTitle }}>{title}</h1>
          <p className={styles.subtitle} style={{ fontFamily: font?.fontSubtitle }}>{subtitle}</p>
        </div>
        {options.map(option => (
          <div className={styles.optionWrapper} key={option.valOption}>
            <Button onClick={option.action} icon={option.icon}>
              {option.valOption}
            </Button>
          </div>
        ))}
      </Drawer>
    </>
  );
}

export default OptionsBlock;
