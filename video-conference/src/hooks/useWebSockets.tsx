/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import type { Client } from 'stompjs';

import { useDispatch } from 'umi';
import { Indicators } from '../enums/indicator-call.enum';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

// enviroments
import { env } from '../enviroments/enviroments.fixture';
import { senders } from '../enviroments/senders.fixture';
import { isMobile } from '../helpers/is-mobile.helper';
import { stageSelect } from '../helpers/stage-selec.helper';
import type { StageInterface } from '../interfaces/stage.interface';
import type { StreamInterface } from '../interfaces/stream.interface';

// helpers
import { switchCamera } from '../helpers/flip-camera';

let sockjs;
let stompClient: Client;

/**
 *
 * Custom hook for video conference with janus
 *
 * @param {StageInterface[]} stagesFlow
 * @param {number} current
 * @param {StreamInterface} [streams]
 * @param {Function} [onComplete]
 * @param {Function} [onSetUserData]
 * @return {*}  {([() => void, boolean, string | null, boolean])}
 */
export const useWebSockets = (
  stagesFlow: StageInterface[],
  current: number,
  streams?: StreamInterface,
  onComplete?: Function,
  onSetUserData?: Function,
): [() => void, boolean, string | null, boolean] => {
  const [statsService, setStatsService] = useState<string | null>(null);
  const [successStage, setSuccessStage] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [stateCamera, setStateCamera] = useState<boolean>(false);

  const dispatch = useDispatch();

  const bodySuscribe = (subscribeType: any) => {
    const body = JSON.parse(subscribeType.body);
    const { type, indicator } = body;
    if (
      indicator &&
      (indicator.type === 41 ||
        indicator.type === 42 ||
        indicator.type === 43 ||
        indicator.type === 44)
    ) {
      setStatsService(indicator.message);
    }
    if (subscribeType) {
      setLoading(true);
    }

    if (type === 'INDICATOR') {
      switch (indicator.type) {
        case Indicators.processingFrames:
          console.log('processingFrames');

          // mnadar mensajes ayuda visual
          break;
        case Indicators.finishProcess:
          console.log('finishProcess');
          setSuccessStage(true);
          dispatch({
            type: 'videoConference/changeStage',
          });

          break;
        case Indicators.endCognitiveProcess:
        case Indicators.fail:
          console.log('fail');
          break;

        default:
          console.log('error no esperado', body);
          break;
      }
    } else if (type === 'DATA') {
      console.log(body);

      if (body.curp || body.curp === null) {
        if (onSetUserData) {
          onSetUserData(body);
        }

        dispatch({
          type: 'videoConference/setUserData',
          payload: body,
        });
      }

      setStatsService(null);
    }
  };

  const senderStage = (currentSender: number) => {
    const tempstage = stageSelect(stagesFlow, currentSender);
    if (isMobile() && stateCamera !== tempstage?.flipCamera) {
      setStateCamera(tempstage?.flipCamera);
      switchCamera();
    }

    stompClient.send(
      senders[tempstage?.name],
      {},
      JSON.stringify({
        flowId: '1234',
        streamId: streams?.streamId,
        phone: streams?.phoneNumber,
      }),
    );
  };

  const connected = async () => {
    sockjs = await new SockJS(env.webSocket);
    stompClient = await Stomp.over(sockjs);

    console.log('STOMP: Attempting connection', stagesFlow);
    stompClient.debug('connected to Stomp');

    stompClient.connect(
      {},
      (frame: any) => {
        console.log(`Connected: ${frame},`);

        for (let index = 0; index < stagesFlow.length; index += 1) {
          const element = stagesFlow[index];
          
          stompClient.subscribe(env[element.name], (elements: any) => {
            bodySuscribe(elements);
          });
        }
        if (current === 0) {
          // only for need change in init state front camera
          switchCamera();
          setTimeout(() => {
            senderStage(current);
          }, 15000);
        }
      },
      () => {
        console.log('====================================');
        console.log('disconnected');
        console.log('====================================');
      },
    );
  };

  useEffect(() => {
    if (streams) {
      const getOtp = {
        flowId: streams?.flowId,
        streamId: streams?.streamId,
        phone: streams?.phoneNumber,
      };

      dispatch({
        type: 'videoConference/submitOTP',
        payload: getOtp,
      });
    }
  }, [streams]);

  useEffect(() => {
    if (current !== 0 && current < stagesFlow.length) {
      setSuccessStage(false);

      senderStage(current);
    }
    if (current >= stagesFlow.length && onComplete) {
      onComplete(true);
    }
  }, [current]);

  return [connected, loading, statsService, successStage];
};
