import { Heading, Link, Text, GridItem, Box } from '@chakra-ui/react';
import { Feed } from 'feed-reader';
import { ClassNames } from '@emotion/react';
import { format } from 'date-fns';

import ArticleImage from './article-image';

type Props = {
  item: Feed;
};

export default function ArticleLink({ item }: Props): JSX.Element {
  return (
    <ClassNames>
      {({ css }) => (
        <GridItem
          className={css`
            &:focus-within {
              transform: scale(1.01);
            }
          `}
          bg="white"
          borderRadius="base"
        >
          <Box position="relative">
            <ArticleImage image={item.image} />
            <Box p="2">
              <Link
                className={css`
                  &:after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                  }
                `}
                href={item.link}
                isExternal
              >
                <Heading>{item.title}</Heading>
              </Link>
              <Box display="flex" gap="normal">
                {item.timestamp != null && (
                  <Text fontSize="sm" color="gray.600" marginEnd={2}>
                    {format(item.timestamp, 'PP')}
                  </Text>
                )}
                <Text fontSize="sm" color="gray.600">
                  {item.source}
                </Text>
              </Box>
              <Text>{item.content}</Text>
            </Box>
          </Box>
        </GridItem>
      )}
    </ClassNames>
  );
}
