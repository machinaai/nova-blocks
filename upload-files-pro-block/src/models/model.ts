import { Effect, Reducer } from '@@/core/umiExports';
import { ineFromDataService, ineBackDataService, pdfDataService } from '../service';

export interface StateModel {
  data?: any;
  dataUpload?: any;
  flowComplete?: boolean;
  status?: any;
}

export interface ModelType {
  namespace: string;
  state: any;
  effects: {
    // getData: Effect;
    ineFrontData: Effect;
    ineBackData: Effect;
    pdfData: Effect;
    ine: Effect;
  };
  reducers: {
    setStatus: Reducer<StateModel>;
    setStep: Reducer<StateModel>;
    setFlowStatus: Reducer<StateModel>;
    setDataUpload: Reducer<StateModel>;
    emptyStatus: Reducer<StateModel>;
  };
}
export const Model: ModelType = {
  namespace: 'requestModel',
  state: {
    data: {},
  },
  effects: {
    *ine({ payload }: any, { call, put }: any) {
      const responseFront = yield call(ineFromDataService, payload.objectIneFront);
      const responseBack = yield call(ineBackDataService, payload.objectIneBack);

      const { status: statusFront } = responseFront;
      const { status: statusBack } = responseBack;

      if (statusFront && statusBack) {
        yield put({ type: 'setStatus', payload: { front: statusFront, back: statusBack } });
      } else {
        yield put({ type: 'setDataUpload', payload: responseFront });
        yield put({ type: 'setStatus', payload: { front: 200, back: 200 } });
        yield put({ type: 'setFlowStatus', payload: true });
        yield put({ type: 'setFlowStatus', payload: false });
      }
    },

    *pdfData({ payload }: any, { call, put }: any) {
      const response = yield call(pdfDataService, payload);
      console.log('responde pdf', response);
      const { status } = response;
      if (status) {
        yield put({ type: 'setStatus', payload: { document: status } });
      } else {
        yield put({ type: 'setFlowStatus', payload: true });
        yield put({ type: 'setStatus', payload: { document: status } });
        yield put({ type: 'setDataUpload', payload: response });
        yield put({ type: 'setFlowStatus', payload: false });
      }
    },
  },
  reducers: {
    setStep(state: any, { payload }: any) {
      return {
        ...state,
        step: payload,
      };
    },
    setStatus(state: any, { payload }: any) {
      console.log('payload: ', payload);
      return {
        ...state,
        status: payload,
      };
    },
    setFlowStatus(state: any, { payload }: any) {
      return {
        ...state,
        flowComplete: payload,
      };
    },
    setDataUpload(state: any, { payload }: any) {
      return {
        ...state,
        dataUpload: payload,
      };
    },
  },
};
export default Model;
