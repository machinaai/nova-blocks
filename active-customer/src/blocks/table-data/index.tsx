import React from 'react';
import { Table } from 'antd';
import { columnsFixture, dataFixture, setValField } from './fixture/data.fixture';
import { PropsBlock } from './interfaces/dataTable.interface';
import styles from './index.less';

const DataTableBlock: React.FC<PropsBlock> = ({ columns = columnsFixture, dataTable = dataFixture, titleTable, action = setValField }) => {

  return (
    <>
      <Table
        size="small"
        columns={columns}
        title={() => titleTable ? titleTable : null}
        dataSource={dataTable}
        pagination={false}
        rowClassName={styles.rowTab}
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