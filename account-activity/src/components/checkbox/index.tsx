import React from 'react'
import { Checkbox } from 'antd';
import styles from './index.less';

interface CheckBoxProps {
    options?: string[],
    setCheck?: Function,
    defValue?: string[]
}

export const CheckBoxOptions: React.FC<CheckBoxProps> = ({ options, setCheck = () => { }, defValue }) => {
    const onChange = (checkedValues: any) => {
        setCheck(checkedValues);
    }
    return (
        <Checkbox.Group
            className={styles.textOptions}
            options={options}
            value={defValue}
            onChange={onChange} />
    )

}
