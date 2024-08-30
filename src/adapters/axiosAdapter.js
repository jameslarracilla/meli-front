import axios from 'axios';

export const axiosMainInstance = axios.create();

axiosMainInstance.interceptors.response.use(
  response => response,
  errorResponse => {
    // Take decisions based on type of error
    return errorResponse;
  }
);
