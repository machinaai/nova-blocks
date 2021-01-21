import React, { useEffect } from "react";
import { connect, useDispatch, useIntl } from 'umi';
import { InfoCircleOutlined } from '@ant-design/icons';
import { StateModelDevices } from './models/model';
import { dataFixture } from './fixture/data.fixture';
import DataRequestBlock from './components/card-data-request/src';
import { Fonts, PropsDataReq } from './interfaces/dataReq.interface';

interface ConsoleUsedDevicesProps {
  fontFam?: Fonts,
  imgTitle?: string | React.ReactNode,
  actionOpInfo?: Function,

  usedDevices: StateModelDevices['usedDevices'],
  dateRequest: StateModelDevices['dateRequest'],
  error: StateModelDevices['error'];
}
const ConsoleUsedDevices: React.FC<ConsoleUsedDevicesProps> = (props) => {
  const {
    fontFam = dataFixture.font,
    imgTitle = dataFixture.imgTitle,
    actionOpInfo = dataFixture.actionInfo,
    usedDevices,
    dateRequest,
    error
  } = props;
  const dispatch = useDispatch();
  const intl = useIntl();

  const getTotalRequest = () => {
    dispatch({ type: 'Used_Devices/getUsedDevices', payload: dateRequest });
  };

  useEffect(() => {
    getTotalRequest();
  }, [dateRequest]);

  const dataReq: PropsDataReq = {
    title: intl.formatMessage({ id: 'Used_Devices.usedDevices_title' }),
    fontFam,
    imgTitle,
    optionInfo: {
      tooltipTitle: intl.formatMessage({ id: 'Used_Devices.titleTooltip' }),
      icon: <InfoCircleOutlined style={{ fontSize: '16px' }} />,
      action: actionOpInfo
    },
    options: [
      {
        valOp: usedDevices?.android !== undefined ? usedDevices.android : 0,
        nameOp: `${intl.formatMessage({ id: 'Used_Devices.usedDevices_nameOp1' })}`,
      },
      {
        valOp: usedDevices?.ios !== undefined ? usedDevices.ios : 0,
        nameOp: `${intl.formatMessage({ id: 'Used_Devices.usedDevices_nameOp2' })}`,
      }
    ]
  }
  return (
    <>
      <DataRequestBlock {...dataReq} />
    </>
  );
};

export default connect(({ Used_Devices }: { Used_Devices: StateModelDevices }) => ({
  usedDevices: Used_Devices.usedDevices,
  dateRequest: Used_Devices.dateRequest,
  error: Used_Devices.error,
}))(ConsoleUsedDevices);