import { combineReducers } from '@reduxjs/toolkit';
import { itemsReducer } from './items/ItemsSlice';
import { notificationsReducer } from './notifications/notificationsSlice';

export const rootReducer = combineReducers({
  items: itemsReducer,
  notifications: notificationsReducer,
});
