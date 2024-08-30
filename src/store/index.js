import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';
import { ENVIRONMENTS } from '../utils/constants';

const DEV_ENV = process.env.NODE_ENV === ENVIRONMENTS.DEV;

export const setupStore = (preloadedState = {}) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: DEV_ENV,
  });

const store = setupStore();

export default store;
