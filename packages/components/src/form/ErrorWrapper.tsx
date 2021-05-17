import { ReactNode } from 'react';

import { classNames } from './form.css';

type Props = Readonly<{
  children: ReactNode;
  id: string;
}>;

export default function ErrorWrapper({ children, id }: Props) {
  return (
    <div id={id} aria-live="assertive" className={classNames.error}>
      {children}
    </div>
  );
}
