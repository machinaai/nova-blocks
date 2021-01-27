import React, { useEffect } from "react";
import { connect, useDispatch, useIntl } from 'umi';
import { InfoCircleOutlined } from '@ant-design/icons';
import { StateModelDevices } from './models/model';
import { dataFixture } from './fixture/data.fixture';
import DataRequestBlock from './components/card-data-request';
import { PropsDataReq } from './interfaces/dataReq.interface';
import {ConsoleUsedDevicesProps} from  './interfaces/usedDevices.interface';
import { useFixture } from './hooks/useFixture';

const ConsoleUsedDevices: React.FC<ConsoleUsedDevicesProps> = ({
    fontFam = dataFixture.font,
    legends,
    enviromentEndPoints = dataFixture.enviromentEndPoints,
    actionOpInfo = dataFixture.actionInfo,
    usedDevices,
    dateRequest,
    imageCard = dataFixture.imageCard,
    percentage,
    error
}) => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const intlHook = useFixture();
  let informationObjet;

  if(!legends) {
    informationObjet = intlHook;
  } else  {
    informationObjet = legends;
  }

  const getTotalRequest = () => {
    dispatch({ type: 'usedDevices/getUsedDevices', payload:{ data: dateRequest, endPoint : enviromentEndPoints  }});
  };

  useEffect(() => {
    getTotalRequest();
  }, [dateRequest]);

  let objectValues =  usedDevices ? Object.values(usedDevices) : [];
  
  const dataReq: PropsDataReq = {
    titles: informationObjet,
    imageCard,
    fontFam,
    percentage,
    optionInfo: {
      tooltipTitle: intl.formatMessage({ id: 'usedDevices.titleTooltip' }),
      icon: <InfoCircleOutlined style={{ fontSize: '16px' }} />,
      action: actionOpInfo
    },
    options: [
      {
        valOp: objectValues ? objectValues[0] : 0,
        nameOp: informationObjet.label1,
      },
      {
        valOp: objectValues ? objectValues[1] : 0,
        nameOp: informationObjet.label2,
      }
    ]
  }

  return (
    <>
      <DataRequestBlock {...dataReq} />
    </>
  );
};

export default connect(({ usedDevices }: { usedDevices: StateModelDevices }) => ({
  usedDevices: usedDevices.usedDevices,
  dateRequest: usedDevices.dateRequest,
  error: usedDevices.error,
}))(ConsoleUsedDevices);
