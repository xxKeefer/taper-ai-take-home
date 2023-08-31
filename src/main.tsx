import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './NotFound';
import TaskOne from './TaskOne';
import TaskTwo from './TaskTwo';
import {Routes} from './constants';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ToastProvider from './ToastContext';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: Routes.Home,
        element: (
          <div className="px-5">
            ⬆️ use this menu to the left to navigate the tasks
          </div>
        ),
      },
      {
        path: Routes.TaskOne,
        element: <TaskOne />,
      },
      {
        path: Routes.TaskTwo,
        element: <TaskTwo />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')!
);
