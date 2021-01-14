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
    console.log(key);
  }
  return (
    <Collapse 
    defaultActiveKey={['1']}
    onChange={getDataTables}
    bordered={false}
    expandIcon={({ isActive }) =>isActive?<MinusOutlined />:<PlusOutlined/>}
    className="site-collapse-custom-collapse">
      {data.map(item => (
        <Panel header={item.title} key={item.key} extra={item.extraContent}>
          {item.content}
        </Panel>
      ))}
    </Collapse>
  );
};

export default CollapseTableBlock;