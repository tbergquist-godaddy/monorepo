import { HTMLProps, ReactNode } from 'react';
import cn from 'classnames';

import { classNames } from './link.css';
import { atoms, ColorSchemes } from '../sprinkles.css';

interface Props extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  color?: ColorSchemes;
}

export default function Link({
  children,
  className,
  color = 'black',
  ...rest
}: Readonly<Props>): JSX.Element {
  return (
    <a {...rest} className={cn(className, classNames.link, atoms({ color }))}>
      {children}
    </a>
  );
}
