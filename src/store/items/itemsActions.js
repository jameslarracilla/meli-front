import { wrapperTryCatch } from '../../adapters/wrapperTryCatch';
import { fetchItemById, fetchResultsByQuery } from '../../services/items';
import { STATUS_TYPE } from '../../utils/constants';
import { setItemNotFound, setItems, setSelectedItem } from './ItemsSlice';

export const getItemsByQueryThunk = query => async dispatch => {
  wrapperTryCatch(async () => {
    const { data } = await fetchResultsByQuery(query);
    dispatch(setItems(data));
  });
};

export const getItemByIdThunk = itemId => async dispatch => {
  wrapperTryCatch(
    async () => {
      const res = await fetchItemById(itemId);
      if (!res?.data) {
        throw new Error(res.response.data.status);
      }

      dispatch(setSelectedItem(res?.data));
    },
    async error => {
      const status = error.message;
      if (status === STATUS_TYPE.NOT_FOUND) {
        dispatch(setItemNotFound());
      }
    }
  );
};
