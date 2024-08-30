import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  author: {
    name: '',
    lastname: '',
  },
  categories: [],
  items: [],
  selectedItem: {
    notFound: false,
    product: {},
  },
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, { payload }) => {
      state.author = payload.author;
      state.categories = payload.categories;
      state.items = payload.items;
    },
    setSelectedItem: (state, { payload }) => {
      state.selectedItem.product = payload;
      state.selectedItem.notFound = false;
    },
    setItemNotFound: state => {
      state.selectedItem.notFound = true;
    },
    clearSelectedItem: state => {
      state.selectedItem.product = {};
    },
    clearItems: state => {
      state.items = [];
      state.categories = [];
    },
  },
});

export const { setItems, setSelectedItem, setItemNotFound, clearItems, clearSelectedItem } = itemsSlice.actions;
export const { reducer: itemsReducer } = itemsSlice;
