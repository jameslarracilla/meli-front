import { GlobalStyle } from '@core/components/GlobalStyle/GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { router } from './routes/Router';
import store from './store';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};
