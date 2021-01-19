import { Reducer } from 'umi';

export interface StateModel {
  step?: string;
  flowComplete?: boolean;
}

interface Model {
  namespace: string;
  state: StateModel;
  reducers: {
    setStep: Reducer<StateModel>;
    setFlowStatus: Reducer<StateModel>;
  };
}

const Model: Model = {
  namespace: 'updateAddress',
  state: {
    flowComplete: false,
  },
  reducers: {
    setStep(state: any, { payload }: any) {
      return {
        ...state,
        step: payload,
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
