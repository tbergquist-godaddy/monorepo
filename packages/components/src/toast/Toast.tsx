import ToastContent from './ToastContent';
import { classNames } from './Toast.css';
import { useToastListState } from './ToastContext';

export default function Toast() {
  const toasts = useToastListState();

  return (
    <div className={classNames.toastWrapper}>
      {toasts.map((toast) => {
        return (
          <ToastContent
            key={toast.id}
            toastId={toast.id}
            text={toast.text}
            isVisible={toast.isVisible}
            type={toast.type ?? 'success'}
            timeout={toast.timeout}
          />
        );
      })}
    </div>
  );
}
