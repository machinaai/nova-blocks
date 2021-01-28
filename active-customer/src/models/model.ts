import { ResponseInterface } from '../interfaces/componentsDefinition.interface';
import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from '../enums/error.enum';
import { GetActiveCustomers } from '../services/request-data-tables';

export interface StateModelCustomers {
  activeCustomer?:any,
  idAccount?:any,
  error?: ErrorResponseEnum;
  routePath?:string,
}

interface Model {
  namespace: string;
  state: StateModelCustomers;
  effects: {
    getActiveCustomers: Effect;
  };
  reducers: {
    setActiveCustomers: Reducer<StateModelCustomers>;
    setIdAccount:Reducer<StateModelCustomers>;
    setError: Reducer<StateModelCustomers>;
    setRoutePath:Reducer<StateModelCustomers>;
  };
}

const Model: Model = {
  namespace: 'activeCustomer',
  state: {},
  effects: {
    *getActiveCustomers({ payload }:any, { call, put }:any) {
      const res = yield call(GetActiveCustomers, payload);
      yield put({
        type: res.status ? 'setError' : 'setActiveCustomers',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setActiveCustomers(state:any, { payload }:any) {
      return {
        ...state,
        activeCustomer: payload,
      };
    },
    setIdAccount(state:any, { payload }:any) {
      return {
        ...state,
        idAccount: payload,
      };
    },
    setRoutePath(state:any, { payload }:any) {     
      return {
        ...state,
        routePath: payload,
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
