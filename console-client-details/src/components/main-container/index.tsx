import { Button, Col, DatePicker, Input, Row, Form, Skeleton } from 'antd';
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

    const [birt, setBirt] = useState<any>(undefined);
    const birthDate = moment(dataDetails?.birthDate).format(dateFormat);
    const [load, setLoad] = useState(false);

    /**
     * Values to set in the form about the data received.
     */
    useEffect(() => {
        form.setFieldsValue({
            username: dataDetails?.userName,
            lastname: dataDetails?.userLastName,
            mothername: dataDetails?.mLastName,
            gender: dataDetails?.gender,
            nacionality: 'Mexicana',
            curp: dataDetails?.curp,
            ine: dataDetails?.identificationNumber,
            street: dataDetails?.street,
            numberstreet: dataDetails?.externalNumber,
            suburb: dataDetails?.nieghborhood,
            townhall: dataDetails?.municipaly,
            cp: dataDetails?.postalCode,
            city: dataDetails?.state,
            birthday: moment(dataDetails.birthDate ? dataDetails.birthDate : '01/01/1990', dateFormat)
        })
        setBirt(moment(dataDetails.birthDate ? birthDate : '01/01/1990'));
    }, [dataDetails]);

    const { imagesDocs, videoDocs, audioDocs } = getCleanDocuments(dataDetails?.documents);

    /**
     * Function to get form values.
     */
    const getDataForm = () => {
        setDataForm({ ...form.getFieldsValue(), birthday: birt });
        setLoad(true);
    }

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
                            className={styles.inputCapitalize}
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
                            className={styles.inputCapitalize}
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
                            className={styles.inputCapitalize}
                        />
                    },
                    {
                        inputName: 'gender',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field4' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field4' })}:`}
                            maxLength={100}
                            onKeyPress={onlyLetters}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                            className={styles.inputCapitalize}
                        />
                    },
                ],
                col2: [
                    {
                        inputName: 'birthday',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field5' })}:`,
                        element:
                            <>
                                 <DatePicker
                                    format='DD/MM/YYYY'
                                    value={moment(dataDetails.birthDate ? birt : '01/01/1990', dateFormat)}
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
                            className={styles.inputCapitalize}
                        />
                    },
                    {
                        inputName: 'curp',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field7' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field7' })}:`}
                            maxLength={18}
                            className={styles.inputUpperCase}
                        />
                    },
                    {
                        inputName: 'ine',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field8' })} INE/IFE:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field8' })} INE/IFE:`}
                            maxLength={18}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                            onKeyPress={onlyLettersAndNumbers}
                            className={styles.inputUpperCase}
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
                            className={styles.inputCapitalize}
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
                            className={styles.inputCapitalize}
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
                            className={styles.inputCapitalize}
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
                            className={styles.inputCapitalize}
                        />
                    },
                ],
                col2: [
                    {
                        inputName: 'cp',
                        label: `${intl.formatMessage({ id: 'clientDetails.Form-field13' })}:`,
                        element: <Input
                            placeholder={`${intl.formatMessage({ id: 'clientDetails.Form-field13' })}:`}
                            maxLength={5}
                            onKeyPress={onlyNumbers}
                            onPaste={disableCopyPaste}
                            onCopy={disableCopyPaste}
                            className={styles.inputCapitalize}
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
                            className={styles.inputCapitalize}
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
            fileList: transformDataImage(imagesDocs),
        },
        heightContainer:350
    }
    /**
     * Props for AudioBlock
     */
    const audioProps: PropsAudio = {
        data: setAudioVideo(audioDocs),
        heightContainer:180
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
                        {
                            load ? <Skeleton /> : <FormBlock {...propsForm} />
                        }
                    </Col>
                    <Col xs={24} md={8} xl={8}>
                        <div className={styles.stepsCont}>
                            <StepsStatusBlock {...propsStep} />
                        </div>
                        {imagesDocs.length !== 0 && <UploadBlock {...uploadProps} />}
                        {audioDocs.length !== 0 ? <AudioBlock {...audioProps} /> : null }
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
                        {audioDocs.length !== 0 ? <AudioBlock {...audioProps} /> : null }
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <Row>
                    <Col xs={24} xl={15} className={styles.container}>
                    {
                            load ? <Skeleton /> : <FormBlock {...propsForm} />
                    }
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

