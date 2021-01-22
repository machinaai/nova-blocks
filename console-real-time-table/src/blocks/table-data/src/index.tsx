import React from 'react';
import { Table } from 'antd';
import { columnsFixture, dataFixture, setValField } from './fixture/data.fixture';
import { PropsBlock } from './interfaces/dataTable.interface';
import styles from './index.less';

const DataTableBlock: React.FC<PropsBlock> = ({ columns = columnsFixture, dataTable = dataFixture, titleTable, action = setValField }) => {
  let showTable;
  if (titleTable) {
    showTable = <Table
      size="small"
      columns={columns}
      title={() => <p className={styles.title}>{titleTable}</p>}
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
  } else {
    showTable = <Table
      size="small"
      columns={columns}
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

  }
  return (
    <>
      {showTable}
    </>
  );
};

export default DataTableBlock;