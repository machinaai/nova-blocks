import React from 'react';
import { Table } from 'antd';
import { columnsFixture, dataFixture, setValField } from './fixture/data.fixture';
import { PropsBlock } from './interfaces/dataTable.interface';
import styles from './index.less';

const DataTableBlock: React.FC<PropsBlock> = ({ columns = columnsFixture, dataTable = dataFixture, titleTable, action = setValField }) => {
  
  const restTable = titleTable ? {
    title: () => <p className={styles.title}>{titleTable}</p>
  } : {};

  const propsTable = {
    rowClassName: styles.cursorSelect,
    scroll:{ x: 1500 },
    size: "small",
    columns: columns,
    dataSource: dataTable,
    pagination: false,
    onRow:
      (record) => {
      return {
        onClick: (event) => {
          event.preventDefault();
          action(record);
        }
      }
    }
  }

  return (
    <>
      <Table
        {...propsTable}
        {...restTable}
      />
    </>
  );
};

export default DataTableBlock;