import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { ProductsResults } from '../page/ProductsResults/ProductsResults';
import { ProductDetails } from '../page/ProductDetails/ProductDetails';

import { PATHS } from '../utils/constants';

const routerConfig = [
  {
    path: PATHS.ROOT,
    element: <MainLayout />,
    children: [
      {
        path: PATHS.ITEMS,
        children: [
          {
            index: true,
            element: <ProductsResults />,
          },
          {
            path: ':id',
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <div>Not found</div>,
  },
];

export const router = createBrowserRouter(routerConfig);
