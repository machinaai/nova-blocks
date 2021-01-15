import React, { useEffect, useState } from 'react'
import { Checkbox, Button } from 'antd';
import { useIntl } from 'umi';
import { CheckBoxProps } from '../../interfaces/checkOptions.interface';
import { CheckBoxOptions } from '../checkbox/index';
import styles from './index.less';

interface Props {
    optionsCheck: string[],
    setFlow: Function,
    fontFamily: Font,
    setOnClose: Function,
    setShowModal: Function,
    setShowDrawer: Function
}
interface Font {
    fontTitle: string,
    fontSubtitle: string,
    fontTextTerms: string
}

export const AccountActivity: React.FC<Props> = ({
    optionsCheck,
    setFlow,
    fontFamily: font,
    setOnClose,
    setShowModal,
    setShowDrawer
}) => {
    const intl = useIntl();
    let valueCheck;

    const [checkVal, setCheck] = useState(['Menos de $18,000']);
    const [oldVal, setOldVal] = useState(['']);
    const [stateCheck, setStateCheck] = useState(
        {
            checked: false,
        }
    )

    useEffect(() => {
        (checkVal.length !== 0) && setOldVal(checkVal);
    }, [checkVal]);

    if (checkVal.length === 0) {
        if (oldVal[0].includes('Menos') || oldVal[0].includes('less')) {
            valueCheck = [`${intl.formatMessage({ id: 'AccountActivity.optionCheck2' })} $18,000`];
            setCheck([`${intl.formatMessage({ id: 'AccountActivity.optionCheck2' })} $18,000`])
        } else if (oldVal[0].includes('Má') || oldVal[0].includes('more')) {
            valueCheck = [`${intl.formatMessage({ id: 'AccountActivity.optionCheck1' })} $18,000`]
            setCheck([`${intl.formatMessage({ id: 'AccountActivity.optionCheck1' })} $18,000`]);
        }
    } else {
        valueCheck = checkVal.length === 1 ? checkVal[0] : checkVal[1]
    }

    const props: CheckBoxProps = {
        options: optionsCheck,
        setCheck,
        defValue: valueCheck
    }

    /**
     * Method to get the value of the checkbox
     * @param e value of the selected check
     */
    const onChange = (e: any) => {
        setStateCheck({
            ...stateCheck,
            checked: e.target.checked,
        });
    };

    const valDis = props.defValue === undefined ? true : false;
    const valDisBut = !stateCheck.checked || valDis ? true : false;

    /**
     * Method to change the value of the flow, and change the value to show or not the modal or drawer.
     */
    const onValidateFlow = () => {
        const { defValue } = props;
        if (defValue.includes('Menos') || defValue.includes('less')) {
            setFlow('n2');
            setOnClose(true);
            setShowModal(false),
                setShowDrawer(false)
        } else {
            setFlow('n4')
        }

    }
    return (
        <div className={styles.container}>
            <h2 className={styles.title} style={{ fontFamily: `${font.fontTitle}` }}>{intl.formatMessage({ id: 'AccountActivity.title' })}</h2>
            <p className={styles.subtitle} style={{ fontFamily: `${font.fontSubtitle}` }}>{intl.formatMessage({ id: 'AccountActivity.subtitle' })}</p>
            <CheckBoxOptions {...props} />
            <div className={styles.buttons}>
                <Checkbox
                    checked={stateCheck.checked}
                    disabled={valDis}
                    onChange={onChange}
                    className={styles.textTerms}
                    style={{ fontFamily: `${font.fontTextTerms}` }}
                >
                    {intl.formatMessage({ id: 'AccountActivity.terms-conditions1' })} <a className={styles.termsLikn} href="#">{intl.formatMessage({ id: 'AccountActivity.terms-conditions2' })}</a>
                </Checkbox>
                <br />
                <Button
                    type="primary"
                    size='large'
                    shape="round"
                    disabled={valDisBut}
                    className={styles.btnContinue}
                    onClick={onValidateFlow} block>
                    {intl.formatMessage({ id: 'AccountActivity.continue_button' })}
                </Button>
            </div>
        </div>
    )
}
