import { Effect, Reducer } from 'umi';

import { getOtpUser } from '../service';
import { StreamInterface } from '../interfaces/stream.interface';
import { requestOtpServiceFixture } from '../fixtures/request.fixture';


export interface StateModel{

  dataUser? : any;
  streams?: StreamInterface;
  otpUser?: any;
  flowComplete?: boolean;
  loadingConference?: boolean;
  currentStage?: number;
  statsStage?: any
}

interface ModelType {
  namespace: string;
  state: StateModel;
  effects: {
    submitOTP: Effect;
  };
  reducers: {
    changeStage: Reducer<StateModel>;
    setStreams: Reducer<StateModel>;
    setUserData: Reducer<StateModel>;
    setOtpUser: Reducer<StateModel>;
    setFlowStatus: Reducer<StateModel>;
    stateConference: Reducer<StateModel>;
  };
}


const Model: ModelType = {
  namespace: 'videoConference',
  state: {
    flowComplete: false,
    loadingConference: false,
    currentStage: 0
  },
  effects: {
    *submitOTP({ payload }: any, { call, put }: any) {
      const response = yield call(getOtpUser, payload);
      
      const { status } = response;

      if (status) {
        //
      } else {
          yield put({
            type: 'setOtpUser',
            payload: response.message,
          });
        }
    },
  },
  reducers: {
    changeStage(state: { currentStage: number; }) {
      return  {
        ...state,
        currentStage: state?.currentStage + 1,
      }
    },
    setStreams(state: any,{payload}: any) {
      return  {
        ...state,
        streams: {
          ...requestOtpServiceFixture,
          phoneNumber: payload
        }
      }
    },
    setUserData(state: any,{payload}: any) {
      return  {
        ...state,
        dataUser: payload
      }
    },
    setOtpUser(state: any, { payload }: any) {
      return {
        ...state,
        otpUser: payload,
      };
    },
    setFlowStatus(state: any, { payload }: any) {
      return {
        ...state,
        flowComplete: payload,
      };
    },
    stateConference(state: any, { payload }: any) {
      return {
        ...state,
        loadingConference: payload,
      };
    }
  }
};
export default Model;
