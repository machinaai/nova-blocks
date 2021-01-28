import React, { useState, useEffect } from 'react';
import { Input, Tooltip, Modal } from 'antd';
import { InputProps } from './interfaces/input-auto-label.interface';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useIntl } from 'umi';
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
    toolTip,
    onPattern,
    onlyNumbers,
    onlyLetters,
    onlyNumbersAndLetters,
    ...restProps
  } = props;
  const [LabelState, setLabelState] = useState(true);
  const [ValueState, setValue] = useState('');
  const size = useWindowSize();
  const internationalization = useIntl();

  useEffect(() => {
    return () => {
        Modal.destroyAll();
    }
  }, [])

  /*
   * Function that set the state of label
   */
  const eventsInputs = (e: any) => {
    const { value } = e.target;
    if (onlyNumbersAndLetters) {
      // const reg = /^\w*(\w*)?$/;
      const reg = /^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*([0-9a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*)?$/;
      if (upperCase) {
        if (value.match(reg)) {
          setValue(value.toUpperCase());
        }
      } else {
        setValue(value);
      }
    }
    if (onlyLetters) {
      const reg = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*([a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*)?$/;
      if (upperCase) {
        if (value.match(reg)) {
          setValue(value.toUpperCase());
        }
      } else {
        setValue(value);
      }
    }
    if (onlyNumbers) {
      const reg = /^\d*(\d*)?$/;
      if (upperCase) {
        if (value.match(reg)) {
          setValue(value.toUpperCase());
        }
      }
    }

    if (!upperCase && !onlyNumbers && !onlyLetters && !onlyNumbersAndLetters) {
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
    if (props.onCopyDisabled || props.onPasteDisabled) {
      e.preventDefault();
    }
  };

  let toolTipHelp = (
    <Tooltip title={toolTip} placement="right">    
       <QuestionCircleOutlined className={styles.iconHelp}/>
    </Tooltip>
  );

  const modalHelp = () =>{
    Modal.info({
      content: (
        <div>
          {toolTip}
        </div>
      ),
      onOk() {},
      okText: internationalization.formatMessage({id: 'tooltipHelp.modal.btn'}),
      icon: '',
      width: 300,
      closable: true
    });
  }

  let change;
  const  changeTooltip = () => {
    if (size.width < 768) {
      return change = (<QuestionCircleOutlined className={styles.iconHelp} onClick={modalHelp} />)
    } else {
      Modal.destroyAll();
      return change = toolTipHelp;
    }
  }

  return (
    <div className={`${styles.main} ${LabelState ? styles.activeLabel : ''}`}>
        {LabelState && (
          <p className={styles.label} >
            {props.placeholder}
            {error && '*'}
            {toolTip ? changeTooltip()  : null}
          </p>
        )}

      {inputPassword ? (
        <InputPassword
          autoComplete="off"
          onPaste={disableCopyPaste}
          onCopy={disableCopyPaste}
          onChange={eventsInputs}
          {...restProps}
          value={ValueState}
        />
      ) : (
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
      )}
    </div>
  );
};

export default InputAuto;
