import { InputHTMLAttributes, ReactNode } from 'react';
import { useUIDSeed } from 'react-uid';
import cn from 'classnames';

import ErrorWrapper from '../form/ErrorWrapper';
import LabelText from '../form/LabelText';
import { classNames } from './InputField.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  dataTest?: string;
  error?: ReactNode;
}

export default function Input({ label, dataTest, error, className, ...rest }: Props) {
  const seed = useUIDSeed();
  const id = rest.id ?? seed('input');
  return (
    <>
      <label className={classNames.label}>
        <LabelText>{label}</LabelText>
        <input
          aria-invalid={error != null}
          className={cn(classNames.input, className)}
          data-test={dataTest}
          {...rest}
          aria-describedby={error == null ? null : `${id}-error-message`}
        />
      </label>
      {error != null && <ErrorWrapper id={`${id}-error-message`}>{error}</ErrorWrapper>}
    </>
  );
}
