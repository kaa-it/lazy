import { createRoot } from 'react-dom/client';

import { StrictMode } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { App } from './app';
import { Home } from './pages/home/home';

import './styles.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/product/:id",
        lazy: () => import("./pages/product/product")
      }
    ]
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
