import { useState, useEffect, ChangeEvent } from 'react';
import { useUIDSeed } from 'react-uid';
import cn from 'classnames';

import { classNames } from './Checkbox.css';

type Props = {
  label?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  tabIndex?: number;
};

export default function Checkbox({ label, checked = false, onChange, ...rest }: Props) {
  const seed = useUIDSeed();
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange != null) {
      onChange(e);
    } else {
      setIsChecked(e.target.checked);
    }
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <label htmlFor={seed('checkbox')} className={classNames.label}>
      <input
        {...rest}
        checked={isChecked}
        onChange={handleChange}
        id={seed('checkbox')}
        type="checkbox"
        className={classNames.input}
      />
      <span
        className={cn(classNames.styledCheckbox, {
          [classNames.checked]: isChecked,
        })}
      />
      {label != null && <span className={classNames.labelWrapper}>{label}</span>}
    </label>
  );
}
