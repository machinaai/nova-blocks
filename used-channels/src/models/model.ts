import { ComponentsDefinition, DataDevice } from '../interfaces/componentsDefinition.interface';
import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from '../enums/error.enum';
import { RequestChannelsService } from '../services/request-channels';

export interface StateModelChannels {
  dataDevice?:DataDevice;
  dateRequest?:ComponentsDefinition;
  error?: ErrorResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModelChannels;
  effects: {
    getDataDevices: Effect;
  };
  reducers: {
    setDataDevices: Reducer<StateModelChannels>;
    setDateRequest: Reducer<StateModelChannels>;
    setError: Reducer<StateModelChannels>;
  };
}

const Model: Model = {
  namespace: 'Used_Channels',
  state: {},
  effects: {
    *getDataDevices({ payload }:any, { call, put }:any) {
      const res = yield call(RequestChannelsService, payload);
      yield put({
        type: res.status ? 'setError' : 'setDataDevices',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setDataDevices(state:any, { payload }:any) {
      return {
        ...state,
        dataDevice: payload,
      };
    },
    setDateRequest(state : any, { payload } :any) {      
      return {
        ...state,
        dateRequest: payload,
      };
    },
    setError(state:any, { payload }:any) {
      return {
        ...state,
        error: payload,
      };
    },
  },
};

export default Model;
