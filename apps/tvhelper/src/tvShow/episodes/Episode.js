// @flow strict-local

import * as React from 'react';
import {
  graphql,
  createFragmentContainer,
  type RelayProp,
  type FragmentContainerType,
} from '@tbergq/relay';
import { format } from 'date-fns';
import { isLoggedIn } from '@tbergq/utils';
import styled from 'styled-components';
import { Checkbox } from '@tbergq/components';

import type { Episode_episode as EpisodeType } from './__generated__/Episode_episode.graphql';
import markAsWatchedMutation from './mutation/MarkAsWatched';
import deleteAsWatchedMutation from './mutation/DeleteAsWatched';

type Props = {|
  +episode: ?EpisodeType,
  +relay: RelayProp,
|};

const ListItem = styled.button(({ theme }) => ({
  border: 'none',
  background: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: theme.spacing.increased,
  borderBottom: `1px solid ${theme.gray}`,
  marginTop: '1px',
  marginBottom: '-1px',
  fontFamily: theme.fontFamily,
  fontSize: theme.fontSize.normal,
  cursor: 'pointer',
  ':hover, :focus': {
    backgroundColor: theme.gray,
    outline: 'none',
  },
}));

const Description = styled.span(({ theme }) => ({
  color: theme.secondary,
  fontSize: theme.fontSize.small,
  textAlign: 'left',
}));

const Title = styled.span(() => ({
  fontWeight: '500',
  textAlign: 'left',
}));

const TextWrapper = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  marginRight: theme.spacing.increased,
}));

const Episode = (props: Props) => {
  const [isMutating, setIsMutating] = React.useState(false);
  const name = props.episode?.name ?? '';
  const airdate = props.episode?.airdate ?? null;
  const rawDate = airdate != null ? new Date(airdate) : null;
  const date = rawDate !== null ? format(rawDate, 'do MMM yyyy') : '';
  const seasonAndNumber = props.episode?.seasonAndNumber ?? '';
  const summary = props.episode?.summary ?? '';
  const watched = props.episode?.watched === true;

  const markAsWatched = () => {
    const episodeId = props.episode?.id;
    if (episodeId != null) {
      markAsWatchedMutation(
        props.relay.environment,
        {
          episodeId,
        },
        () => {
          setIsMutating(false);
        },
      );
    }
  };

  const unMarkAsWatched = () => {
    const episodeId = props.episode?.id;
    if (episodeId != null) {
      deleteAsWatchedMutation(
        props.relay.environment,
        {
          episodeId,
        },
        () => {
          setIsMutating(false);
        },
      );
    }
  };
  function toggleWatched() {
    if (!isMutating) {
      setIsMutating(true);
      if (!watched) {
        markAsWatched();
      } else {
        unMarkAsWatched();
      }
    }
  }

  const onClick = e => {
    e.stopPropagation();
    if (isLoggedIn()) {
      toggleWatched();
    }
  };
  return (
    <ListItem type="button" onClick={onClick} onChangeCapture={onClick}>
      <TextWrapper>
        <Title>{`${seasonAndNumber} - ${name} - ${date}`}</Title>
        <Description>{summary}</Description>
      </TextWrapper>
      {isLoggedIn() && <Checkbox tabIndex="-1" checked={watched} />}
    </ListItem>
  );
};

export default (createFragmentContainer(Episode, {
  episode: graphql`
    fragment Episode_episode on Episode {
      id
      name
      seasonAndNumber
      airdate
      summary
      watched
    }
  `,
}): FragmentContainerType<Props, React.Node>);
