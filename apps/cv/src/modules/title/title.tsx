import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Title({ children }: Props) {
  return <h2 className="u-section-title">{children}</h2>;
}
