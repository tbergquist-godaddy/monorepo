import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Heading, Container, Box } from '@chakra-ui/react';
import { Trans } from 'next-i18next';
import loadFeeds, { Feed } from 'feed-reader';
import { NewsFeed } from 'news-feed';
import log from 'logger';

type Props = {
  feed: ReadonlyArray<Feed>;
};

export default function Home({ feed }: Props): JSX.Element {
  return (
    <Container maxW="container.xl">
      <Box py={8}>
        <Heading as="h1" fontSize="5xl">
          <Trans i18nKey="index:page.title">News</Trans>
        </Heading>
      </Box>
      <NewsFeed items={feed} />
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  log('running getStaticProps in pages/index');
  try {
    log('locale is', locale);
    const [feed, translations] = await Promise.all([
      loadFeeds(locale),
      serverSideTranslations(locale, ['common', 'index']),
    ]);
    log('re-fetched feeds successfully');
    return {
      props: {
        ...translations,
        feed,
      },
      revalidate: 60 * 5,
    };
  } catch (e) {
    log('Failed to get static props', e);
    throw e;
  }
}
