import { renderHook, act } from '@testing-library/react-hooks';

import useToggle from '../use-toggle';

it('toggles the value', () => {
  const { result } = renderHook(() => useToggle(false));
  const {
    models: { isOn },
    operations: { toggle },
  } = result.current;
  expect(isOn).toBe(false);

  act(() => {
    toggle();
  });

  expect(result.current.models.isOn).toBe(true);
});

it('sets the correct initial values', () => {
  const { result } = renderHook(() => useToggle(false));
  expect(result.current.models.isOn).toBe(false);

  const { result: r2 } = renderHook(() => useToggle(true));
  expect(r2.current.models.isOn).toBe(true);
});
