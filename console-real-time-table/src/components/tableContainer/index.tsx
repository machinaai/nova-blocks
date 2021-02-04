import React from 'react';
import { useIntl } from 'umi';
import { BellFilled, CheckCircleFilled, CloseCircleFilled, VideoCameraFilled } from '@ant-design/icons';
import CollapseTableBlock from '../../blocks/collapse-table-block/src/index';
import DataTableBlock from '../../blocks/table-data/src';
import { filterDataByRadioBtn, filterEntry, getCleanData } from '../../helpers/getCleanData';
import { PropsComponent } from '../../interfaces/ProblockProps.interface';
import styles from './index.less';


export const TableContainer: React.FC<PropsComponent> = ({ dataTable, valueFilter, valInputSearch='',action,extraCont}) => {
    const intl = useIntl();
    let divContent;

    const checkCircleIcon = <CheckCircleFilled style={{ fontSize: '24px', color: '#4caf50' }} />
    const closeCircleIcon = <CloseCircleFilled style={{ fontSize: '24px', color: '#faa064' }} />

    const columnsTable = [
        {
            title: intl.formatMessage({ id: 'realTimeTable.Table-col1' }),
            dataIndex: 'idRequest',
            key: 'idRequest',
        },
        {
            title: intl.formatMessage({ id: 'realTimeTable.Table-col2' }),
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: intl.formatMessage({ id: 'realTimeTable.Table-col3' }),
            dataIndex: 'origin',
            key: 'origin',
        },
        {
            title: 'INE/IFE',
            dataIndex: 'statusIne',
            key: 'statusIne',
            className: `${styles.statusBorder}`,
            render: (status: any) => {
                if (status) {
                    return checkCircleIcon;
                } else {
                    return closeCircleIcon;
                }
            },
        },
        {
            title: 'Val. ID',
            dataIndex: 'statusVal',
            key: 'statusVal',
            className: `${styles.statusBorder}`,
            render: (status: any) => {
                if (status) {
                    return checkCircleIcon;
                } else {
                    return closeCircleIcon;
                }
            },
        },
        {
            title: 'OTP',
            dataIndex: 'statusOtp',
            key: 'statusOtp',
            className: `${styles.statusBorder}`,
            render: (status: any) => {
                if (status) {
                    return checkCircleIcon;
                } else {
                    return closeCircleIcon;
                }
            },
        },
        {
            title: intl.formatMessage({ id: 'realTimeTable.Table-col7' }),
            dataIndex: 'statusSign',
            key: 'statusSign',
            className: `${styles.statusBorder}`,
            render: (status: any) => {
                if (status) {
                    return checkCircleIcon;
                } else {
                    return closeCircleIcon;
                }
            },
        },
        {
            title: intl.formatMessage({ id: 'realTimeTable.Table-col8' }),
            dataIndex: 'statusBen',
            key: 'statusBen',
            className: `${styles.statusBorder}`,
            render: (status: any) => {
                if (status) {
                    return checkCircleIcon;
                } else {
                    return closeCircleIcon;
                }
            },
        },
        {
            title: intl.formatMessage({ id: 'realTimeTable.Table-col9' }),
            dataIndex: 'action',
            key: 'action',
            render: (text: any) => {
                if (text) {
                    return (
                        <>
                            <VideoCameraFilled />
                            <a style={{color:`${extraCont?.color}`}}>{text}</a>
                        </>
                    );
                } else {
                    return <a style={{color:`${extraCont?.color}`}}>{text}</a>;
                }
            },
        },]

    const getPropsTableTitle = (valFilter: string, valTitle: string) => {
        const newFilter = getCleanData(filterDataByRadioBtn(dataTable, valFilter))
        
        return {
            columns: columnsTable,
            dataTable: valInputSearch?.length >= 1 ? filterEntry(valInputSearch, newFilter) : newFilter,
            titleTable: intl.formatMessage({ id: valTitle }),
            action
        }
    }

    const getPropsTable = (valFilter: string) => {
        return {
            columns: columnsTable,
            dataTable: getCleanData(filterDataByRadioBtn(dataTable, valFilter)),
            action
        }
    }

    if (valueFilter === 'documentation') {
        const propsTableDoc = getPropsTableTitle('PENDING_DOCUMENTS', 'realTimeTable.Title-Rb-2');
        divContent = <>
            <DataTableBlock {...propsTableDoc}/>
        </>
    } else if (valueFilter === 'validation') {
        const propsTableVal = getPropsTableTitle('PENDING_VALIDATION', 'realTimeTable.Title-Rb-3');
        divContent = <>
            <DataTableBlock {...propsTableVal}/>
        </>
    } else if (valueFilter === 'benefit') {
        const propsTableBen = getPropsTableTitle('PENDING_BENEFICIARY', 'realTimeTable.Title-Rb-4');
        divContent = <>
            <DataTableBlock {...propsTableBen}/>
        </>

    } else {
        const propsDoc = getPropsTable('PENDING_DOCUMENTS');
        const propsVal = getPropsTable('PENDING_VALIDATION');
        const propsBenefit = getPropsTable('PENDING_BENEFICIARY');
        const propsCloseData = getPropsTable('LEADS_NEXT_CLOSE_REQUEST');

        const extraContent = <div className={styles.extraCont}>
            <BellFilled
                onClick={(event) => {
                    event.stopPropagation();
                }}
                style={{color:`${extraCont?.color}`}}
            />
            <p style={{color:`${extraCont?.color}`,fontFamily:`${extraCont?.fontText}`}}>{intl.formatMessage({ id: 'realTimeTable.title-extra-content1' })}</p>
        </div>
        const propsCollapsedBlock = {
            data: [
                {
                    key: '1',
                    title: intl.formatMessage({ id: 'realTimeTable.Title-Rb-2' }),
                    content: <DataTableBlock {...propsDoc} />,
                    extraContent
                },
                {
                    key: '2',
                    title: intl.formatMessage({ id: 'realTimeTable.Title-Rb-3' }),
                    content: <DataTableBlock {...propsVal} />,
                    extraContent
                },
                {
                    key: '3',
                    title: intl.formatMessage({ id: 'realTimeTable.Title-Rb-4' }),
                    content: <DataTableBlock {...propsBenefit} />,
                    extraContent
                },
                {
                    key: '4',
                    title: intl.formatMessage({ id: 'realTimeTable.Title-close-request' }),
                    content: <DataTableBlock {...propsCloseData} />,
                    extraContent: <div className={styles.extraCont}>
                        <BellFilled
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                            style={{color:`${extraCont?.color}`}}
                        />
                        <p style={{color:`${extraCont?.color}`,fontFamily:`${extraCont?.fontText}`}}>{intl.formatMessage({ id: 'realTimeTable.title-extra-content2' })}</p>
                    </div>
                },
            ]
        }
        const propsTable = getPropsTableTitle('REAL_TIME', 'realTimeTable.Title-Rb-1');
        divContent = <>
            <div className={styles.tableBlock}>
                <DataTableBlock {...propsTable} />
            </div>
            <div>
                <CollapseTableBlock {...propsCollapsedBlock} />
            </div>
        </>
    }

    return (
        <>
            {divContent}
        </>
    )
}

