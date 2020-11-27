import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Button, Tooltip, Row, Col } from 'antd';
import React from 'react';
import styles from './index.less';
import { ConfigProps } from './interfaces/totalReq.interface';


const ConfigDashboardBlock: React.FC<ConfigProps> = ({
  title = 'Configurar Dashboard',
  fontTitle = 'Signika-Regular_Regular',
  btnOption = {
    title:'Nueva',
    action:() => {
      console.log('new Option');
    }
  },
  optionInfo = {
    title: 'Ayuda',
    action: () => {
      console.log('Info');
    }
  }
}) => {

  return (
    <Card>
      <div className={styles.container}>
        <h2 className={styles.title} style={{ fontFamily: `${fontTitle}` }}>{title}</h2>
        <div>
          <Tooltip placement="top" title={optionInfo?.title}>
            <Button type='text' icon={<InfoCircleOutlined onClick={optionInfo?.action} />} />
          </Tooltip>
          <Button className={styles.btn2} type='primary' shape='round' onClick={btnOption.action}>{btnOption.title}</Button>
        </div>
      </div>
    </Card>
  );
};

export default ConfigDashboardBlock;