import cn from 'classnames';
import { ReactNode } from 'react';

import { ColorScheme, Sizes } from './Button';
import Loading from '../loading/Loading';
import { classNames } from './Button.css';
import { classNames as iconButtonClassNames } from './IconButton.css';

type Props = Readonly<{
  onClick?: () => void;
  type?: 'button' | 'submit';
  size?: Sizes;
  color?: ColorScheme;
  children: ReactNode;
  loading?: boolean;
  dataTest?: string;
  ariaLabel: string;
}>;

export default function IconButton({
  color = 'primary',
  size = 'normal',
  loading = false,
  children,
  ariaLabel,
  dataTest,
  type = 'button',
  ...rest
}: Props) {
  return (
    <button
      disabled={loading}
      {...rest}
      aria-label={ariaLabel}
      data-test={dataTest}
      type={type === 'button' ? 'button' : 'submit'}
      className={cn(iconButtonClassNames.base, classNames[color], iconButtonClassNames[size], {
        [classNames.disabled]: loading,
      })}
    >
      {loading ? <Loading /> : children}
    </button>
  );
}
