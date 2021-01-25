import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from '../enums/error.enum';
import { ClientInformationRequest } from '../services/request-client-information';

export interface StateModelClient {
  clientDetail?:any
  error?: ErrorResponseEnum;
  idRequest?:any;
  dataForm?:object;
}

interface Model {
  namespace: string;
  state: StateModelClient;
  effects: {
    getClientInformation: Effect;
  };
  reducers: {
    setClientInformation: Reducer<StateModelClient>;
    setError: Reducer<StateModelClient>;
    setIdRequest: Reducer<StateModelClient>
    setDataForm: Reducer<StateModelClient>
  };
}

const Model: Model = {
  namespace: 'clientDetails',
  state: {},
  effects: {
    *getClientInformation({ payload }:any, { call, put }:any) {
      const res = yield call(ClientInformationRequest, payload);
      yield put({
        type: res.status ? 'setError' : 'setClientInformation',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setClientInformation(state:any, { payload }:any) {
      return {
        ...state,
        clientDetail: payload,
      };
    },
    setIdRequest(state:any, { payload }:any) {
      return {
        ...state,
        idRequest: payload,
      };
    },
    setDataForm(state:any, { payload }:any) {
      return {
        ...state,
        dataForm: payload,
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
