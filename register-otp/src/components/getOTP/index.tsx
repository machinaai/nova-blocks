import { Input } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./index.less";


interface GetOtpPropsInterface {
  action: Function
}
const GetOtp: React.FC<GetOtpPropsInterface> = ({action}) => {

  const [valor, setValor] = useState('');

  const onChangeFunction = (e: any) => {
    const { value } = e.target;
    const reg = /^\d*(\d*)?$/;
    if (value.match(reg)) {
      setValor(value);
    }
  };

  useEffect(() => {
    if (valor.length === 10) {
      
      if (action) {
       action(valor);
      }
      const list = valor.split('');
      list.unshift('(');
      list[2] += ')';
      let nuevo = list.join('');

      setValor(nuevo);
    }
  }, [valor])



  return (
    <>
      <Input
        id="phone"
        onChange={onChangeFunction}
        value={valor}
        maxLength={10}
        className={styles.input}
        autoComplete="off"
        inputMode={'numeric'}
        pattern="[0-9]*"
      />
    </>
  );
};

export default GetOtp;
