import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NotFound from './NotFound';
import TaskOne from './TaskOne';
import {Routes} from './constants';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: Routes.TaskOne,
        element: <TaskOne />,
      },
      {
        index: true,
        path: Routes.TaskTwo,
        element: <div>TASK TWO TODO</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
