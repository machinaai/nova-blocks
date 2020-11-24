import React, { useState } from 'react';
import { Select } from 'antd';
import { SelectOptionsProps } from './interfaces/dataInterface.interface';
import { dataFixture, dataTitle, setOption } from './fixtures/dataOption.fixture';
import styles from './index.less';

const SelectOptionsBlock: React.FC<SelectOptionsProps> = ({dataOptions=dataFixture,titleSelect=dataTitle,widthSelect=200,action=setOption}) => {
  const { Option } = Select;
  const [valItem, setValItem] = useState(dataOptions[0].nameOp)

  const onChange=(value : any)=> {
    setValItem(value);
    action(value);
  }
  return (
    <Select
      className={styles.selectOp}
      value={`${dataTitle.title}:${valItem}`}      
      style={{ width: widthSelect,fontFamily:`${titleSelect.font}`}}
      optionFilterProp="children"
      onChange={onChange}      
    >
      {dataOptions.map((op:any)=>(
         <Option key={op.op} value={op.nameOp}>{op.nameOp}</Option>
      ))}
    </Select>
  );
};

export default SelectOptionsBlock;
