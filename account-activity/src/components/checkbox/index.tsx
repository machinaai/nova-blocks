import React, { Fragment, useState, useEffect} from 'react'
import { CheckCircleFilled } from '@ant-design/icons';
import { CheckBoxProps } from '../../interfaces/checkOptions.interface';
import styles from './index.less';


export const CheckBoxOptions: React.FC<CheckBoxProps> = ({ options, setCheck = () => { }, defValue }) => {

    let defaultOption = options ? options[0] : undefined;

    const [check, setCheckOption] = useState([defaultOption]);

    const [showOptions, setShowOptions ] = useState({
        op1: true,
        op2: false,
    })

    const radioSelect = (e:any) => {
        setCheckOption([e]);
        if(e.includes('Má') || e.includes('More') ) {
            setShowOptions({
                op1: false,
                op2: true
            })
        }else {
            setShowOptions({
                op1: true,
                op2: false
            })
        }
    }

    useEffect(() => {
        setCheck(check);
    }, [check])

    return (
    <div>
        {options?.map((e) => {
                return (
                    <div className={styles.container} key={e}>
                        <div className={styles.radio} onClick={ () => radioSelect(e)}>
                            {e.includes('Menos') || e.includes('Less') ? 
                            showOptions.op1 ? <CheckCircleFilled className={styles.icon} /> : null 
                            : showOptions.op2 ? <CheckCircleFilled className={styles.icon} /> : null } 
                        </div>
                        <div className={styles.textOptions}>{e}</div>
                    </div>
                )
        })}
    </div>
    )
}
