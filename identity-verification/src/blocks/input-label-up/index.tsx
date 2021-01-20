import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { InputProps } from './interfaces/input-auto-label.interface';

import styles from './index.less';

const InputPassword = Input.Password;
/*
 * Functional Component Block Input Auto Label
 *
 */
const InputAuto: React.FC<InputProps> = (props) => {
  const {
    inputPassword,
    onPasteDisabled,
    onCopyDisabled,
    upperCase,
    onChanged,
    error,
    value: inValue,
    ...restProps
  } = props;
  const [LabelState, setLabelState] = useState(false);
  const [ValueState, setValue] = useState<string | undefined>();

  /*
   * Listen change value
   */
  useEffect(() => {
    if (upperCase) {
      setValue(inValue?.toUpperCase());
    } else {
      setValue(inValue);
    }
    if (inValue && inValue?.length > 0) {
      setLabelState(true);
    }
  }, [inValue]);

  /*
   * Function that set the state of label
   */
  const eventsInputs = (e: any) => {
    const { value } = e.target;
    if (value === '') {
      setLabelState(false);
    }
     if (value.length > 0) {
      setLabelState(true);
    }
    if (upperCase) {
      setValue(value.toUpperCase());
    } else {
      setValue(value);
    }
  };

  /*
   * Function that disabled paste on input
   */
  const disableCopyPaste = (e: any) => {
    if (props.onCopyDisabled || props.onPasteDisabled) {
      e.preventDefault();
    }
  };

  return (
    <div className={`${styles.main} ${LabelState ? styles.activeLabel : ''}`}>
      <p className={styles.floating}>
        {LabelState && (
          <label className={`${error ? styles.floating : ''}`} htmlFor="labelInput">
            {props.placeholder}
            {error && '*'}
          </label>
        )}
      </p>

      {inputPassword ? (
        <InputPassword
          onPaste={disableCopyPaste}
          onCopy={disableCopyPaste}
          onChange={eventsInputs}
          {...restProps}
          value={ValueState}
        />
      ) : (
        <Input
          onPaste={disableCopyPaste}
          onCopy={disableCopyPaste}
          onChange={eventsInputs}
          {...restProps}
          value={ValueState}
        />
      )}
    </div>
  );
};

export default InputAuto;
