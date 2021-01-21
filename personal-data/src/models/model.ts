import { Effect, Reducer } from 'umi';

import { customerDataService } from '../service';
import { StatusResponseEnum } from '../enums';

export interface StateModel {
  status?: StatusResponseEnum;
  data?: any;
  flowComplete?: boolean;
}

interface ModelState {
  namespace: string;
  state: StateModel;
  effects: {
    submitCustomerData: Effect;
  };
  reducers: {
    saveData: Reducer<StateModel>; 
    setStatus: Reducer<StateModel>;
    setFlowStatus: Reducer<StateModel>;
  };
}

const Model: ModelState = {
  namespace: 'personalData',
  state: {
    flowComplete: false,
  },
  effects: {
    *submitCustomerData({ payload }, { call, put }) {
      const response = yield call(customerDataService, payload);
      const { status } = response;

      if (false) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        yield put({ type: 'saveData', payload });
        yield put({ type: 'setFlowStatus', payload: true });
        yield put({ type: 'setStatus', payload: 200 });
      }
    },

    
  },
  reducers: {
    saveData(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    },
    setStatus(state, { payload }) {
      return {
        ...state,
        status: payload,
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
