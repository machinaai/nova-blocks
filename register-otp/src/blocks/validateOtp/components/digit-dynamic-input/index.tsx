import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import styles from './index.less';

/**
 * props DigitDynamicInputProps
 *
 * @interface DigitDynamicInputProps
 */
interface DigitDynamicInputProps {
  lengthOtp?: number;
  action: Function;
}

/**
 * Block DigitDynamicInput
 *
 * @param {DigitDynamicInputProps} { lengthOtp = 4, action }
 *
 */
const DigitDynamicInput: React.FC<DigitDynamicInputProps> = ({ lengthOtp = 4, action }) => {
  const [number, setNumber] = useState('');

  let obj: any = [];

  useEffect(() => {
    const inputs = document.getElementById('inputsDigits')?.querySelectorAll('input');
    if (number.length === lengthOtp && inputs !== undefined) {
      inputs[number.length - 1].focus();
    } else if (inputs !== undefined) {
      inputs[number.length].focus();
    }
    if (number.length === lengthOtp) {
      action(number);
    }
  }, [number]);

  const onChangeFunction = (e: any) => {
    const { value } = e.target;
    const reg = /^\d*(\d*)?$/;

    if (value.match(reg)) {
      setNumber(number + e.target.value);
    }
  };

  const KeyPressed = (e: any) => {
    const { keyCode } = e;

    if (keyCode === 8) {
      setNumber(number.slice(0, -1));
    }
  };

  const generateInput = (numberFields: number) => {
    const element = [];

    for (let i = 0; i < numberFields; i++) {
      const valor = number.split('');

      obj.push({ index: i, value: '', disabled: true });

      const reg = /^\d*(\d*)?$/;
      if (valor[i]) {
        if (valor[i].match(reg)) {
          obj[i].value = valor[i];
        }
      }

      if (i === 0) {
        obj[i].disabled = false;
      }
      if (i > 0) {
        if (obj[i - 1].value) {
          obj[i].disabled = false;
        }
      }

      if (obj[lengthOtp - 1]?.value) {
        for (let i = 0; i < numberFields; i++) {
          obj[i].disabled = true;
        }
      }
    }

    for (let index = 0; index < numberFields; index += 1) {
      element.push(
        <Input
          key={`digit${index.toString()}`}
          id={index.toString()}
          onKeyDown={KeyPressed}
          onChange={onChangeFunction}
          className={styles.input}
          value={obj[index].value}
          type="text"
          maxLength={1}
          autoComplete="off"
          inputMode={'numeric'}
          pattern="[0-9]*"
          disabled={obj[index] ? obj[index].disabled : false}
        />,
      );
    }
    return element;
  };

  return (
    <>
      <div className={styles.subcontainer} id="inputsDigits">
        {generateInput(lengthOtp)}
      </div>
    </>
  );
};

export default DigitDynamicInput;
