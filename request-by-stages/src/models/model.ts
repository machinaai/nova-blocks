import { Effect, Reducer } from 'umi';
import { ComponentsDefinition } from '../interfaces/componentsDefinition.interface';
import { ErrorResponseEnum } from '../enums/error.enum';
import { RequestService, RequestStepsService } from '../services/request-steps';

export interface StateModelStage {
  dataSteps?: any;
  dateRequest?: ComponentsDefinition;
  error?: ErrorResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModelStage;
  effects: {
    getSteps: Effect;
  };
  reducers: {
    setSteps: Reducer<StateModelStage>;
    setDateRequest: Reducer<StateModelStage>;
    setError: Reducer<StateModelStage>;
  };
}

const Model: Model = {
  namespace: 'RequestByStages',
  state: {},
  effects: {
    *getSteps({ payload }: any, { call, put }: any) {
      const res = yield call(RequestStepsService, payload);
      yield put({
        type: res.status ? 'setError' : 'setSteps',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setSteps(state: any, { payload }: any) {
      return {
        ...state,
        dataSteps: payload,
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
  },
};

export default Model;
