import { graphql, useFragment } from 'react-relay';
import Link from 'next/link';
import Image from 'next/image';
import type { TvShowListItem_data$key as TvShow } from '__generated__/TvShowListItem_data.graphql';

import { classNames } from './TvShowListItem.css';

type Props = {
  data: TvShow | null;
  width?: number;
};

function TvShowListItem(props: Props): JSX.Element {
  const data = useFragment(
    graphql`
      fragment TvShowListItem_data on TvShow {
        id
        name
        status
        rating
        image {
          medium
        }
      }
    `,
    props.data,
  );

  const status = data?.status ?? '';
  const name = data?.name ?? '';
  const rating = data?.rating ?? '';
  const tvShowId = data?.id;
  const src = data?.image?.medium;

  if (tvShowId == null) {
    return null;
  }
  return (
    <Link href={`/tvShow?id=${tvShowId}`}>
      <a className={classNames.link} href={`/tvShow?id=${tvShowId}`}>
        <div className={classNames.container}>
          {src != null && (
            <Image
              className={classNames.image}
              alt={name}
              layout="fill"
              src={data?.image?.medium}
            />
          )}
          <div className={classNames.bottomSheet}>
            <div className={classNames.text}>{`${name} - ${rating}`}</div>
            <div className={classNames.text}>{status}</div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default TvShowListItem;
