import { MouseEvent, ReactNode } from 'react';
import cn from 'classnames';

import Loading from '../loading/Loading';
import { classNames } from './Button.css';

export type ColorScheme = 'primary' | 'secondary' | 'success' | 'danger';
export type Sizes = 'small' | 'normal' | 'large';

type Props = Readonly<{
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
  type?: 'button' | 'submit';
  size?: Sizes;
  color?: ColorScheme;
  children: ReactNode;
  loading?: boolean;
  dataTest?: string;
  ariaLabel?: string;
}>;

export default function Button({
  size = 'normal',
  color = 'primary',
  loading,
  children,
  dataTest,
  ariaLabel,
  type = 'button',
  ...rest
}: Props) {
  return (
    <button
      aria-label={ariaLabel}
      data-test={dataTest}
      disabled={loading === true}
      {...rest}
      type={type === 'button' ? 'button' : 'submit'}
      className={cn(classNames.base, classNames[color], classNames[size], {
        [classNames.disabled]: loading,
      })}
    >
      {loading === true ? <Loading /> : children}
    </button>
  );
}
