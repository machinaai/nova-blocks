import React, { useEffect } from 'react';
import { connect, useDispatch } from 'umi';
import { StateModelCustomers } from './models/model';
import { TableContainer } from './components/tableContainer';
import { ExtraCont } from './interfaces/ProblockProps.interface';
import { useHistory } from 'react-router';
import { getCleanData } from './helpers/getCleanData';
import { dataFixture } from './fixture/dataFixture';

interface ActiveCustomerProps {
  routePath?: StateModelCustomers['routePath']
  activeCustomer?: StateModelCustomers['activeCustomer'];
  status?: StateModelCustomers['error'];
}

const ActiveCustomer: React.FC<ActiveCustomerProps> = ({
  routePath,
  activeCustomer,
  status }) => {
  const dispatch = useDispatch();
  const router = useHistory();

  const getActiveCustomers = () => {
    dispatch({
      type: 'activeCustomer/getActiveCustomers',
    });
  };

  useEffect(() => {
    getActiveCustomers();
  }, []);

  const setValField = (val: any) => {
    const { idAccount } = val;    
    dispatch({
      type: 'activeCustomer/setIdAccount',
      payload: idAccount
    });
    router.push(`${routePath}?id=${idAccount}`);
  }

  const propsComponent = {
    dataTable: getCleanData(activeCustomer),
    action: setValField,
  }

  return (
    <>
      <TableContainer {...propsComponent} />
    </>
  );
};

export default connect(({ activeCustomer }: { activeCustomer: StateModelCustomers }) => ({
  activeCustomer: activeCustomer.activeCustomer,
  status: activeCustomer.error,
  routePath: activeCustomer.routePath,
}))(ActiveCustomer);
