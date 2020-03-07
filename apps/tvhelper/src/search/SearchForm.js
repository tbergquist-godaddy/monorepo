// @flow strict-local

import * as React from 'react';
import { InputField, Button } from '@tbergq/components';
import styled from 'styled-components';
import { Form } from 'formik';

type Props = {};

const ButtonWrapper = styled('div')({
  marginTop: '8px',
  justifyContent: 'flex-end',
  display: 'flex',
});

export default (function SearchForm() {
  return (
    <Form action="/" method="get">
      <InputField name="query" dataTest="SearchFormInput" label="Search" />
      <ButtonWrapper>
        <Button dataTest="SearchFormButton" submit={true}>
          Search
        </Button>
      </ButtonWrapper>
    </Form>
  );
}: React.ComponentType<Props>);
