import styled from 'styled-components';
import Link from 'next/link';
import { ReactNode } from 'react';

// @ts-ignore: Fix later
const NavLinkInner = styled.a(({ marginLeft, theme }) => ({
  'color': '#e2e2e2',
  'textDecoration': 'none',
  ':hover': {
    color: '#fff',
  },
  'marginLeft': 0,
  [theme.media.tablet]: {
    marginLeft,
  },
}));

type Props = Readonly<{
  href: string;
  children: ReactNode;
  marginLeft?: string;
  prefetch?: boolean;
  onClick?: () => void;
}>;

export default function NavLink({ href, children, marginLeft, onClick, ...rest }: Props) {
  return (
    <Link href={href} {...rest}>
      {/*  @ts-ignore: Fix later */}
      <NavLinkInner onClick={onClick} marginLeft={marginLeft} href={href}>
        {children}
      </NavLinkInner>
    </Link>
  );
}
