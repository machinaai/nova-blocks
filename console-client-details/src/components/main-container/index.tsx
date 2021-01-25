import { Button, Col, DatePicker, Input, Row, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useIntl } from 'umi';
import moment from 'moment';
import { disableCopyPaste, getCleanDocuments, onlyLetters, onlyLettersAndNumbers, onlyNumbers, setAudioVideo, transformDataImage } from '../../helpers/getCleanData'
import FormBlock from '../../blocks/form-block';
import StepsStatusBlock from '../../blocks/stepsStatus/src/index';
import UploadBlock from '../../blocks/uploadBlock';
import AudioBlock from '../../blocks/audioBlock';
import CustomerVideoComponent from '../customer-video';
import { PropsUpload } from '../../interfaces/uploadInterface.interface';
import { PropsAudio } from '../../interfaces/audioInterface';
import imgDoc from '../../fixture/ico-ineife.svg';
import styles from './index.less';
import { useWindowSize } from '../../hooks/useWindowSize';


interface Props {
    dataDetails?: any,
    setDataForm?: Function | any,
    pathBtnReturn?: string,
    fontFam?: String
}
// setValBirthday,
export const DetailsContainer: React.FC<Props> = ({ dataDetails, setDataForm, pathBtnReturn, fontFam }) => {
    const intl = useIntl();
    const size = useWindowSize();
    const [form] = Form.useForm();
    let content;

    const regExp = /^(?:0?[1-9]|1[1-2])([\-/.])(3[01]|[12][0-9]|0?[1-9])\1\d{4}$/;
    const dateFormat = 'DD/MM/YYYY';
    const stepsDetails = dataDetails?.stepsComplete;

    const [curp, setCurp] = useState('');
    const [ine, setIne] = useState('');
    const [birthDate, setBirthDate] = useState('01/01/1990');
    const [birt, setBirt] = useState(regExp.test(birthDate) ? moment(birthDate, 'DD/MM/YYYY') : undefined);

    useEffect(() => {
        setBirthDate(moment(dataDetails?.birthDate).format(dateFormat));
    }, [dataDetails?.birthDate]);

    useEffect(() => {
        setCurp(dataDetails?.curp,);
        setIne(dataDetails?.identificationNumber);        
    }, [dataDetails]);

    useEffect(()=>{
        setBirt(regExp.test(birthDate) ? moment(birthDate, 'DD/MM/YYYY') : undefined)
    },[birthDate]);

    /**
     * Values to set in the form about the data received.
     */
    const setDataFixture = {
        username: dataDetails?.userName,
        lastname: dataDetails?.userLastName,
        mothername: dataDetails?.mLastName,
        gender: dataDetails?.gender,
        nacionality: 'Mexicana',
        curp,
        ine,
        street: dataDetails?.street,
        numberstreet: dataDetails?.externalNumber,
        suburb: dataDetails?.nieghborhood,
        townhall: dataDetails?.municipaly,
        cp: dataDetails?.postalCode,
        city: dataDetails?.state,
        birthday: birt
    }
    const { imagesDocs, videoDocs, audioDocs } = getCleanDocuments(dataDetails?.documents);
    /**
     * Function to change the curp value to upper case.
     * @param e event with curp value
     */
    const changeCapitalCurp = (e: any) => setCurp(e.target.value.toUpperCase());

    /**
     * Function to change the ine value to upper case.
     * @param e event with ine value
     */
    const changeCapitalIne = (e: any) => setIne(e.target.value.toUpperCase());

    /**
     * Function to get form values.
     */
    const getDataForm = () => {
        setDataForm(form.getFieldsValue());
    }

    /**
 * Function to set data in the form.
 */
    const setDataInForm = () => {
        form.setFieldsValue(setDataFixture)
    }

    useEffect(() => {
        setDataInForm();
    }, [setDataFixture]);

    const handlePickerChange = (e: any) => {
        setBirt(e);
    }

    /**
     * Definition of fields for the form.
     */
    const dataForm = {
        section1: {
            titleSection: `${intl.formatMessage({ id: 'clientDetails.Form-title-sec1' })}`,
            fields: {
                col1: [
                    {
                        inputName: 'username',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field1' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field1' })}:`}
                            maxLength={100}
                            onKeyPress={onlyLetters}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                        />
                    },
                    {
                        inputName: 'lastname',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field2' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field2' })}:`}
                            maxLength={100}
                            onKeyPress={onlyLetters}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                        />
                    },
                    {
                        inputName: 'mothername',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field3' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field3' })}:`}
                            maxLength={100}
                            onKeyPress={onlyLetters}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                        />
                    },
                ],
                col2: [
                    {
                        inputName: 'gender',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field4' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field4' })}:`}
                            maxLength={100}
                            onKeyPress={onlyLetters}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                        />
                    },
                    {
                        inputName: 'birthday',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field5' })}:`,
                        element:
                            <>
                                <DatePicker
                                    format='DD/MM/YYYY'
                                    value={birt}
                                    onChange={handlePickerChange}
                                    defaultPickerValue={regExp.test(birthDate) ? birt : moment('01/01/1990', 'DD/MM/YYYY')}
                                    inputReadOnly
                                />
                            </>
                    },
                    {
                        inputName: 'nacionality',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field6' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field6' })}:`}
                            maxLength={100}
                            onKeyPress={onlyLetters}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                        />
                    },
                    {
                        inputName: 'curp',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field7' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field7' })}:`}
                            maxLength={100}
                            onChange={changeCapitalCurp}
                        />
                    },
                    {
                        inputName: 'ine',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field8' })} INE/IFE:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field8' })} INE/IFE:`}
                            maxLength={100}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                            onKeyPress={onlyLettersAndNumbers}
                            onChange={changeCapitalIne}
                        />
                    },
                ]
            }
        },
        section2: {
            titleSection: `${intl.formatMessage({ id: 'clientDetails.Form-title-sec2' })}`,
            fields: {
                col1: [
                    {
                        inputName: 'street',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field9' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field9' })}:`}
                            maxLength={100}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                            onKeyPress={onlyLettersAndNumbers}
                        />
                    },
                    {
                        inputName: 'numberstreet',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field10' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field10' })}:`}
                            maxLength={100}
                            onKeyPress={onlyNumbers}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                        />
                    },
                    {
                        inputName: 'suburb',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field11' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field11' })}:`}
                            maxLength={100}
                            onKeyPress={onlyLettersAndNumbers}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                        />
                    },
                    {
                        inputName: 'townhall',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field12' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field12' })}:`}
                            maxLength={100}
                            onKeyPress={onlyLetters}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                        />
                    },
                ],
                col2: [
                    {
                        inputName: 'cp',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field13' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field13' })}:`}
                            maxLength={100}
                            onKeyPress={onlyNumbers}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                        />
                    },
                    {
                        inputName: 'city',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field14' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field14' })}:`}
                            maxLength={100}
                            onKeyPress={onlyLetters}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                        />
                    },
                ]
            }
        }

    }

    /**
     * Props for StepsStatusBlock
     */
    const propsStep = {
        dataDocDetail: [
            {
                step: 'INE/IFE',
                complete: stepsDetails?.ine,
                iconIncomplete: imgDoc
            },
            {
                step: 'Val. ID',
                complete: stepsDetails?.valId,
                iconIncomplete: imgDoc
            },
            {
                step: 'OTP',
                complete: stepsDetails?.otp,
                iconIncomplete: imgDoc
            },
            {
                step: `${intl.formatMessage({ id: 'clientDetails.firm' })}`,
                complete: stepsDetails?.firma,
                iconIncomplete: imgDoc
            },
            {
                step: 'Benef.',
                complete: stepsDetails?.bebeficiary,
                iconIncomplete: imgDoc
            }
        ]
    }
    /**
     * Props for UploadBlock
     */
    const uploadProps: PropsUpload = {
        data: {
            previewVisible: false,
            previewImage: '',
            fileList: transformDataImage(imagesDocs)
        }
    }
    /**
     * Props for AudioBlock
     */
    const audioProps: PropsAudio = {
        data: setAudioVideo(audioDocs)
    }
    /**
     * Props for CustomerVideoComponent
     */
    const customerVideo = {
        videoDocs,
        nameCustomer: dataDetails?.userName !== undefined ? `${dataDetails?.userName} ${dataDetails?.userLastName} ${dataDetails?.mLastName}` : '',
        fontFam
    }
    /**
     * Props for FormBlock
     */
    const propsForm = {
        fieldsData: dataForm,
        onSave: form
    }

    if (size.width <= 5000 && size.width > 721) {
        content = <Row>
            <Col span={24}>
                <Row>
                    <Col xs={24} md={15} xl={15} className={styles.container}>
                        <CustomerVideoComponent {...customerVideo} />
                        <FormBlock {...propsForm} />
                    </Col>
                    <Col xs={24} md={8} xl={8}>
                        <div className={styles.stepsCont}>
                            <StepsStatusBlock {...propsStep} />
                        </div>
                        {imagesDocs.length !== 0 && <UploadBlock {...uploadProps} />}
                        <AudioBlock {...audioProps} />
                        <Button type='primary' size='large' style={{ width: '100%' }} htmlType='submit' onClick={getDataForm} >{intl.formatMessage({ id: 'clientDetails.Form-btn' })}</Button>
                        <Button href={`${pathBtnReturn}`} size='large' type="link" block >{intl.formatMessage({ id: 'clientDetails.Form-btn-return' })}</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    } else {
        content = <Row>
            <Col span={24}>
                <Row>
                    <Col xs={24} md={15} xl={15} className={styles.container}>
                        <CustomerVideoComponent {...customerVideo} />
                    </Col>
                    <Col xs={24} md={8} xl={8}>
                        <div className={styles.stepsCont}>
                            <StepsStatusBlock {...propsStep} />
                        </div>
                        {imagesDocs.length !== 0 && <UploadBlock {...uploadProps} />}
                        <AudioBlock {...audioProps} />
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row>
                    <Col xs={24} xl={15} className={styles.container}>
                        <FormBlock {...propsForm} />
                    </Col>
                    <Col xs={24} xl={8}>
                        <Button type='primary' size='large' style={{ width: '100%' }} htmlType='submit' onClick={getDataForm} >{intl.formatMessage({ id: 'clientDetails.Form-btn' })}</Button>
                        <Button href={`${pathBtnReturn}`} size='large' type="link" block >{intl.formatMessage({ id: 'clientDetails.Form-btn-return' })}</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    }
    return (
        <> {content}</>
    )
}

