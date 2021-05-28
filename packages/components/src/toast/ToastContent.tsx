import { useRef, useEffect } from 'react';

import Alert from '../alert/Alert';
import { classNames } from './Toast.css';
import { useToastActions } from './ToastContext';

type Props = Readonly<{
  type: 'success' | 'danger';
  timeout?: number;
  isVisible: boolean;
  text: string | null;
  toastId: string;
}>;

export default function ToastContent(props: Props) {
  const toastRef = useRef(null);
  const { hide, remove, setVisible } = useToastActions();
  const { timeout, toastId } = props;

  useEffect(() => {
    const timeoutRef = setTimeout(() => {
      hide(toastId);
      setTimeout(() => {
        remove(toastId);
      }, 300);
    }, timeout);
    return () => {
      clearTimeout(timeoutRef);
    };
  }, [timeout, hide, remove, toastId]);

  useEffect(() => {
    // This component is now mounted, we are ready to animate
    const frame = requestAnimationFrame(() => {
      setVisible(toastId);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [setVisible, toastId]);
  return (
    <div
      className={props.isVisible ? classNames.toastVisible : classNames.toastHidden}
      ref={toastRef}
      role="alert"
    >
      <Alert type={props.type}>{props.text}</Alert>
    </div>
  );
}
