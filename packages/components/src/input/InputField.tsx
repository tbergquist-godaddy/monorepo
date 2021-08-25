import { InputHTMLAttributes, ReactNode } from 'react';
import { useUIDSeed } from 'react-uid';
import cn from 'classnames';

import ErrorWrapper from '../form/ErrorWrapper';
import LabelText from '../form/LabelText';
import { classNames } from './InputField.css';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  dataTest?: string;
  error?: ReactNode;
  labelClassName?: string;
}

export default function InputField({
  label,
  dataTest,
  error,
  className,
  labelClassName,
  ...rest
}: Props): JSX.Element {
  const seed = useUIDSeed();
  const id = rest.id ?? seed('input');
  return (
    <>
      <label className={cn(classNames.label, labelClassName)}>
        <LabelText>{label}</LabelText>
        <input
          aria-invalid={Boolean(error)}
          className={cn(classNames.input, className)}
          data-test={dataTest}
          {...rest}
          aria-describedby={error == null ? null : `${id}-error-message`}
        />
      </label>
      {error && <ErrorWrapper id={`${id}-error-message`}>{error}</ErrorWrapper>}
    </>
  );
}
