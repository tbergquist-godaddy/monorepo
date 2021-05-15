import { InputField, Button } from '@tbergq/components';
import styled from 'styled-components';
import { Form, useFormikContext } from 'formik';

const ButtonWrapper = styled('div')(({ theme }) => ({
  'marginTop': '8px',
  '& > :first-child': {
    marginBottom: '16px',
  },
  '& > :last-child': {
    alignSelf: 'flex-end',
  },
  'flexDirection': 'column',
  'display': 'flex',
  [theme.media.largeMobile]: {
    'flexDirection': 'row',
    'justifyContent': 'flex-start',
    'alignItems': 'flex-end',
    '& > :first-child': {
      flex: 1,
      marginRight: '16px',
      marginBottom: 0,
    },
  },
}));

export default function SearchForm() {
  const { isSubmitting } = useFormikContext();
  return (
    <Form action="/" method="get">
      <ButtonWrapper>
        <InputField name="query" dataTest="SearchFormInput" label="Search" />
        <Button loading={isSubmitting} dataTest="SearchFormButton" type="submit">
          Search
        </Button>
      </ButtonWrapper>
    </Form>
  );
}
