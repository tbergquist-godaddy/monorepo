import {
  createContext,
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { generate } from 'shortid';

type ToastType = 'success' | 'danger';
export type Config = Readonly<{
  text: string;
  type?: ToastType;
  icon?: ReactElement<any>;
  timeout?: number;
}>;

export type Toast = Readonly<{
  id: string;
  text: string;
  isVisible: boolean;
  type: ToastType;
  timeout: number;
}>;

type Props = Readonly<{
  children: ReactNode;
}>;

interface ToastState {
  toasts: ReadonlyArray<Toast>;
}

type ToastActionState = Dispatch<SetStateAction<ToastState>>;

const ToastContext = createContext<undefined | ToastState>(undefined);
const ToastActionContext = createContext<undefined | ToastActionState>(undefined);

export const ToastProvider = ({ children }: Props) => {
  const [toastState, setToastState] = useState<ToastState>({ toasts: [] });

  return (
    <ToastContext.Provider value={toastState}>
      <ToastActionContext.Provider value={setToastState}>{children}</ToastActionContext.Provider>
    </ToastContext.Provider>
  );
};

export const useToastListState = () => {
  const context = useContext(ToastContext);
  if (context == null) {
    throw new Error('Expected context to be defined, did you forget to add the ToastProvider?');
  }
  return context.toasts;
};

const defaultToast = {
  isVisible: false,
  text: null,
  type: 'success',
  timeout: 3000,
  id: '',
};

export const useShowToast = () => {
  const setToastState = useContext(ToastActionContext);
  if (setToastState == null) {
    throw new Error('Expected context to be defined, did you forget to add the ToastProvider?');
  }

  const showToast = useCallback(
    (config: Config) => {
      setToastState((state) => {
        return {
          toasts: [
            ...state.toasts,
            {
              ...defaultToast,
              ...config,
              id: generate(),
            },
          ],
        };
      });
    },
    [setToastState],
  );
  return showToast;
};

export const useToastActions = () => {
  const setToastState = useContext(ToastActionContext);
  if (setToastState == null) {
    throw new Error('Expected context to be defined, did you forget to add the ToastProvider?');
  }

  const setVisible = useCallback(
    (id: string) => {
      setToastState(({ toasts }) => ({
        toasts: toasts.map((toast) => {
          if (toast.id === id) {
            return {
              ...toast,
              isVisible: true,
            };
          }
          return toast;
        }),
      }));
    },
    [setToastState],
  );

  const hide = useCallback(
    (id: string) => {
      setToastState(({ toasts }) => ({
        toasts: toasts.map((toast) => {
          if (toast.id === id) {
            return {
              ...toast,
              isVisible: false,
            };
          }
          return toast;
        }),
      }));
    },
    [setToastState],
  );

  const remove = useCallback(
    (id: string) => {
      setToastState(({ toasts }) => ({
        toasts: toasts.filter((toast) => toast.id !== id),
      }));
    },
    [setToastState],
  );

  return useMemo(
    () => ({
      setVisible,
      remove,
      hide,
    }),
    [setVisible, hide, remove],
  );
};
