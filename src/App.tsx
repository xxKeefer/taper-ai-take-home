import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {Routes} from './constants';
import {useToasts} from './ToastContext';

function App() {
  const navigate = useNavigate();
  const {toasts, removeToast} = useToasts();
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="navbar bg-base-100">
            <div className="flex-none">
              <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-5 h-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <button
                className="btn btn-ghost normal-case text-xl"
                onClick={() => navigate(Routes.Home)}
              >
                xxKeefer
              </button>
            </div>
          </div>
          <Outlet />
          <div className="toast toast-bottom toast-end">
            {toasts.map(toast => {
              const alertClass = `alert alert-${
                toast.kind === 'error' ? 'error' : 'success'
              }`;

              return (
                <div role="alert" className={alertClass}>
                  <button
                    onClick={() => removeToast(toast.id)}
                    className="btn btn-circle btn-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="flex items-center">{toast.message}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li>
              <button onClick={() => navigate(Routes.TaskOne)}>Task One</button>
            </li>
            <li>
              <button onClick={() => navigate(Routes.TaskTwo)}>Task Two</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
