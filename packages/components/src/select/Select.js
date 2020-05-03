// @flow strict

import * as React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import { MdExpandMore } from 'react-icons/md';
import { useField, ErrorMessage } from 'formik';

import ErrorWrapper from '../form/ErrorWrapper';
import LabelText from '../form/LabelText';

const Label = styled.label({
  display: 'block',
});

const SelectWrapper = styled.div({
  position: 'relative',
});

const StyledSelect = styled.select(({ theme, hasError, isPlaceholder }) => ({
  cursor: 'pointer',
  height: '46px',
  paddingLeft: '12px',
  paddingRight: '40px',
  width: '100%',
  borderRadius: '3px',
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.normal,
  outline: 'none',
  appearance: 'none',
  border: `1px solid ${hasError ? theme.danger : theme.gray}`,
  color: isPlaceholder ? theme.secondary : theme.black,
  ':focus': {
    boxShadow:
      !hasError &&
      'rgb(1, 114, 203) 0px 0px 0px 1px inset, rgba(1, 114, 203, 0.15) 0px 0px 0px 3px;',
  },
}));

const StyledChevron = styled(MdExpandMore)({
  position: 'absolute',
  height: '20px',
  width: '20px',
  top: '15px',
  right: '10px',
});

type Option = {
  +value: string,
  +label: string,
};
type Props = {
  +options: $ReadOnlyArray<Option>,
  +name: string,
  +label?: string,
  +placeholder?: string,
};

export default function Select({ options, name, label, placeholder }: Props): React.Node {
  const [id] = React.useState(v4());
  const [{ onChange, onBlur, value }, { touched, error }] = useField({ name });

  return (
    <Label htmlFor={id}>
      <LabelText>{label}</LabelText>
      <SelectWrapper>
        <StyledSelect
          hasError={touched && error}
          name={name}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          isPlaceholder={value === ''}
        >
          <option value="">{placeholder}</option>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
        <StyledChevron />
      </SelectWrapper>
      <ErrorMessage name={name}>{msg => <ErrorWrapper>{msg}</ErrorWrapper>}</ErrorMessage>
    </Label>
  );
}
