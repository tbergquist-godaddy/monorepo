import { ReactNode } from 'react';

import { atoms } from '../sprinkles.css';

type Atoms = Parameters<typeof atoms>[0];

interface Props extends Atoms {
  children: ReactNode;
  className?: string;
  as?: string;
}

export default function Box({ children, className, as = 'div', ...rest }: Props): JSX.Element {
  const atomProps: Record<string, unknown> = {};
  const spreadProps: Record<string, unknown> = {};
  const Component: any = as;

  for (const key in rest) {
    if (atoms.properties.has(key as keyof Atoms)) {
      atomProps[key] = rest[key];
    } else {
      spreadProps[key] = rest[key];
    }
  }

  const atomicClasses = atoms(atomProps);
  const classNames = [atomicClasses, className].filter(Boolean).join(' ');
  return (
    <Component {...spreadProps} className={classNames || null}>
      {children}
    </Component>
  );
}
