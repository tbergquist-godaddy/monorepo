import ImageSummary from 'modules/image-summary';
import { Heading, Box } from '@tbergq/components';
import { graphql, useFragment } from 'react-relay';
import { episode$key } from '__generated__/episode.graphql';
import { Maybe } from 'types';

import ActionBar from './action-bar';
import { Actions } from '../models/use-episode';

type Props = {
  episodeRef: episode$key;
  isMutating: Maybe<boolean>;
  actions: Actions;
};

export default function Episode({ episodeRef, isMutating, actions }: Readonly<Props>): JSX.Element {
  const data = useFragment(
    graphql`
      fragment episode on Episode {
        name
        seasonAndNumber
        ...imageSummary
        ...actionBar
      }
    `,
    episodeRef,
  );
  return (
    <>
      <Box paddingY="normal">
        <Heading>
          {data?.seasonAndNumber} - {data?.name}
        </Heading>
      </Box>
      <ImageSummary alt={data?.name ?? ''} dataRef={data} />
      <Box paddingY="normal">
        <ActionBar actions={actions} isMutating={isMutating} dataRef={data} />
      </Box>
    </>
  );
}
