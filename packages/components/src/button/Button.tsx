import { MouseEvent, ReactNode, createElement } from 'react';
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
  className?: string;
  href?: string;
}>;

export default function Button({
  size = 'normal',
  color = 'primary',
  loading,
  children,
  dataTest,
  ariaLabel,
  type,
  className,
  href,
  ...rest
}: Props): JSX.Element {
  const buttonType = (() => {
    if (href != null) {
      return null;
    }
    return type === 'button' ? 'button' : 'submit';
  })();
  return createElement(
    href != null ? 'a' : 'button',
    {
      'aria-label': ariaLabel,
      'data-test': dataTest,
      'disabled': loading === true,
      ...rest,
      'type': buttonType,
      'className': cn(classNames.base, classNames[color], classNames[size], className, {
        [classNames.disabled]: loading,
        [classNames.link]: href != null,
      }),
      'href': href,
    },
    loading === true ? <Loading /> : children,
  );
}
