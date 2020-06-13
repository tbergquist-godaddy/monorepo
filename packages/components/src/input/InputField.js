// @flow

import * as React from 'react';
import styled from 'styled-components';
import { useField, ErrorMessage } from 'formik';

import ErrorWrapper from '../form/ErrorWrapper';
import LabelText from '../form/LabelText';
import useId from '../useId';

type Props = {|
  +name: string,
  +label?: string,
  +placeholder?: string,
  +type?: 'text' | 'number' | 'password',
  +dataTest?: string,
|};

const InputField = styled.input.attrs(({ hasError }) => ({
  'aria-invalid': hasError ? 'true' : null,
}))(({ theme, hasError }) => ({
  padding: '0 12px',
  width: '100%',
  height: '46px',
  borderRadius: '3px',
  border: `1px solid ${hasError ? theme.danger : theme.gray}`,
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.normal,
  outline: 'none',
  ':focus': {
    boxShadow:
      !hasError &&
      'rgb(1, 114, 203) 0px 0px 0px 1px inset, rgba(1, 114, 203, 0.15) 0px 0px 0px 3px;',
  },
}));

const Label = styled.label({
  display: 'block',
});

export default function Input({ name, label, dataTest, ...rest }: Props): React.Node {
  const id = useId();
  const [{ onChange, onBlur, value }, { touched, error }] = useField({ name });
  return (
    <Label htmlFor={id}>
      <LabelText>{label}</LabelText>
      <InputField
        data-test={dataTest}
        hasError={touched && error}
        name={name}
        {...rest}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        id={id}
      />
      <ErrorMessage name={name}>{(msg) => <ErrorWrapper>{msg}</ErrorWrapper>}</ErrorMessage>
    </Label>
  );
}
