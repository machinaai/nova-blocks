import React, { useEffect, useState } from "react";
import { useDispatch, useIntl } from "umi";
import OptionsBlock from "../../blocks/m-d-block-options";
import { ChooseFlow } from "./components/choose-flow";
import ValidateAddress from "../validate-address";
import { StepEnum } from "./enums/step.enum";
import { dataFixture, dataFontFixture } from "./fixture/dataFixture";
import { Fonts, PropsAccount } from "./interfaces/optionsAccount.interface";
import { ElementProps } from "./interfaces/modal.interface";
import styles from "./index.less";

/**
 * UpdateAddressProps interface
 *
 * @interface UpdateAddressProps
 * 
 */
interface UpdateAddressProps {
    imgOptions?: string[];
    fontFamily?: Fonts;
    colorProblock?: string;
    phoneNumber?: any;
    updateAddressState?: boolean;
    onComplete?: Function;
    onReturn?: Function;
    onSetTypeFlow?: Function;
    onStepsViews?: any;
}
/**
 * Component update address
 *
 * @param {*} {
 *     imgOptions = dataFixture,
 *     fontFamily = dataFontFixture,
 *     colorProblock = "#0071ce",
 *     updateAddressState,
 *     onComplete,
 *     onReturn,
 *     onSetTypeFlow,
 *     onStepsViews,
 *     phoneNumber,
 * }
 * @return {*} 
 */
const UpdateAddress: React.FC<UpdateAddressProps> = ({
    imgOptions = dataFixture,
    fontFamily = dataFontFixture,
    colorProblock = "#0071ce",
    updateAddressState,
    onComplete,
    onReturn,
    onSetTypeFlow,
    onStepsViews,
    phoneNumber,
}) => {
    const intl = useIntl();
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    const [typeFlow, setTypeFlow] = useState(StepEnum.later);

    const [subFlowsState, setSubFlowState] = useState(false);

    const [address, setAddress] = useState('');

    const setVal = () => {
        setShowModal(false);
        setShowDrawer(false);
    };

    useEffect(() => {
        if (onSetTypeFlow) {
            onSetTypeFlow(typeFlow);
        }
    }, [typeFlow]);

    const finishSubFlow = (e: boolean) => {
        if (e) {
            setSubFlowState(e);
        }
    };

    const updateAdressFlow = (type: StepEnum | undefined) => {
        switch (type) {
            case StepEnum.scanDoc:
                return React.createElement(onStepsViews.N4Video, {
                    onComplete: finishSubFlow,
                    onSetUserData: setAddress
                });

            case StepEnum.uploadDoc:
                return React.createElement(onStepsViews.N2Upload, {
                    onComplete: finishSubFlow,
                    typeFlowProp: 1,
                    onSetUserData: setAddress,
                    phoneNumber,
                });
            default:
                return <p>Component don't exist </p>;
        }
    };

    const optionsAccountAct: PropsAccount = {
        fontFamily: {
            fontHeader: dataFontFixture.fontHeader,
            fontTitle: dataFontFixture.fontTitle,
            fontSubtitle: dataFontFixture.fontSubtitle,
            fontBody: dataFontFixture.fontBody,
            fontB_ul: dataFontFixture.fontB_ul,
            fontFooter: dataFontFixture.fontFooter,
        },
        colorBtn: colorProblock,
        actionBtn: () => {
            setTypeFlow(StepEnum.later);
        },
        setShowModal,
        setShowDrawer,
    };

    useEffect(() => {
        if (updateAddressState && onComplete) {
            onComplete(true);
        }
        if (!updateAddressState && onReturn) {
            onReturn(true);
        }
        return () => {
            dispatch({
                type: "raoUpdateAddress/setFlowStatus",
                payload: false,
            });
        };
    }, [updateAddressState]);

    const options = {
        title: `${intl.formatMessage({
            id: "identityVerification.update-address.modalTitle",
        })}`,
        subtitle: `${intl.formatMessage({
            id: "identityVerification.update-address.modalSubtitle",
        })}`,
        options: [
            {
                icon: imgOptions[0],
                valOption: `${intl.formatMessage({
                    id: "identityVerification.update-address.modalOption1",
                })}`,
                action: () => {
                    setTypeFlow(StepEnum.scanDoc);
                },
                color: colorProblock,
            },
            {
                icon: imgOptions[1],
                valOption: `${intl.formatMessage({
                    id: "identityVerification.update-address.modalOption2",
                })}`,
                action: () => {
                    setTypeFlow(StepEnum.uploadDoc);
                },
                color: colorProblock,
            },
        ],
    };

    const optionsElement: ElementProps = {
        ...options,
        fontFamily,
        onlyModal: showModal,
        onlyDrawer: showDrawer,
        onClose: setVal,
    };

    return (
        <>
            {subFlowsState ? (
                <ValidateAddress
                    address={address}
                    actionBtn={onComplete}
                />
            ) : (
                    <>
                        {typeFlow === StepEnum.later ? (
                            <>
                                <div className={styles.container}>
                                    <ChooseFlow {...optionsAccountAct} />
                                    <OptionsBlock {...optionsElement} />
                                </div>
                            </>
                        ) : (
                                updateAdressFlow(typeFlow)
                            )}
                    </>
                )}
        </>
    );
};
export default UpdateAddress;
