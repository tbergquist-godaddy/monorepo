import { useState } from 'react';
import { Heading, Container, Spinner } from '@tbergq/components';
import { Formik } from 'formik';
import Box from 'components/Box';
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

function SearchScene(props: Props) {
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
        <Box py={8}>
          <Heading>Search tv show</Heading>
          <Formik onSubmit={onSubmit} initialValues={{ query }}>
            <SearchForm />
          </Formik>
        </Box>
      </Container>
      <Box py={8}>
        <Container>{query && <SearchQuery query={query} />}</Container>
      </Box>
    </>
  );
}

export default SearchScene;
