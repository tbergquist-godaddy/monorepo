// @flow

import * as React from 'react';
import { Input, Button } from '@tbergq/tvhelper-components';
import styled from 'styled-components';

type Props = {|
  +onSubmit: string => void,
|};

const ButtonWrapper = styled('div')({
  marginTop: '8px',
  justifyContent: 'flex-end',
  display: 'flex',
});

export default function SearchForm(props: Props) {
  const [query, onQueryChange] = React.useState('');

  function onChange(e: SyntheticInputEvent<HTMLInputElement>) {
    onQueryChange(e.target.value);
  }
  function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onSubmit(query);
  }

  return (
    <form onSubmit={onSubmit}>
      <Input value={query} onChange={onChange} label="Search" />
      <ButtonWrapper>
        <Button submit={true}>Search</Button>
      </ButtonWrapper>
    </form>
  );
}
