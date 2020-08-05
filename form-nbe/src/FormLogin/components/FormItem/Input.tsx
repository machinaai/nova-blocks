/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import { Input } from 'antd';
import { InputProps } from './input-auto-label.interface';

import styles from './index.less';

const InputPassword = Input.Password;
/*
 * Functional Component Block Input Auto Label
 *
 */
const InputAuto: React.FC<InputProps> = (props) => {
  const { inputPassword, onPasteDisabled, onCopyDisabled, onChanged, error, ...restProps } = props;
  const [LabelState, setLabelState] = useState(false);

  /*
   * Function that set the state of label
   */
  const labelPlaceHolder = (e: any) => {
    const { value } = e.target;
    if (value === '') {
      setLabelState(false);
    } else if (value.length > 0) {
      setLabelState(true);
    }
  };

  /*
   * Function that disabled paste on input
   */
  const disablePaste = (e: any) => {
    if (onPasteDisabled) {
      e.preventDefault();
    }
  };

  /*
   * Function that disabled copy on input
   */
  const disableCopy = (e: any) => {
    if (onCopyDisabled) {
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
          onPaste={disablePaste}
          onCopy={disableCopy}
          onChangeCapture={labelPlaceHolder}
          {...restProps}
        />
      ) : (
        <Input
          onPaste={disablePaste}
          onCopy={disableCopy}
          onChangeCapture={labelPlaceHolder}
          {...restProps}
        />
      )}
    </div>
  );
};

export default InputAuto;
