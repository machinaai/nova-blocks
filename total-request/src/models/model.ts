import { RequestProp } from '../interfaces/ProblockProps.interface';
import { RequestService } from '../services/show-total-request';
import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from '../enums/error.enum';
import { ComponentsDefinition } from '../interfaces/componentsDefinition.interface';

export interface StateModel {
  totalReq?: RequestProp;
  dateRequest?: ComponentsDefinition;
  error?: ErrorResponseEnum;
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    getTotalRequest: Effect;
  };
  reducers: {
    setTotalRequest: Reducer<StateModel>;
    setDateRequest: Reducer<StateModel>;
    setError: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'totalRequestModel',
  state: {},
  effects: {
    *getTotalRequest({ payload }: any, { call, put }: any) {
      const res = yield call(RequestService, payload);
      yield put({
        type: res.status ? 'setError' : 'setTotalRequest',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setTotalRequest(state: any, { payload }: any) {
      return {
        ...state,
        totalReq: payload,
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
