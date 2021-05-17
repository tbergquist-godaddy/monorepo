import { SelectHTMLAttributes } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { useUIDSeed } from 'react-uid';

import ErrorWrapper from '../form/ErrorWrapper';
import LabelText from '../form/LabelText';
import { classNames } from './Select.css';

type Option = Readonly<{
  value: string;
  label: string;
}>;

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: ReadonlyArray<Option>;
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
}

export default function Select({
  options,
  name,
  label,
  placeholder,
  error,
  ...rest
}: Readonly<Props>) {
  const seed = useUIDSeed();
  const id = seed('select');

  return (
    <>
      <label className={classNames.label}>
        <LabelText>{label}</LabelText>
        <div className={classNames.wrapper}>
          <select
            className={classNames.select}
            aria-invalid={error != null}
            name={name}
            {...rest}
            aria-describedby={error == null ? null : `${id}-error-message`}
          >
            {placeholder && <option value="">{placeholder}</option>}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <MdExpandMore className={classNames.icon} />
        </div>
      </label>
      {error && <ErrorWrapper id={`${id}-error-message`}>{error}</ErrorWrapper>}
    </>
  );
}
