import React, { useEffect, useState } from 'react';
import { dataFixture } from './fixture/dataFixture';
import { Modal, Drawer, Button } from 'antd';
import { ModalProps } from './interfaces/modal.interface';
import styles from './index.less';

const OptionsBlock: React.FC<ModalProps> = (props) => {
  const { title = 'Title', subtitle = 'Subtitle', options = dataFixture, fontFamily: font, onlyModal = true, onlyDrawer = true, onClose } = props
  const [showModal, setShowModal] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const closeModal = () => {
    onClose()
    setShowModal(false)
  };
  const closeDrawer = () => {
    onClose();
    setShowDrawer(false)
  };

  useEffect(() => {
    if (onlyModal && onlyDrawer) {
      let userAgent = navigator.userAgent || navigator.vendor;
      if (/android/i.test(userAgent) || (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)) {
        setShowDrawer(true);
      } else {
        setShowModal(true);
      }
    } else if (onlyModal || onlyDrawer) {
      onlyModal && setShowModal(true);
      onlyDrawer && setShowDrawer(true);
    } else {
      setShowModal(false);
      setShowDrawer(false);
    }
  }, [onlyModal,onlyDrawer]);

  return (
    <>
      <Modal
        onCancel={closeModal}
        visible={showModal}
        mask={showModal}
        footer={null}
      >
        <div className={styles.heading}>
          <p className={styles.title} style={{ fontFamily: font?.fontTitle }}>{title}</p>
          <p className={styles.subtitle} style={{ fontFamily: font?.fontSubtitle }}>{subtitle}</p>
        </div>
        {options.map(option => (
          <div className={styles.optionWrapper} key={option.valOption}>
            <Button className={styles.btnOptions} onClick={option.action} icon={option.icon} size='large' style={{color:`${option.color}`}} block >
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
        height={'auto'}>
        <div className={styles.heading}>
          <h1 className={styles.title} style={{ fontFamily: font?.fontTitle }}>{title}</h1>
          <p className={styles.subtitle} style={{ fontFamily: font?.fontSubtitle }}>{subtitle}</p>
        </div>
        {options.map(option => (
          <div className={styles.optionWrapper} key={option.valOption}>
            <Button className={styles.btnOptions} onClick={option.action} icon={option.icon} size='large' style={{color:`${option.color}`}} block>
              {option.valOption}
            </Button>
          </div>
        ))}
      </Drawer>
    </>
  );
}

export default OptionsBlock;
