import React, { useState, useEffect } from 'react';
import { useIntl } from 'umi';
import { Select, Button } from 'antd';
import { ComboProps } from './combo.interface';
import { ErrorEnum } from './error.enum';

const { Option } = Select;

const defaultData=[{
  value: '1',
  text: `Options here...`,  
}]

const ComboBlock: React.FC<ComboProps> = ({ data=defaultData, title='Title here', error, retry, selected, search }) => {
  const [header, setHeader] = useState(title);
  const [valueFilter, setValueFilter] = useState('');
  const int = useIntl();

  const open = error ? { open: false } : {};

  const placeholder = (
    <>
      { header}
      {ErrorEnum.api === error && <Button type="link" >{int.formatMessage({ id: "comboBlock.retry" })}</Button>}
    </>
  )

  const onClick = () => {
    ErrorEnum.api === error && retry && retry();
  }

  const filterOptions = (value: string) => {
    if (value.length < 3) {
      return true;
    } else {
      setValueFilter(value);
      search && search(value);
    }
  }

  const onScroll = (event: any) => {
    if (valueFilter.length >= 3) {
      const { target } = event;
      (target.scrollTop + target.offsetHeight) === (target.scrollHeight) && search && search(valueFilter, true);
      !target.scrollTop && search && search(valueFilter, false);
    }
  }

  useEffect(() => {
    if (ErrorEnum.api === error) {
      setHeader(int.formatMessage({ id: "comboBlock.error.api" }));
    } else if (ErrorEnum.accounts === error) {
      setHeader(int.formatMessage({ id: "comboBlock.error.accounts" }));
    } else {
      setHeader(title);
    }
  }, [error]);

  return (
    <>
      <Select
        style={{ width: "100%", maxWidth: "500px" }}
        placeholder={placeholder}
        showArrow={!error}
        onClick={onClick}
        {...open}
        showSearch
        onSearch={filterOptions}
        listHeight={160}
        onSelect={(value) => { selected && selected(value) }}
        filterOption={false}
        onPopupScroll={onScroll}
        getPopupContainer={triggerNode => {
          return triggerNode;
        }}
        onBlur={() => { setValueFilter('') }}
      >
        {data?.map(opt => (<Option key={opt.value} value={opt.value}>{opt.text}</Option>))}
      </Select>
    </>
  );
}

export default ComboBlock;