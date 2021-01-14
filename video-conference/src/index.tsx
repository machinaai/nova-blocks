/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'umi';

import IframeComm from 'react-iframe-comm';
import style from './style.less';
import type { StateModel } from './models/model';

// components
import IndicatorStage from './components/indicator-stage';


// flow fixture
import { StagesN4Video } from './flowsVideoConference/stages-conference.fixture';
import { StagesN2Video } from './flowsVideoConference/stage-N2.fixture';
import { StagesN2Scanner } from './flowsVideoConference/stage-scanner.fixture';

import { stageSelect } from './helpers/stage-selec.helper';
import { attributes } from './fixtures/conference-config.fixture';
import { StagesN4Enum } from './enums/stages.enum';

import { useWebSockets } from './hooks/useWebSockets';
import { FlowEnum } from './enums/flow.enum';

type PAGE_NAME_UPPER_CAMEL_CASEProps = {
  streams: StateModel['streams'];
  current: StateModel['currentStage'];
  otpUser: StateModel['otpUser'];
  onComplete?: Function;
  onSetUserData?: Function;
  dataUser: StateModel['dataUser'];
  phoneUser: any;
  typeFlow: FlowEnum;
}


/**
 * chooseFlow
 * 
 * return fixture for flow
 *
 * @param {FlowEnum} type
 * @return {object} 
 */
const chooseFlow = (type: FlowEnum) => {
  switch (type) {
    case FlowEnum.N2Video:
      return StagesN2Video;
    case FlowEnum.N2Scanner:
      return StagesN2Scanner;
    default:
      return StagesN4Video;
  }
};
/**
 * Video Conference
 *
 * @props {*} {
 *   streams,
 *   current,
 *   otpUser,
 *   onComplete,
 *   onSetUserData,
 *   phoneUser,
 *   typeFlow = FlowEnum.N4Video,
 * }
 * 
 */
const PAGE_NAME_UPPER_CAMEL_CASE: React.FC<PAGE_NAME_UPPER_CAMEL_CASEProps> = ({
  streams,
  current,
  otpUser,
  onComplete,
  onSetUserData,
  phoneUser,
  typeFlow = FlowEnum.N4Video,
}) => {
  const dispatch = useDispatch();

  const [flowStages] = useState(chooseFlow(typeFlow));

  
  const [connected, loading, statsService, successStage] = useWebSockets(
    flowStages,
    current,
    streams,
    onComplete,
    onSetUserData,
    );
    
    useEffect(() => {
      if (phoneUser) {
        dispatch({
          type: 'BLOCK_NAME_CAMEL_CASE/setStreams',
          payload: phoneUser,
        });
      }
  
    }, []);

  return (
    <div className={style.conference}>
      
        <IframeComm
          attributes={attributes}
          postMessageData="start conference"
          handleReady={connected}
          handleReceiveMessage={() => {}}
        />

      {loading && (
        <div className={style.visualIndicator}>
          <IndicatorStage
            stage={stageSelect(flowStages, current)}
            onSuccess={successStage}
            onInfoCognition={
              stageSelect(flowStages, current)?.name === StagesN4Enum.validateOtpUser
                ? otpUser
                : statsService
            }
          />
        </div>
      )}
    </div>
  );
};

export default connect(({ BLOCK_NAME_CAMEL_CASE }: { BLOCK_NAME_CAMEL_CASE: StateModel }) => ({
  streams: BLOCK_NAME_CAMEL_CASE.streams,
  current: BLOCK_NAME_CAMEL_CASE.currentStage,
  otpUser: BLOCK_NAME_CAMEL_CASE.otpUser,
  dataUser: BLOCK_NAME_CAMEL_CASE.dataUser,
}))(PAGE_NAME_UPPER_CAMEL_CASE);
