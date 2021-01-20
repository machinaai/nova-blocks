import React, { useEffect } from "react";
import { connect, useDispatch } from 'umi';
import { Fonts, Icons, PropsComponent } from './interfaces/ProblockProps.interface';
import { StateModel } from './models/model';
import { RequestContainer } from './components/request-container/request-container/index';
import { dataFixture } from './fixture/data.fixture';

interface TotalRequestProps {
  fontFam?: Fonts,
  icons?: Icons,
  actionOpInfo?: Function,

  totalReq: StateModel['totalReq'],
  dateRequest: StateModel['dateRequest'],
  error: StateModel['error'];
}
const TotalRequest: React.FC<TotalRequestProps> = (props) => {
  const {
    fontFam = dataFixture.font,
    icons = dataFixture.icons,
    actionOpInfo = dataFixture.actionInfo,
    totalReq,
    dateRequest,
    error
  } = props;
  const dispatch = useDispatch();

  const getTotalRequest = () => {
    dispatch({ type: 'totalRequestModel/getTotalRequest', payload: dateRequest });
  };

  useEffect(() => {
    getTotalRequest();
  }, [dateRequest]);

  const propsComponent: PropsComponent = {
    requestOptions: totalReq,
    fontFam,
    icons,
    actionOpInfo
  }

  return (
    <>
      <RequestContainer {...propsComponent} />
    </>
  );
};

export default connect(({ totalRequestModel }: { totalRequestModel: StateModel }) => ({
  totalReq: totalRequestModel.totalReq,
  dateRequest: totalRequestModel.dateRequest,
  error: totalRequestModel.error,
}))(TotalRequest);