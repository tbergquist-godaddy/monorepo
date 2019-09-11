// @flow

import * as React from 'react';
import { Input, Button } from '@tbergq/components';
import styled from 'styled-components';
import { useRouter } from 'next/router';

type Props = {|
  +onSubmit: string => void,
|};

const ButtonWrapper = styled('div')({
  marginTop: '8px',
  justifyContent: 'flex-end',
  display: 'flex',
});

export default function SearchForm(props: Props) {
  const router = useRouter();
  const [query, onQueryChange] = React.useState(router.query?.query ?? '');

  function onSubmit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    props.onSubmit(query);
  }

  return (
    <form onSubmit={onSubmit} action="/api/search" method="post">
      <Input
        name="query"
        dataTest="SearchFormInput"
        value={query}
        onChange={onQueryChange}
        label="Search"
      />
      <ButtonWrapper>
        <Button dataTest="SearchFormButton" submit={true}>
          Search
        </Button>
      </ButtonWrapper>
    </form>
  );
}
