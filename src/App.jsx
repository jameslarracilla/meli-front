import { GlobalStyle } from '@core/components/GlobalStyle/GlobalStyle';
import { BreadCrum } from './components/BreadCrum/BreadCrum';
import { SearchBar } from './components/SearchBar/SearchBar';
import { ProductsResults } from './page/ProductsResults/ProductsResults';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Router';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};
