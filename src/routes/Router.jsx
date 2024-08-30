import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { ProductsResults } from '../page/ProductsResults/ProductsResults';
import { ProductDetails } from '../page/ProductDetails/ProductDetails';

import { PATHS } from '../utils/constants';
import { NotFound } from '../page/NotFound/NotFound';

const routerConfig = [
  {
    path: PATHS.ROOT,
    element: <MainLayout />,
    children: [
      {
        path: PATHS.ITEMS,
        element: <ProductsResults />,
      },
      {
        path: `${PATHS.ITEMS}/:itemId`,
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routerConfig);
