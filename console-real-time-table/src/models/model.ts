import { ResponseInterface } from '../interfaces/componentsDefinition.interface';
import { Effect, Reducer } from 'umi';
import { ErrorResponseEnum } from '../enums/error.enum';
import { DataTablesRequest } from '../services/request-data-tables';

export interface StateModel {
  dataTable?:ResponseInterface[];
  idRequest?:any;
  error?: ErrorResponseEnum;
  routePath?:string,
}

interface Model {
  namespace: string;
  state: StateModel;
  effects: {
    getDataTables: Effect;
  };
  reducers: {
    setDataTables: Reducer<StateModel>;
    setIdRequestClient: Reducer<StateModel>;
    setError: Reducer<StateModel>;
    setRoutePath:Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'Real_Time_Table',
  state: {},
  effects: {
    *getDataTables({ payload }:any, { call, put }:any) {
      const res = yield call(DataTablesRequest, payload);
      yield put({
        type: res.status ? 'setError' : 'setDataTables',
        payload: res.status ? res.status : { ...res },
      });
    },
  },
  reducers: {
    setDataTables(state:any, { payload }:any) {
      return {
        ...state,
        dataTable: payload,
      };
    },
    setIdRequestClient(state:any, { payload }:any) {
      return {
        ...state,
        idRequest: payload,
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
