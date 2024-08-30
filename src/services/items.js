import { axiosMainInstance } from '../adapters/axiosAdapter';
import { URL_PATHS } from '../utils/constants';

const URL_HOST = process.env.URL_HOST || '';

export const fetchResultsByQuery = query =>
  axiosMainInstance({
    url: `${URL_HOST}${URL_PATHS.ITEMS}`,
    params: {
      q: query,
    },
  });

export const fetchItemById = itemId =>
  axiosMainInstance({
    url: `${URL_HOST}${URL_PATHS.ITEMS}/${itemId}`,
  });
