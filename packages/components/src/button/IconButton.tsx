import cn from 'classnames';
import { createElement, cloneElement, ReactElement } from 'react';

import { ColorScheme, Sizes } from './Button';
import { classNames } from './Button.css';
import { classNames as iconButtonClassNames } from './IconButton.css';
import Loading from './TailSpin';

type Props = Readonly<{
  onClick?: () => void;
  type?: 'button' | 'submit';
  size?: Sizes;
  color?: ColorScheme;
  children: ReactElement;
  loading?: boolean;
  dataTest?: string;
  ariaLabel: string;
  className?: string;
  title?: string;
  href?: string;
}>;

export default function IconButton({
  color = 'primary',
  size = 'normal',
  loading = false,
  children,
  ariaLabel,
  dataTest,
  type = 'button',
  className,
  ...rest
}: Props): JSX.Element {
  const buttonType = (() => {
    if (rest.href != null) {
      return null;
    }
    return type === 'button' ? 'button' : 'submit';
  })();
  const iconClass = cn({
    [iconButtonClassNames.icon]: size !== 'large',
    [iconButtonClassNames.largeIcon]: size === 'large',
  });
  return createElement(
    rest.href != null ? 'a' : 'button',
    {
      'disabled': loading,
      ...rest,
      'aria-label': ariaLabel,
      'data-test': dataTest,
      'type': buttonType,
      'className': cn(
        iconButtonClassNames.base,
        classNames[color],
        iconButtonClassNames[size],
        className,
        {
          [classNames.disabled]: loading,
        },
      ),
    },
    loading ? <Loading className={iconClass} /> : cloneElement(children, { className: iconClass }),
  );
}
