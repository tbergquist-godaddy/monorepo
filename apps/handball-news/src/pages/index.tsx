import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Parser from 'rss-parser';
import { Heading, Container } from '@chakra-ui/react';
import { Trans } from 'next-i18next';

export default function Home({ feed: { items } }): JSX.Element {
  return (
    <Container maxW="container.xl">
      <Heading as="h1" fontSize="5xl">
        <Trans i18nKey="common:navbar.brand">Handball news</Trans>
      </Heading>
      {items.map((item) => (
        <div key={item.guid} style={{ margin: '20px 0' }}>
          <Heading>{item.title}</Heading>
          <div dangerouslySetInnerHTML={{ __html: item.content }} />
        </div>
      ))}
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  const parser = new Parser();
  const [feed, translations] = await Promise.all([
    parser.parseURL('https://www.handball-planet.com/feed/'),
    serverSideTranslations(locale, ['common']),
  ]);
  return {
    props: {
      ...translations,
      feed,
    },
  };
}
