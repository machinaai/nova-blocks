import React from 'react';
import { dataFixture } from './fixture/dataFixture';
import { Modal, Button } from 'antd';
import { ModalProps } from './interfaces/modal.interface';
import styles from './index.css';

const ModalBlock: React.FC <ModalProps> = (props) => {
  const { title = 'Title', subtitle = 'Subtitle', options = dataFixture, visible = true, closeElement,fontFamily:font } = props

  return (
    <Modal
      onCancel={closeElement}
      visible={visible}
      mask={visible}
      footer={null}
    >
      <div className={styles.heading}>
        <h1  className={styles.title} style={{fontFamily:font?.fontTitle}}>{title}</h1>
        <p className={styles.subtitle} style={{fontFamily:font?.fontSubtitle}}>{subtitle}</p>
      </div>
      {options.map(option => (
        <div className={styles.optionWrapper} key={option.valOption}>
          <Button onClick={option.action} icon={option.icon}> 
            {option.valOption}
          </Button>
        </div>
      ))}
    </Modal>
  );
};

export default ModalBlock;
