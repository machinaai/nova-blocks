import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from '../enums/error.enum';
import { registryService } from '../services/registryService';

export interface StateModel {
  emailVal?: string;
  cardNumber?: number;
  flowComplete?: boolean;
  error?: ErrorResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    submitCardNumber: Effect;
  };
  reducers: {
    saveCardNumber: Reducer<StateModel>;
    setEmail: Reducer<StateModel>;
    setFlowStatus: Reducer<StateModel>;
    setErrorReq: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    flowComplete: false,
  },
  effects: {
    *submitCardNumber({ payload }, { call, put }) {
      const res = yield call(registryService, payload);
      yield put({
        type: res.status ? 'setErrorReq' : 'saveCardNumber',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    saveCardNumber(state, { payload }) {
      return {
        ...state,
        cardNumber: payload,
      };
    },
    setEmail(state, { payload }) {
      return {
        ...state,
        emailVal: payload,
      };
    },
    setErrorReq(state, { payload }) {
      return {
        ...state,
        emailVal: payload,
      };
    },
    setFlowStatus(state, { payload }) {
      return {
        ...state,
        flowComplete: payload,
      };
    },
  },
};

export default Model;
