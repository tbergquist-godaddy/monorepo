import { ReactNode, createElement } from 'react';

import { classNames } from './Heading.css';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Props = Readonly<{
  children: ReactNode;
  level?: HeadingLevel;
  as?: string;
}>;

export default function Heading({ children, level = 'h1', as = level }: Props) {
  return createElement(as, {
    children,
    className: classNames[level],
  });
}
