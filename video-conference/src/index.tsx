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

type VideoConferenceProps = {
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
const VideoConference: React.FC<VideoConferenceProps> = ({
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
          type: 'videoConference/setStreams',
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

export default connect(({ videoConference }: { videoConference: StateModel }) => ({
  streams: videoConference.streams,
  current: videoConference.currentStage,
  otpUser: videoConference.otpUser,
  dataUser: videoConference.dataUser,
}))(VideoConference);
