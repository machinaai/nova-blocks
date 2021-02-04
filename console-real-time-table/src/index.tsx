import React, { useEffect } from 'react';
import { connect, useDispatch } from 'umi';
import { StateModel } from './models/model';
import { TableContainer } from './components/tableContainer';
import { ExtraCont } from './interfaces/ProblockProps.interface';
import { useHistory } from 'react-router';

interface ConsoleRealTimeTableProps {
  valInputSearch?: string,
  valueFilter?: string,
  extraCont?:ExtraCont,
  
  routePath?:StateModel['routePath']
  dataTable?: StateModel['dataTable'];
  idRequest?: StateModel['idRequest'];
  status?: StateModel['error'];
}

const ConsoleRealTimeTable: React.FC<ConsoleRealTimeTableProps> = ({
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
      type: 'realTimeTable/getDataTables',
    });
  };

  useEffect(() => {
    getActiveCustomers();
  }, []);

  const setValField = (val: any) => {
    const { idRequest } = val;
    dispatch({
      type: 'realTimeTable/setIdRequestClient',
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

export default connect(({ realTimeTable }: { realTimeTable: StateModel }) => ({
  dataTable: realTimeTable.dataTable,
  idRequest: realTimeTable.idRequest,
  status: realTimeTable.error,
  routePath:realTimeTable.routePath
}))(ConsoleRealTimeTable);
