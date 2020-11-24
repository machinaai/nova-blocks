import React, { useState } from 'react';
import { Radio } from 'antd';
import { SelectOptionsProps } from './interfaces/dataInterface.interface';
import { optionsFixture, setValOption } from './fixtures/dataOption.fixture';
import styles from './index.less';

const RadioButtonBlock: React.FC<SelectOptionsProps> = ({ dataOptions = optionsFixture,action = setValOption, fontOp='Signika-Medium' }) => {
  const [radio, setRadio] = useState();
  const radioChange = (e: any) => {
    setRadio(e.target.value);
    action(e.target.value);
  } 

  return (
    <Radio.Group
      buttonStyle="solid"
      options={dataOptions}
      onChange={radioChange}
      value={radio}
      optionType="button"
      style={{fontFamily:`${fontOp}`}}
      className={styles.radio}
      size='large'
    />
  );
};

export default RadioButtonBlock;
