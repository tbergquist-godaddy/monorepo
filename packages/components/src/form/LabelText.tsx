import { ReactNode } from 'react';

import { classNames } from './form.css';

type Props = Readonly<{
  children: ReactNode;
}>;

export default function LabelText({ children }: Props) {
  return <div className={classNames.label}>{children}</div>;
}
