import type { Effect, Reducer } from 'umi';

import type { StatusResponseEnum } from '../enums';
import { StepEnum } from '../enums';

import { stepGetOtpPhone, stepValidateOtpPhone } from '../service';

// only use with session token
// import { setToken, getToken } from "@/utils/sessionResource/session";
// import { createSessionService } from '@/services/sessionResource/session';

export type StateModel = {
  step?: StepEnum;
  status?: StatusResponseEnum;
  flowComplete?: boolean;
  phone?: string;
}

type ModelState = {
  namespace: string;
  state: StateModel;
  effects: {
    submitPhoneNumber: Effect;
    validateOtp: Effect;
  };
  reducers: {
    setStatus: Reducer<StateModel>;
    setStep: Reducer<StateModel>;
    setFlowStatus: Reducer<StateModel>;
    savePhone: Reducer<StateModel>;
  };
}

const Model: ModelState = {
  namespace: 'registerOtp',
  state: {
    step: StepEnum.getOtp,
    flowComplete: false,
  },
  effects: {
    *submitPhoneNumber({ payload }, { call, put }) {
      const response = yield call(stepGetOtpPhone, payload);
      const { status } = response;

      if (status) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        yield put({ type: 'setStep', payload: StepEnum.validateOtp });
        yield put({ type: 'savePhone', payload: payload.phone });
        yield put({ type: 'setStatus', payload: 200 });
      }
    },

    *validateOtp({ payload }, { call, put }) {
      const response = yield call(stepValidateOtpPhone, payload);
      const { status } = response;


      if (status) {
        yield put({ type: 'setStatus', payload: status });
      } else {
        // only use with session token
        
        // yield setToken(response.token);
        // yield call(createSessionService, {
        //   token: getToken(),
        //   ...payload
        // });
        yield put({ type: 'setFlowStatus', payload: true });
        yield put({ type: 'setStatus', payload: 200 });
        yield put({ type: 'setFlowStatus', payload: false });
      }
    },
  },
  reducers: {
    setStep(state, { payload }) {
      return {
        ...state,
        step: payload,
      };
    },
    savePhone(state, { payload }) {
      return {
        ...state,
        phone: payload,
      };
    },
    setStatus(state, { payload }) {
      return {
        ...state,
        status: payload,
      };
    },
    setFlowStatus(state, { payload }) {
      return {
        ...state,
        flowComplete: payload,
      };
    },
  },
};

export default Model;
