// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import useId from '../useId';

type Props = {
  +label?: string,
  +checked?: boolean,
};

const Label = styled.label({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const StyledCheckbox = styled.span`
  position: relative;
  height: 16px;
  width: 16px;
  border: 2px solid ${({ theme }) => theme.secondary};
  border-radius: 3px;
  background-color: #fff;
  margin-right: 8px;
  :after {
    content: '';
    position: absolute;
    height: 6px;
    width: 3px;
    top: 1px;
    left: 3px;
    transition: opacity 0.3s ease-in;
    opacity: 0;
  }
  input:checked ~ & {
    border: 2px solid ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary};
    &:after {
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 1;
    }
  }
`;

const Input = styled.input({
  position: 'absolute',
  opacity: 0,
});

const LabelWrapper = styled.span({
  lineHeight: '21px',
});

export default function Checkbox({ label, checked = false }: Props): React.Node {
  const id = useId();
  const [isChecked, setIsChecked] = React.useState(checked);
  return (
    <Label htmlFor={id}>
      <Input
        checked={isChecked}
        onChange={e => setIsChecked(e.target.checked)}
        id={id}
        type="checkbox"
      />
      <StyledCheckbox />
      {label != null && <LabelWrapper>{label}</LabelWrapper>}
    </Label>
  );
}
