import { Effect, Reducer } from '@@/core/umiExports';
import { uploadFilesServices } from '../service';

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
    uploadFileEffect: Effect;
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
    *uploadFileEffect({ payload }: any, { call, put }: any) {
      const response = yield call(uploadFilesServices, payload);
      const { status } = response;
      if (status) {
        yield put({ type: 'setStatus', payload: { error: true } });
      } else {
        yield put({ type: 'setStatus', payload: { error: false } });
        yield put({ type: 'setDataUpload', payload: response });
        yield put({ type: 'setFlowStatus', payload: true });
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
