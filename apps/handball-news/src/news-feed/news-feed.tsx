import { Grid } from '@chakra-ui/react';
import { Feed } from 'feed-reader';

import ArticleLink from './article-link';

type Props = {
  items: ReadonlyArray<Feed>;
};

export default function NewsFeed({ items }: Props): JSX.Element {
  return (
    <Grid templateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr 1fr']} gap={8}>
      {items.map((item) => (
        <ArticleLink key={item.guid} item={item} />
      ))}
    </Grid>
  );
}
