// import { Effect, Reducer } from 'umi';

/**
 * Interface state of model
 */
export interface StateModel { }
/**
 * Interface Model dva
 *
 * @interface Model
 */
interface Model {
  namespace: string;
  state: StateModel;
  effects: {};
  reducers: {};
}

/**
 * Modelo dva
 */
const Model: Model = {
  namespace: 'BLOCK_NAME_CAMEL_CASE',
  state: {},
  effects: {},
  reducers: {},
};

export default Model;
