import { Effect, Reducer } from 'umi';

import { StatusResponseEnum, FlowN2N4Enum } from '../enums';

import { DataCustomerRequestInterface } from '../interfaces';

export interface StateModel {
  status?: StatusResponseEnum;
  flowComplete?: boolean;
  typeFlow?: FlowN2N4Enum | undefined;
  subFlowComplete?: boolean;
  data?: DataCustomerRequestInterface;
  adressUpdate?: boolean
  step?: string;
  updateAddressState?: boolean;
}

interface ModelState {
  namespace: string;
  state: StateModel;
  effects: {

  };
  reducers: {
    setUserData: Reducer<StateModel>;
    setTypeFlow: Reducer<StateModel>;
    setStatus: Reducer<StateModel>;
    setFlowStatus: Reducer<StateModel>;
    setSubFlowStatus: Reducer<StateModel>;
    updateAdressFlag: Reducer<StateModel>;
    
    setStep: Reducer<StateModel>;
    setUpdateAddressState: Reducer<StateModel>;
  };
}

const Model: ModelState = {
  namespace: 'identityVerification',
  state: {
    typeFlow: undefined,
    flowComplete: false,
    subFlowComplete: false,
    adressUpdate: false
  },
  effects: {

  },
  reducers: {
    updateAdressFlag(state: any, { payload }: any) {
      return {
        ...state,
        adressUpdate: payload,
      };
    },
    setUserData(state: any, { payload }: any) {
      return {
        ...state,
        data: payload,
      };
    },
    setTypeFlow(state: any, { payload }: any) {
      return {
        ...state,
        typeFlow: payload,
      };
    },
    setStatus(state: any, { payload }: any) {
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
    setSubFlowStatus(state: any, { payload }: any) {
      return {
        ...state,
        subFlowComplete: payload,
      };
    },
    //update adress
    setStep(state: any, { payload }: any) {
      return {
        ...state,
        step: payload,
      };
    },
    setUpdateAddressState(state: any, { payload }: any) {
      return {
        ...state,
        updateAddressState: payload,
      };
    },
  },
};

export default Model;
