import { RequestProp } from '../interfaces/ProblockProps.interface';
import { UsedDevicesService } from '../services/used-devices-req';
import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from '../enums/error.enum';
import { ComponentsDefinition } from '../interfaces/componentsDefinition.interface';

export interface StateModelDevices {
  usedDevices?: RequestProp;
  dateRequest?: ComponentsDefinition;
  error?: ErrorResponseEnum;
  endPointRequest?: string;
}

interface Model {
  namespace: string;
  state: StateModelDevices;
  effects: {
    getUsedDevices: Effect;
  };
  reducers: {
    setUsedDevices: Reducer<StateModelDevices>;
    setDateRequest: Reducer<StateModelDevices>;
    setError: Reducer<StateModelDevices>;
    setEndPoin: Reducer<StateModelDevices>;
  };
}

const Model: Model = {
  namespace: 'usedDevices',
  state: {
    usedDevices: undefined
  },
  effects: {
    *getUsedDevices({ payload }: any, { call, put }: any) {
      console.log(payload, 'payload')
      const res = yield call(UsedDevicesService, payload);
      yield put({
        type: res.status ? 'setError' : 'setUsedDevices',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setUsedDevices(state: any, { payload }: any) {
      return {
        ...state,
        usedDevices: payload,
      };
    },
    setDateRequest(state: any, { payload }: any) {
      return {
        ...state,
        dateRequest: payload,
      };
    },
    setError(state: any, { payload }: any) {
      return {
        ...state,
        error: payload,
      };
    },
    setEndPoin(state: any, { payload }: any) {
      console.log('enviromentEndPoints', payload)
      return {
        ...state,
        endPointRequest: payload,
      };
    },
  },
};

export default Model;
