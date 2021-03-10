import { Effect, Reducer } from 'umi';

import { getDistance, getMyGeolocation } from '../service';

export interface StateModel {
  data?: any;
  geo?: any;
}

interface ModelState {
  namespace: string;
  state: StateModel;
  effects: {
    submitgetDistance: Effect;
    submitgetMyGeolocation: Effect;
  };
  reducers: {
    saveData: Reducer<StateModel>; 
    saveGeo: Reducer<StateModel>;
  };
}

const Model: ModelState = {
  namespace: 'googleMap',
  state: {
  },
  effects: {
    *submitgetDistance({ payload }, { call, put }) {
      const response = yield call(getDistance, payload);
console.log(response);

      if (response) {
        
        yield put({ type: 'saveData', payload: response });
       
      }
    },
    *submitgetMyGeolocation({ payload }, { call, put }) {
      const response = yield call(getMyGeolocation, payload);
console.log(response);

      if (response) {
        
        yield put({ type: 'saveGeo', payload: response });
       
      }
    },

    
  },
  reducers: {
    saveData(state, { payload }) {
      return {
        ...state,
        data: payload,
      };
    },
    saveGeo(state, { payload }) {
      return {
        ...state,
        geo: payload,
      };
    },
  },
};

export default Model;
