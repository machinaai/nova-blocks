import { Form } from 'antd';
import React from 'react';

import { InputProps } from './../interfaces/input-auto-label.interface';
import InputAuto from './Input/Input';

/*
 * Function that get props for just form item
 */
export const getFormItemOptions = ({ onChanged, defaultValue, customProps = {}, rules }: InputProps) => {
  const options: {
    rules?: InputProps['rules'];
    onChange?: InputProps['onChanged'];
    initialValue?: InputProps['defaultValue'];
  } = {
    rules: rules || (customProps.rules as InputProps['rules']),
  };
  if (onChanged) {
    options.onChange = onChanged;
  }
  if (defaultValue) {
    options.initialValue = defaultValue;
  }
  return options;
};

/*
 * Functional Component Block Form Item
 *
 */
const LoginItem: React.FC<InputProps> = (props) => {
  const { onChanged, customProps, defaultValue, rules, name, ...restProps } = props;

  if (!name) {
    return null;
  }

  const options = getFormItemOptions(props);

  return (
    <Form.Item name={name} {...options}>
      <InputAuto {...customProps} {...restProps} />
    </Form.Item>
  );
};

export default LoginItem;
