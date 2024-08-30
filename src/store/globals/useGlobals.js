import store from '../index';

export const globalState = () => store.getState();
export const globalDispatch = action => store.dispatch(action);
