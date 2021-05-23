import { ReactNode } from 'react';
import cn from 'classnames';

import { classNames } from './Container.css';

type Props = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export default function Container({ children, className }: Props) {
  return <div className={cn(classNames.container, className)}>{children}</div>;
}
