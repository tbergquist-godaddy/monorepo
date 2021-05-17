import { ReactNode } from 'react';

import { classNames } from './Alert.css';

type AlertType = 'success' | 'danger';
type Props = {
  children: ReactNode;
  type: AlertType;
};

export default function Alert({ children, type = 'success' }: Props) {
  return (
    <div role="alert" className={classNames[type]}>
      {children}
    </div>
  );
}
