import { Input } from 'antd';
import React, { useState } from 'react';

const NumericInput: React.FC = () => {

  const [valor, setValor] = useState('');
  let nuevo: any;
  
  const onChangeFunction = (e: any) => {
    const { value } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (value.match(reg)) {
        setValor(value);
    }
  };

  if (valor.length === 10 ) {
    const list = valor.split('');
        list.unshift('(');
        list[2] += ')';
         nuevo = list.join('');
        setValor(nuevo)
  }
  return (
      <Input
        onChange={onChangeFunction}
        value={valor}
        placeholder="Input a number"
        maxLength={10}
        autoComplete="off"
      />
  );
};
export default NumericInput;