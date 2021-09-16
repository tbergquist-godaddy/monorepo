import { ReactNode } from 'react';
import { Box } from '@tbergq/components';

type Props = {
  children: ReactNode;
};

export default function NavItem({ children }: Props): JSX.Element {
  return <Box paddingY={{ mediumMobile: 'small', tablet: 'none' }}>{children}</Box>;
}
