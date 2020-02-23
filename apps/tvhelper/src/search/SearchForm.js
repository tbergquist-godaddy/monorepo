// @flow strict-local

import * as React from 'react';
import { InputField, Button } from '@tbergq/components';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';

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

  function onSubmit({ query }) {
    props.onSubmit(query);
  }

  return (
    <Formik onSubmit={onSubmit} initialValues={{ query: router.query?.query ?? '' }}>
      <Form action="/" method="get">
        <InputField name="query" dataTest="SearchFormInput" label="Search" />
        <ButtonWrapper>
          <Button dataTest="SearchFormButton" submit={true}>
            Search
          </Button>
        </ButtonWrapper>
      </Form>
    </Formik>
  );
}
