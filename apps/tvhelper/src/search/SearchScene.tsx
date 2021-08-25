import { useState } from 'react';
import { Heading, Container, Spinner, Box } from '@tbergq/components';
import { Formik } from 'formik';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import SearchForm from './SearchForm';

const SearchQuery = dynamic(() => import('./SearchQuery'), {
  loading: () => (
    <Box display="flex" justifyContent="center">
      <Spinner />
    </Box>
  ),
});

type Props = {
  query: string;
  token: string;
};

function SearchScene(props: Props): JSX.Element {
  const { push, pathname } = useRouter();

  const [query, setQuery] = useState(props.query ?? '');
  const onSubmit = ({ query }, { setSubmitting }) => {
    setQuery(query);
    const path = {
      pathname,
      query: { query },
    };
    push(path, path, { shallow: true });
    setSubmitting(false);
  };

  return (
    <>
      <Container>
        <Box paddingY="xxxLarge">
          <Heading>Search tv show</Heading>
          <Formik onSubmit={onSubmit} initialValues={{ query }}>
            <SearchForm />
          </Formik>
        </Box>
      </Container>
      <Box paddingY="xxxLarge">
        <Container>{query && <SearchQuery query={query} />}</Container>
      </Box>
    </>
  );
}

export default SearchScene;
