import Link from 'next/link';
import { ReactNode } from 'react';

import { classNames } from './NavLink.css';

type Props = Readonly<{
  href: string;
  children: ReactNode;
  prefetch?: boolean;
  onClick?: () => void;
}>;

export default function NavLink({ href, children, onClick, ...rest }: Props): JSX.Element {
  return (
    <Link href={href} {...rest}>
      <a className={classNames.navLink} onClick={onClick} href={href}>
        {children}
      </a>
    </Link>
  );
}
