import React, {useState, useContext, useCallback, ReactNode} from 'react';

type Toast = {
  id: number;
  kind: 'info' | 'success' | 'error' | 'warning';
  message: string;
};

type ToastContextType = {
  toasts: Toast[];
  addToast: (message: Toast['message'], kind: Toast['kind']) => void;
  removeToast: (id: number) => void;
};
const ToastContext = React.createContext<ToastContextType | null>(null);

let id = 1;

const ToastProvider = ({children}: {children: ReactNode}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (message: Toast['message'], kind: Toast['kind']) => {
      setToasts(toasts => [
        ...toasts,
        {
          id: id++,
          message,
          kind,
        },
      ]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: number) => {
      setToasts(toasts => toasts.filter(toast => toast.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={{toasts, addToast, removeToast}}>
      {children}
    </ToastContext.Provider>
  );
};

const useToasts = () => {
  const toastContext = useContext(ToastContext);
  if (!toastContext) {
    throw new Error('useToasts has to be used within <ToastContext.Provider>');
  }
  return toastContext;
};

export {ToastContext, useToasts};
export default ToastProvider;
