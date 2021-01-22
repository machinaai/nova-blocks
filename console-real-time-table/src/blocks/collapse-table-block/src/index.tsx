import React from 'react';
import { Collapse } from 'antd';
import { dataFixture } from './fixture/data.fixture';
import { PropsBlock } from './interfaces/dataTable.interface';
import styles from './index.less';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

const CollapseTableBlock: React.FC<PropsBlock> = ({ data = dataFixture }) => {
  const { Panel } = Collapse;
  let valIcon;
  const getDataTables = (key: any) => {
    if (key !== []){
      valIcon=<PlusOutlined />
    }
  }
  return (
    <Collapse 
    defaultActiveKey={['1']}
    onChange={getDataTables}
    bordered={false}
    expandIcon={({ isActive }) =>isActive?<MinusOutlined style={{border:`1px solid rgb(204, 204, 204)`, padding:8}}/>:<PlusOutlined style={{border:`1px solid rgb(204, 204, 204)`, padding:8}}/>}
    className="site-collapse-custom-collapse">
      {data.map(item => (
        <Panel header={<p className={styles.title}>{item.title}</p>} key={item.key} extra={<div className={styles.extraCont}>{item.extraContent}</div>} className={styles.container}>
          {item.content}
        </Panel>
      ))}
    </Collapse>
  );
};

export default CollapseTableBlock;