// @flow strict

import * as React from 'react';
import styled from 'styled-components';

import useId from '../useId';

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

type Props = {
  +label?: string,
  +checked?: boolean,
  +onChange?: (e: SyntheticEvent<HTMLInputElement>) => void,
  +tabIndex?: string,
};

export default function Checkbox({ label, checked = false, onChange, ...rest }: Props): React.Node {
  const id = useId();
  const [isChecked, setIsChecked] = React.useState(checked);
  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    if (onChange != null) {
      onChange(e);
    } else {
      // $FlowExpectedError: checked is a property on a checbox
      setIsChecked(e.target.checked);
    }
  };
  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);
  return (
    <Label htmlFor={id}>
      <Input {...rest} checked={isChecked} onChange={handleChange} id={id} type="checkbox" />
      <StyledCheckbox />
      {label != null && <LabelWrapper>{label}</LabelWrapper>}
    </Label>
  );
}
