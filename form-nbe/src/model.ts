import { stringify } from 'querystring';
import { history, Reducer, Effect } from 'umi';

import { accountLogin, validateOTPLogin, getOTPLogin } from './service';

export interface StateType {
  status?: string | number;
  type?: string;
  step?: string;
  data?: { user: string; password: string };
  dataResponse?: { maskedBusinessName: string; maskedUserName: string };
}

export interface LoginModelType {
  namespace: string;
  state: StateType;
  effects: {
    login: Effect;
    loginOTP: Effect;
    logout: Effect;
    goBack: Effect;
  };
  reducers: {
    saveStep: Reducer<StateType>;
    returnToLogin: Reducer<StateType>;
  };
}

const Model: LoginModelType = {
  namespace: 'authentication',

  state: {
    status: undefined,
    step: 'login',
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(accountLogin, payload);
      // Login successfully
      if (response.maskedUserName) {
        const res = yield call(getOTPLogin);
        if (res.status) {
          yield put({
            type: 'saveStep',
            payload: {
              status: res.status,
            },
          });
        } else {
          yield put({
            type: 'saveStep',
            payload: {
              response,
              status: 200,
            },
          });
        }
      } else {
        yield put({
          type: 'saveStep',
          payload: {
            status: response.status,
          },
        });
      }
    },

    *loginOTP({ payload }, { call, put }) {
      const response = yield call(validateOTPLogin, payload);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (response.token) {
        history.replace({
          pathname: '/',
          search: stringify({
            redirect: window.location.href,
          }),
        });
        yield put({
          type: 'returnToLogin',
          payload,
        });
      } else {
        yield put({
          type: 'saveStep',
          payload: {
            status: response.status,
          },
        });
      }
    },

    logout() {
      // Note: There may be security issues, please note
      if (window.location.pathname !== '/user/login') {
        history.replace({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        });
      }
    },

    *goBack({ payload }, { put }) {
      yield put({
        type: 'returnToLogin',
        payload,
      });
    },
  },

  reducers: {
    saveStep(state, { payload }) {
      if (payload.status !== 200) {
        return {
          ...state,
          data: payload.response,
          status: payload.status,
        };
      }
      return {
        ...state,
        step: 'otp',
        dataResponse: payload.response,
        status: payload.status,
      };
    },
    returnToLogin(state) {
      return {
        ...state,
        step: 'login',
        status: undefined,
      };
    },
  },
};

export default Model;
