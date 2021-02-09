import { Reducer, Effect } from 'umi';
import { twilioService } from '../services/service';
export interface StateModel {
  cardNumber?: string;
  nameUser?: string;
  option?: string;
  flowComplete?: boolean;
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    twilioService: Effect;
  };
  reducers: {
    setCardNumber: Reducer<StateModel>;
    setNameUser: Reducer<StateModel>;
    setOption: Reducer<StateModel>;
    setFlowStatus: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {
    flowComplete: false,
  },

  effects: {
    *twilioService({ payload }: any, { call, put }: any) {
      const response = yield call(twilioService, payload);
      const { msg } = response;
      if (msg) {
        yield put({ type: 'setBodyTwilio', payload: msg });
      } else {
        yield put({ type: 'setBodyTwilio', payload: msg });
      }
    },
  },

  reducers: {
    setCardNumber(state, { payload }) {
      return {
        ...state,
        cardNumber: payload,
      };
    },
    setNameUser(state, { payload }) {
      return {
        ...state,
        nameUser: payload,
      };
    },
    setOption(state, { payload }) {
      return {
        ...state,
        option: payload,
      };
    },
    setFlowStatus(state: any, { payload }: any) {
      return {
        ...state,
        flowComplete: payload,
      };
    },
  },
};

export default Model;
