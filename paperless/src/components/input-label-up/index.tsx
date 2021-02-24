import React, { useState } from 'react';
import { Input } from 'antd';
import { InputProps } from './interfaces/input-auto-label.interface';
import styles from './index.less';
/*
 * Functional Component Block Input Auto Label
 *
 */
const InputAuto: React.FC<InputProps> = (props) => {
  const {
    upperCase,
    onChanged,
    error,
    value: inValue,
    toolTip,
    onPattern,
    onlyNumbersAndLetters,
    ...restProps
  } = props;
  const [LabelState, setLabelState] = useState(true);
  const [ValueState, setValue] = useState('');

  /*
   * Function that set the state of label
   */
  const eventsInputs = (e: any) => {
    const { value } = e.target;
    if (onlyNumbersAndLetters) {
      const reg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ@._-\s]*([0-9a-zA-ZñÑáéíóúÁÉÍÓÚ@._-\s]*)?$/
      if (value.match(reg)) {
        if (upperCase) {
          setValue(value.toUpperCase());
        } else {
          setValue(value);
        }
      }
    }
    if (!upperCase && !onlyNumbersAndLetters) {
      setValue(value);
    }

    if (value === '') {
      setLabelState(true);
    }
    if (value.length > 0) {
      setLabelState(true);
    }
  };

  /*
   * Function that disabled paste on input
   */
  const disableCopyPaste = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={`${styles.main} ${LabelState ? styles.activeLabel : ''}`}>
      {LabelState && (
        <p className={styles.label} >
          {props.placeholder}
          {error && '*'}
        </p>
      )}
      <Input
        autoComplete="off"
        onPaste={disableCopyPaste}
        onCopy={disableCopyPaste}
        onInput={eventsInputs}
        {...restProps}
        placeholder={''}
        value={ValueState}
        pattern={onPattern}
      />
    </div>
  );
};

export default InputAuto;
