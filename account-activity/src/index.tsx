import React, { useEffect, useState } from 'react';
import { useDispatch, connect, useIntl } from 'umi';
import OptionsBlock from './blocks/modal-drawer-options/index';
import { AccountActivity } from './components/accoun-acctivity';
import { StepEnum } from './enums/step.enum';
import { dataFixture, dataFontFixture } from './fixture/dataFixture';
import { Fonts, PropsCheck } from './interfaces/checkOptions.interface';
import { ElementProps } from './interfaces/modal.interface';
import { StateModel } from './models/model';
import styles from './index.less';

interface AccountActivityProps {
    imgOptions?: string[];
    fontFamily?: Fonts;
    colorProblock?:string;

    numberPhone?: StateModel['numberPhone'];
    details: StateModel['details'];
    flowComplete: StateModel['flowComplete'];
    onComplete?: Function;
    onReturn?: Function;
    setDetail: Function;
}
const AccountActivityBlock: React.FC<AccountActivityProps> = (
    {
        imgOptions = dataFixture,
        fontFamily = dataFontFixture,
        colorProblock = '#0071ce',
        numberPhone = '55 2039 3401',
        flowComplete,
        onComplete,
        onReturn,
        setDetail
    }) => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const [onClose, setOnClose] = useState(false);
    const [flow, setFlow] = useState('');

    /**
     * Method to get the value of the selected flow and save the value in a reducer.
     * @param stepVal about the selected flow
     */
    const setStep = (stepVal: any) => {
        dispatch({
            type: "Account_Activity/setDetails",
            payload: {
                flow,
                step: stepVal,
                numberPhone
            },
        });
            dispatch({
                type: "Account_Activity/setFlowStatus",
                payload: true
            })

            setDetail({
                flow,
                step: stepVal,
                numberPhone
            });            
    }

    /**
     * Methos that change the value when detecting the closure of the modal or drawer.
     */
    const setVal = () => {
        setOnClose(false)
    }

    /**
     * Props for the account activity component
     */
    const optionsCheck: PropsCheck = {
        optionsCheck: [`${intl.formatMessage({ id: 'AccountActivity.optionCheck1' })} $18,000`, `${intl.formatMessage({ id: 'AccountActivity.optionCheck2' })} $18,000`],
        setFlow,
        fontFamily: {
            fontTitle: dataFontFixture.fontTitle,
            fontSubtitle: dataFontFixture.fontSubtitle,
            fontTextTerms: dataFontFixture.fontTextTerms
        },
        setOnClose,
        setShowModal,
        setShowDrawer
    }
    /**
     * Method to change the value to show the modal or drawer
     */
    const validateElement = () => {
        setShowModal(true);
        setShowDrawer(true);
    }

    useEffect(() => {
        if (flow === 'n2') {
            validateElement()
        } else if (flow === 'n4') {
            dispatch({
                type: "Account_Activity/setDetails",
                payload: {
                    flow,
                    step: StepEnum.verificarIdentidad,
                    numberPhone
                },
            });
            dispatch({
                type: "Account_Activity/setFlowStatus",
                payload: true
            });
        }
    }, [onClose, flow]);

    /**
     * useEffect to change the value when the flow is over.
     */
    useEffect(() => {
        if (flowComplete && onComplete) {
            onComplete(true)
        }
        if (!flowComplete && onReturn) {
            onReturn(true)
        }
        return () => {
            dispatch({
                type: "Account_Activity/setFlowStatus",
                payload: false
            })

        }
    }, [flowComplete]);

    const options = {
        title: `${intl.formatMessage({ id: 'AccountActivity.modalTitle' })}`,
        subtitle: `${intl.formatMessage({ id: 'AccountActivity.modalSubtitle' })}`,
        options: [
            {
                icon: imgOptions[0],
                valOption: `${intl.formatMessage({ id: 'AccountActivity.modalOption1' })}`,
                action: () => { setStep(StepEnum.scanDoc) },
                color:colorProblock
            },
            {
                icon: imgOptions[1],
                valOption: `${intl.formatMessage({ id: 'AccountActivity.modalOption2' })}`,
                action: () => { setStep(StepEnum.uploadDoc) },
                color:colorProblock
            },
            {
                icon: imgOptions[2],
                valOption: `${intl.formatMessage({ id: 'AccountActivity.modalOption3' })}`,
                action: () => { setStep(StepEnum.loadData) },
                color:colorProblock
            },
        ]
    }

    /**
     * Props for the OptionsBlock 
     */
    const optionsElement: ElementProps = {
        ...options,
        backColorOp :'#e1ffff',
        fontFamily,
        onlyModal: showModal,
        onlyDrawer: showDrawer,
        onClose: setVal
    }

    return (
        <div className={styles.container}>
            <AccountActivity {...optionsCheck} />
            <OptionsBlock {...optionsElement} />
        </div>
    )
}
export default connect(({ Account_Activity }: { Account_Activity: StateModel }) => ({
    details: Account_Activity.details,
    numberPhone: Account_Activity.numberPhone,
    flowComplete: Account_Activity.flowComplete,
}))(AccountActivityBlock);
