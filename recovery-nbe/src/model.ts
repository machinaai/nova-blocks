import { Effect, Reducer, history } from 'umi';

import { stringify } from 'qs';
import { getUserData, validatePhoneNumber, setPassword } from './services/recovery';
import { requestOTP, validateOTP } from './services/dynamic-authentication';

export interface StateType {
  current?: string;
  step?: {
    user: string | undefined;
    maskedBusinessName: string | undefined;
    maskedUserName: string | undefined;
    maskedPhoneNumber: string | undefined;
  };
  statusCode?: number | undefined;
  stateCurrent?: boolean | undefined;
}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {
    validateUserData: Effect;
    validationPhone: Effect;
    validationOTP: Effect;
    validationSetPassword: Effect;
    submitStepForm: Effect;
    finalizeForm: Effect;
    requestOTP: Effect;
  };
  reducers: {
    validateUser: Reducer<StateType>;
    finalizeOperation: Reducer<StateType>;
    validatePhone: Reducer<StateType>;
    errorValidation: Reducer<StateType>;
    finishRecoverFlow: Reducer<StateType>;
    returnStep: Reducer<StateType>;
    continueFlow: Reducer<StateType>;
    validateOTP: Reducer<StateType>;
    closeStatusCode: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'recoverStepForm',

  state: {
    current: 'user',
    step: {
      user: undefined,
      maskedBusinessName: undefined,
      maskedUserName: undefined,
      maskedPhoneNumber: undefined,
    },
    statusCode: undefined,
    stateCurrent: false,
  },
  effects: {
    *validateUserData({ payload }, { call, put }) {
      const response = yield call(getUserData, payload);
      const { maskedBusinessName, status } = response;
      if (status) {
        yield put({
          type: 'errorValidation',
          payload: {
            status,
            current: 'user',
          },
        });
      }
      if (maskedBusinessName) {
        yield put({
          type: 'validateUser',
          payload: {
            ...response,
            ...payload,
          },
        });
      }
    },
    *validationPhone({ payload }, { call, put }) {
      const response = yield call(validatePhoneNumber, payload);
      const { status } = response;

      if (status) {
        yield put({
          type: 'errorValidation',
          payload: {
            status,
            current: 'number',
          },
        });
      } else {
        yield put({
          type: 'requestOTP',
          payload,
        });
      }
    },
    *requestOTP({ payload }, { call, put }) {
      const response = yield call(requestOTP, payload);
      const { status } = response;
      if (status) {
        yield put({
          type: 'errorValidation',
          payload: {
            status,
            current: 'number',
          },
        });
      } else {
        yield put({
          type: 'validatePhone',
          payload,
        });
      }
    },
    *validationOTP({ payload }, { call, put }) {
      const response = yield call(validateOTP, payload);
      const { status } = response;

      if (status) {
        yield put({
          type: 'errorValidation',
          payload: {
            status,
            current: 'number',
            stateCurrent: true,
          },
        });
      } else {
        yield put({
          type: 'validateOTP',
          payload,
        });
      }
    },
    *validationSetPassword({ payload }, { call, put }) {
      const response = yield call(setPassword, payload);
      const { status } = response;

      if (status) {
        yield put({
          type: 'errorValidation',
          payload: {
            status,
            current: 'recover',
            stateCurrent: false,
          },
        });
      } else {
        yield put({
          type: 'finishRecoverFlow',
          payload: 200,
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
    *finalizeForm({ payload }, { put }) {
      yield put({
        type: 'finalizeOperation',
        payload,
      });
      history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: window.location.href,
        }),
      });
    },
  },

  reducers: {
    continueFlow(state, { payload }) {
      return {
        ...state,
        current: payload,
        stateCurrent: false,
      };
    },
    errorValidation(state, { payload }) {
      return {
        ...state,
        current: payload.current,
        statusCode: payload.status,
        stateCurrent: payload.stateCurrent || false,
      };
    },
    validateUser(state, { payload }) {
      return {
        ...state,
        step: {
          ...(state as StateType).step,
          ...payload,
        },
        current: 'user',
        statusCode: 200,
        stateCurrent: true,
      };
    },
    validatePhone(state, { payload }) {
      return {
        ...state,
        step: {
          ...(state as StateType).step,
          ...payload,
        },
        current: 'number',
        statusCode: 200,
        stateCurrent: true,
      };
    },
    validateOTP(state, { payload }) {
      return {
        ...state,
        step: {
          ...(state as StateType).step,
          ...payload,
        },
        current: 'password',
        statusCode: 200,
        stateCurrent: false,
      };
    },
    finishRecoverFlow(state, { payload }) {
      return {
        ...state,
        statusCode: payload,
        current: 'recover',
      };
    },
    returnStep(state, { payload }) {
      return {
        ...state,
        current: payload.current,
        stateCurrent: payload.stateCurrent,
      };
    },
    closeStatusCode(state) {
      return {
        ...state,
        statusCode: undefined,
      };
    },

    finalizeOperation(state) {
      return {
        ...state,
        current: 'user',
        step: {
          user: undefined,
          maskedBusinessName: undefined,
          maskedUserName: undefined,
          maskedPhoneNumber: undefined,
        },
        statusCode: undefined,
        stateCurrent: false,
      };
    },
  },
};

export default Model;
