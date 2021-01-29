import React, { useEffect, useState } from 'react';
import { useDispatch, connect, useIntl } from 'umi';
import OptionsBlock from './blocks/m-d-block-options';
import UpdateAddressComponent from './components/update-address';
import { StepEnum } from './enums/step.enum';
import { dataFixture, dataFontFixture } from './fixture/dataFixture';
import { Fonts, PropsAccount } from './interfaces/optionsAccount.interface';
import { ElementProps } from './interfaces/modal.interface';
import { StateModel } from './models/model';
import styles from './index.less';

interface UpdateAddressProps {
    imgOptions?: string[];
    fontFamily?: Fonts;
    colorProblock?: string;

    step: StateModel['step'];
    flowComplete: StateModel['flowComplete'];
    onComplete?: Function;
    onReturn?: Function;
    onSetTypeFlow?: Function;
}
const UpdateAddress: React.FC<UpdateAddressProps> = (
    {
        imgOptions = dataFixture,
        fontFamily = dataFontFixture,
        colorProblock = '#0071ce',
        flowComplete,
        onComplete,
        onReturn,
        onSetTypeFlow,
        step
    }) => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const setVal = () => {
        setShowModal(false);
        setShowDrawer(false);
    }

    useEffect(() => {
        if (onSetTypeFlow ) {
            onSetTypeFlow(step);
        }
    }, [step])

    const setStep = (stepVal: any) => {
        dispatch({
            type: "updateAddress/setStep",
            payload: stepVal,
        });
            dispatch({
                type: "updateAddress/setFlowStatus",
                payload: stepVal !== 'capture_later'
            })
    }

    const optionsAccountAct: PropsAccount = {
        fontFamily: {
            fontHeader: dataFontFixture.fontHeader,
            fontTitle: dataFontFixture.fontTitle,
            fontSubtitle: dataFontFixture.fontSubtitle,
            fontBody: dataFontFixture.fontBody,
            fontB_ul: dataFontFixture.fontB_ul,
            fontFooter: dataFontFixture.fontFooter
        },
        colorBtn: colorProblock,
        actionBtn: () => { setStep('capture_later') },
        setShowModal,
        setShowDrawer,
    }

    useEffect(() => {
        if (flowComplete && onComplete) {
            onComplete(true)
        }
        if (!flowComplete && onReturn) {
            onReturn(true)
        }
        return () => {
            dispatch({
                type: "updateAddress/setFlowStatus",
                payload: false
            })

        }
    }, [flowComplete]);

    const options = {
        title: `${intl.formatMessage({ id: 'updateAddressLocale.modalTitle' })}`,
        subtitle: `${intl.formatMessage({ id: 'updateAddressLocale.modalSubtitle' })}`,
        options: [
            {
                icon: imgOptions[0],
                valOption: `${intl.formatMessage({ id: 'updateAddressLocale.modalOption1' })}`,
                action: () => { setStep(StepEnum.scanDoc) },
                color: colorProblock
            },
            {
                icon: imgOptions[1],
                valOption: `${intl.formatMessage({ id: 'updateAddressLocale.modalOption2' })}`,
                action: () => { setStep(StepEnum.uploadDoc) },
                color: colorProblock
            },
        ]
    }

    const optionsElement: ElementProps = {
        ...options,
        fontFamily,
        onlyModal: showModal,
        onlyDrawer: showDrawer,
        onClose: setVal
    }

    return (
        <div className={styles.container}>
            <UpdateAddressComponent {...optionsAccountAct} />
            <OptionsBlock {...optionsElement} />
        </div>
    )
}
export default connect(({ updateAddress }: { updateAddress: StateModel }) => ({
    step: updateAddress.step,
    flowComplete: updateAddress.flowComplete,
}))(UpdateAddress);
