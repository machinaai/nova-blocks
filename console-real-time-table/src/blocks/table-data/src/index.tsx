import React from 'react';
import { Table } from 'antd';
import { columnsFixture, dataFixture, setValField } from './fixture/data.fixture';
import { PropsBlock } from './interfaces/dataTable.interface';
import styles from './index.less';

const DataTableBlock: React.FC<PropsBlock> = ({ columns = columnsFixture, dataTable = dataFixture, titleTable, action = setValField }) => {
  return (
    <>
      <Table
      rowClassName={styles.cursorSelect}
      sticky
      scroll={{ x: 1500 }} 
      size="small"
      columns={columns}
      title={() => titleTable ? <p className={styles.title}>{titleTable}</p> : null}
      dataSource={dataTable}
      pagination={false}
      onRow={(record) => {
        return {
          onClick: (event) => {
            event.preventDefault();
            action(record);
          }
        }
      }}
    />
    </>
  );
};

export default DataTableBlock;