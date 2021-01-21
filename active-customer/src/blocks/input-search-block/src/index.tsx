import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import styles from './index.less';

interface PropsBlock {
  placeholderVal?: string,
  actionInput?: Function
}

const InputSearchBlock: React.FC<PropsBlock> = ({
  placeholderVal = 'Búsqueda por: número o nombre',
  actionInput = (val: any) => {
    console.log(val);
  }
}) => {
  const handleChange = (e: any) => {
    actionInput(e.target.value);
  };

  return (
      <Input
        className={styles.inputContainer}
        allowClear
        onPressEnter={handleChange}
        size="large"
        placeholder={placeholderVal}
        prefix={<SearchOutlined />}
        onChange={handleChange} />
  );
};

export default InputSearchBlock;