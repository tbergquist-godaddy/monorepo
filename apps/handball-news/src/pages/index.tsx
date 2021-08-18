import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Heading, Container, Box } from '@chakra-ui/react';
import { Trans } from 'next-i18next';
import loadFeeds from 'feed-reader';
import { NewsFeed } from 'news-feed';

export default function Home({ feed }): JSX.Element {
  return (
    <Container maxW="container.xl">
      <Box py={8}>
        <Heading as="h1" fontSize="5xl">
          <Trans i18nKey="common:navbar.brand">Handball news</Trans>
        </Heading>
      </Box>
      <NewsFeed items={feed} />
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  const [feed, translations] = await Promise.all([
    loadFeeds(),
    serverSideTranslations(locale, ['common']),
  ]);
  console.log({ feed });
  return {
    props: {
      ...translations,
      feed,
    },
  };
}
