import cn from 'classnames';
import { ReactNode, createElement } from 'react';

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
    loading ? <Loading /> : children,
  );
}
