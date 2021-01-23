import React, { useEffect } from 'react';
import { connect, useDispatch } from 'umi';
import { StateModel } from './models/model';
import { TableContainer } from './components/tableContainer';
import { ExtraCont } from './interfaces/ProblockProps.interface';
import { useHistory } from 'react-router';

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  valInputSearch?: string,
  valueFilter?: string,
  extraCont?:ExtraCont,
  
  routePath?:StateModel['routePath']
  dataTable?: StateModel['dataTable'];
  idRequest?: StateModel['idRequest'];
  status?: StateModel['error'];
}

const ConsoleRealTimeTable: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({
  valInputSearch = '',
  valueFilter = 'all',
  routePath,
  extraCont={
    fontText:'Signika-Medium',
    color:'#0071ce'
  },
  dataTable,
  status }) => {
  const dispatch = useDispatch();
  const router = useHistory();

  const getActiveCustomers = () => {
    dispatch({
      type: 'Real_Time_Table/getDataTables',
    });
  };

  useEffect(() => {
    getActiveCustomers();
  }, []);

  const setValField = (val: any) => {
    const { idRequest } = val;
    dispatch({
      type: 'Real_Time_Table/setIdRequestClient',
      payload:idRequest
    });
    router.push(`${routePath}?id=${idRequest}`);
  }

  const propsComponent = {
    dataTable:status === undefined ? dataTable : [],
    valueFilter,
    valInputSearch,
    action: setValField,
    extraCont
  }

  return (
    <>
      <TableContainer {...propsComponent} />
    </>
  );
};

export default connect(({ Real_Time_Table }: { Real_Time_Table: StateModel }) => ({
  dataTable: Real_Time_Table.dataTable,
  idRequest: Real_Time_Table.idRequest,
  status: Real_Time_Table.error,
  routePath:Real_Time_Table.routePath
}))(ConsoleRealTimeTable);
