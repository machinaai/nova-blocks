import React, { useState } from 'react';
import { useIntl } from 'umi';
import DataTableBlock from '../../blocks/table-data/src';
import { filterEntry } from '../../helpers/getCleanData';
import { PropsComponent } from '../../interfaces/ProblockProps.interface';
import styles from './index.less';
import InputSearchBlock from '../../blocks/input-search-block/src/index';


export const TableContainer: React.FC<PropsComponent> = ({ dataTable, action }) => {
    const intl = useIntl();
    const [valInput, setValInput] = useState('');

    const getValInput = (val: any) => {
        setValInput(val);
    }

    const columnsTable = [
        {
            title: intl.formatMessage({ id: 'tableContainer.Table-col1' }),
            dataIndex: 'idAccount',
            key: 'idAccount',
        },
        {
            title: intl.formatMessage({ id: 'tableContainer.Table-col2' }),
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: intl.formatMessage({ id: 'tableContainer.Table-col3' }),
            dataIndex: 'product',
            key: 'product',
        },
        {
            title: intl.formatMessage({ id: 'tableContainer.Table-col4' }),
            dataIndex: 'request',
            key: 'request',
        },
        {
            title: intl.formatMessage({ id: 'tableContainer.Table-col5' }),
            dataIndex: 'data',
            key: 'data',
            render: (text: any) => (
                <>
                    <a onClick={() => action} >{text}</a>
                </>
            ),
        },
    ];

    const propsTable = {
        columns: columnsTable,
        dataTable: valInput?.length >= 1 ? filterEntry(valInput, dataTable) : dataTable,
        action
    }
    const propsInputSearch = {
        placeholderVal: intl.formatMessage({ id: 'tableContainer.Search-title' }),
        actionInput: getValInput
    }
    
    return (
        <>
            <div className={styles.header}>
                <InputSearchBlock  {...propsInputSearch} />
            </div>
            <div>
                <DataTableBlock {...propsTable} />
            </div>
        </>
    )
}

