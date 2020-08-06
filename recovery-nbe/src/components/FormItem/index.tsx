import { Form } from 'antd';
import React from 'react';

import { InputProps } from './input-auto-label.interface';
import InputAuto from './Input';

const FormItem = Form.Item;
/*
 * Function that get props for just form item
 */
const getFormItemOptions = ({ onChanged, defaultValue, customProps = {}, rules }: InputProps) => {
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
  const { onChanged, customProps, defaultValue, rules, name, inputPassword, ...restProps } = props;

  if (!name) {
    return null;
  }

  const options = getFormItemOptions(props);
  const otherProps = restProps || {};

  return (
    <FormItem name={name} {...options}>
      <InputAuto inputPassword={inputPassword} {...customProps} {...otherProps} />
    </FormItem>
  );
};

export default LoginItem;
