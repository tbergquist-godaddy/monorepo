import { useState } from 'react';

import { WithOperation } from './types';

type Models = {
  isOn: boolean;
};
type Operations = {
  toggle: () => void;
};

export default function useToggle(initialValue?: boolean): WithOperation<Models, Operations> {
  const [isOn, setValue] = useState(initialValue);

  const toggle = () => setValue((value) => !value);

  return {
    models: { isOn },
    operations: { toggle },
  };
}
