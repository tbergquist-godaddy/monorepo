import { HTMLProps, ReactNode, forwardRef } from 'react';
import cn from 'classnames';

import { classNames } from './link.css';
import { atoms, ColorSchemes } from '../sprinkles.css';

export interface Props extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  color?: ColorSchemes;
}

function Link(
  { children, className, color = 'black', ...rest }: Readonly<Props>,
  ref,
): JSX.Element {
  return (
    <a ref={ref} {...rest} className={cn(className, classNames.link, atoms({ color }))}>
      {children}
    </a>
  );
}
export default forwardRef(Link);
