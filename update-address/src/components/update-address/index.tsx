import React from 'react'
import { Button } from 'antd';
import { useIntl } from 'umi'
import styles from './index.less';
import { Fonts } from '@/interfaces/optionsAccount.interface';

interface Props {
    fontFamily: Fonts,
    colorBtn: string,
    actionBtn: Function | any
    setShowModal: Function,
    setShowDrawer: Function
}

const UpdateAddress: React.FC<Props> = ({
    fontFamily: font,
    colorBtn,
    actionBtn,
    setShowModal,
    setShowDrawer
}) => {
    const intl = useIntl();

    const onValidateFlow = () => {
        setShowModal(true);
        setShowDrawer(true);
    }
    const userAgent = navigator.userAgent || navigator.vendor;
    const blockVal = (/android/i.test(userAgent) || (/iPhone/.test(userAgent) && !window.MSStream)) ? true : false

    const options = [
        { option: `${intl.formatMessage({ id: 'updateAddressLocale.op1' })} (Telmex, Axtel, Izzi)` },
        { option: intl.formatMessage({ id: 'updateAddressLocale.op2' }) },
        { option: intl.formatMessage({ id: 'updateAddressLocale.op3' }) },
        { option: intl.formatMessage({ id: 'updateAddressLocale.op4' }) }
    ]
    return (
        <div className={styles.container}>
            <p className={styles.header} style={{ fontFamily: font.fontHeader }}>{intl.formatMessage({ id: 'updateAddressLocale.headerText' })}</p>
            <h2 className={styles.title} style={{ fontFamily: `${font.fontTitle}` }}>{intl.formatMessage({ id: 'updateAddressLocale.title' })}</h2>
            <p className={styles.subtitle} style={{ fontFamily: `${font.fontSubtitle}` }}>{intl.formatMessage({ id: 'updateAddressLocale.subtitle' })}</p>
            <div className={styles.body}>
                <p className={styles.title} style={{ fontFamily: font.fontBody }}>{intl.formatMessage({ id: 'updateAddressLocale.title_options' })}</p>
                <ul style={{ fontFamily: font.fontB_ul }}>
                    {options.map(op => (
                        <li key={op.option} >{op.option}</li>
                    ))}
                </ul>
                <p className={styles.subtitle} style={{ fontFamily: font.fontBody }}>{intl.formatMessage({ id: 'updateAddressLocale.subtitle_options' })}.</p>
                <Button
                    type="primary"
                    size='large'
                    shape="round"
                    className={styles.btnContinue}
                    onClick={onValidateFlow} block={blockVal}>
                    {intl.formatMessage({ id: 'updateAddressLocale.capture_button' })}
                </Button>
            </div>
            <div className={styles.footerContent}>
                <p className={styles.titleFooter} style={{ fontFamily: font.fontFooter }}>{intl.formatMessage({ id: 'updateAddressLocale.footerTitle' })}</p>
                <p className={styles.subtitle} style={{ fontFamily: font.fontFooter }}>{intl.formatMessage({ id: 'updateAddressLocale.footerSubtitle' })}.</p>
                <Button className={styles.buttons} type='text' size='large' style={{ color: colorBtn }} onClick={actionBtn} block={blockVal}>{intl.formatMessage({ id: 'updateAddressLocale.capture_laterBtn' })}</Button>
            </div>
        </div>
    )
}
export default UpdateAddress;
