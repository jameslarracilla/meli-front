import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  loadingPool: 0,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    isLoading: (state, { payload }) => {
      if (payload) state.loadingPool++;
      else if (state.loadingPool > 0) state.loadingPool--;
      state.isLoading = state.loadingPool > 0;
    },
  },
});

export const { isLoading } = notificationsSlice.actions;
export const { reducer: notificationsReducer } = notificationsSlice;
