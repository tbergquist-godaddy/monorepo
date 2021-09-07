import { Image } from 'feed-reader';
import { Img as ChakraImage } from '@chakra-ui/react';
import { ClassNames } from '@emotion/react';

type Props = {
  image: Image | null;
};

export default function ArticleLink({ image }: Props): JSX.Element | null {
  if (image == null) {
    return null;
  }
  return (
    <ClassNames>
      {({ css }) => {
        return (
          <ChakraImage
            src={image.url}
            alt=""
            className={css`
              border-top-right-radius: var(--chakra-radii-base);
              border-top-left-radius: var(--chakra-radii-base);
              height: auto;
              width: 100%;
            `}
          />
        );
      }}
    </ClassNames>
  );
}
