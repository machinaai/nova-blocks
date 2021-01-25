import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch} from 'umi';
import { DetailsContainer } from './components/main-container';
import { StateModelClient } from './models/model';

interface ConsoleClientDetailsProps {
  pathBtnReturn?: string,
  fontFam?: string,

  idRequest?: StateModelClient['idRequest'];
  clientDetail?: StateModelClient['clientDetail'];
  status?: StateModelClient['error'];
}

const ConsoleClientDetails: React.FC<ConsoleClientDetailsProps> = (props) => {
  const {
    idRequest,
    clientDetail,
    pathBtnReturn,
    fontFam = 'Signika-Regular_Regular',
    status } = props
  const dispatch = useDispatch();
  const [dataForm, setDataForm] = useState({
    username: '',
    lastname: '',
    mothername: '',
    gender: '',
    nacionality: '',
    curp: '',
    ine: '',
    street: '',
    numberstreet: '',
    suburb: '',
    townhall: '',
    cp: '',
    city: '',
    birthday: '',
  });

  const getClientDetail = () => {
    dispatch({
      type: 'clientDetails/getClientInformation',
      payload: idRequest
    });
  };

  useEffect(() => {
    return () => {
      dispatch({
        type: 'clientDetails/setClientInformation',
        payload: null
      });
    }
  }, []);

  useEffect(() => {
    getClientDetail();
  }, [idRequest]);

   useEffect(() => {    
    dataForm.birthday = moment(dataForm.birthday).format('DD/MM/YYYY'); 
    dispatch({
      type: 'clientDetails/setDataForm',
      payload: dataForm
    });
  }, [dataForm]);
  
  const propsComponent = {
    dataDetails: { ...clientDetail },
    setDataForm,
    pathBtnReturn,
    fontFam
  }

  return (
    <>
      <DetailsContainer {...propsComponent} />
    </>
  );
};

export default connect(({ clientDetails }: { clientDetails: StateModelClient }) => ({
  clientDetail: clientDetails.clientDetail,
  idRequest: clientDetails.idRequest,
  status: clientDetails.error,
}))(ConsoleClientDetails);
