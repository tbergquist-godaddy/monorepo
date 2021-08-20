import { Image } from 'feed-reader';
import NextImage from 'next/image';
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
          <NextImage
            src={image.url}
            width={image.width}
            height={image.height}
            layout="intrinsic"
            className={css`
              border-radius: var(--chakra-radii-base);
            `}
          />
        );
      }}
    </ClassNames>
  );
}
