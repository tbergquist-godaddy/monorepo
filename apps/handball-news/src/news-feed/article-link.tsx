import { Heading, Link, Text, GridItem } from '@chakra-ui/react';
import { Feed } from 'feed-reader';

type Props = {
  item: Feed;
};

export default function ArticleLink({ item }: Props): JSX.Element {
  return (
    <GridItem>
      <Link href={item.link} isExternal>
        <Heading>{item.title}</Heading>
      </Link>
      <Text>{item.content}</Text>
    </GridItem>
  );
}
