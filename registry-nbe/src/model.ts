import { Effect, Reducer, history } from 'umi';

import { stringify } from 'qs';
import { validateClient, registerClient } from './service';

export interface StateType {
  current?: string;
  step?: {
    legalBusinessName: string | undefined;
    legalBusinessID: string | undefined;
  };
  statusCode?: number | undefined;
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    validateClient: Effect;
    registerClient: Effect;
    submitStepForm: Effect;
    finalizeForm: Effect;
  };
  reducers: {
    saveStepFormData: Reducer<StateType>;
    saveCurrentStep: Reducer<StateType>;
    finalizeForm: Reducer<StateType>;
    errorValidate: Reducer<StateType>;
    errorRegister: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'bneStepForm',

  state: {
    current: 'info',
    step: {
      legalBusinessName: undefined,
      legalBusinessID: undefined,
    },
    statusCode: undefined,
  },

  effects: {
    *validateClient({ payload }, { call, put }) {
      const response = yield call(validateClient, payload);
      const { isClient, clientStatusCode, status } = response;
      if (status) {
        yield put({
          type: 'errorValidate',
          payload: status,
        });
      }
      if (isClient && clientStatusCode === 'Active') {
        yield put({
          type: 'saveStepFormData',
          payload,
        });
      }
    },
    *registerClient({ payload }, { call, put }) {
      const response = yield call(registerClient, payload);
      const { authorizationNumber, status } = response;
      if (status) {
        yield put({
          type: 'errorRegister',
          payload: status,
        });
      }
      if (authorizationNumber) {
        yield put({
          type: 'saveStepFormData',
          payload,
        });
      }
    },
    *submitStepForm({ payload }, { call, put }) {
      const response = yield call('', payload);
      yield put({
        type: 'saveStepFormData',
        payload,
      });
      yield put({
        type: 'saveCurrentStep',
        payload: response,
      });
    },
    finalizeForm() {
      history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: window.location.href,
        }),
      });
    },
  },

  reducers: {
    errorValidate(state, { payload }) {
      return {
        ...state,
        current: 'info',
        step: {
          legalBusinessName: undefined,
          legalBusinessID: undefined,
        },
        statusCode: payload,
      };
    },
    errorRegister(state, { payload }) {
      return {
        ...state,
        current: 'result',
        step: {
          legalBusinessName: undefined,
          legalBusinessID: undefined,
        },
        statusCode: payload,
      };
    },
    saveCurrentStep(state, { payload }) {
      return {
        ...state,
        current: payload,
      };
    },

    saveStepFormData(state, { payload }) {
      return {
        ...state,
        step: {
          ...(state as StateType).step,
          ...payload,
        },
        statusCode: 200,
      };
    },

    finalizeForm(state) {
      return {
        ...state,
        current: 'info',
        step: {
          legalBusinessName: undefined,
          legalBusinessID: undefined,
        },
        statusCode: undefined,
      };
    },
  },
};

export default Model;
