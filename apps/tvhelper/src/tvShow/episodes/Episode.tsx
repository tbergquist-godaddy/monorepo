import { useState } from 'react';
import { graphql, useFragment } from 'react-relay';
import { format } from 'date-fns';
import { isLoggedIn } from '@tbergq/utils';
import styled from 'styled-components';
import { Checkbox } from '@tbergq/components';
import { Episode_episode$key as EpisodeType } from '__generated__/Episode_episode.graphql';

import useMarkAsWatchedMutation from './mutation/useMarkAsWatched';
import useDeleteAsWatchedMutation from './mutation/useDeleteAsWatched';

type Props = Readonly<{
  episode: EpisodeType;
}>;

const ListItem = styled.button(({ theme }) => ({
  'border': 'none',
  'background': 'none',
  'display': 'flex',
  'justifyContent': 'space-between',
  'alignItems': 'center',
  'width': '100%',
  'padding': theme.spacing.increased,
  'borderBottom': `1px solid ${theme.gray}`,
  'marginTop': '1px',
  'marginBottom': '-1px',
  'fontFamily': theme.fontFamily,
  'fontSize': theme.fontSize.normal,
  'cursor': 'pointer',
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

const Title = styled.span`
  font-weight: 500;
  text-align: left;
`;

const TextWrapper = styled.span(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  marginRight: theme.spacing.increased,
}));

const Episode = (props: Props) => {
  const data = useFragment(
    graphql`
      fragment Episode_episode on Episode {
        id
        name
        seasonAndNumber
        airdate
        summary
        watched
      }
    `,
    props.episode,
  );
  const [deleteAsWatchedMutation, deleteLoading] = useDeleteAsWatchedMutation();
  const [markAsWatchedMutation, markLoading] = useMarkAsWatchedMutation();

  const isMutating = deleteLoading || markLoading;
  const name = data?.name ?? '';
  const airdate = typeof data?.airdate === 'string' ? data?.airdate : null;
  const rawDate = airdate != null ? new Date(airdate) : null;
  const date = rawDate !== null ? format(rawDate, 'do MMM yyyy') : '';
  const seasonAndNumber = data?.seasonAndNumber ?? '';
  const summary = data?.summary ?? '';
  const watched = data?.watched === true;

  const markAsWatched = () => {
    const episodeId = data?.id;
    if (episodeId != null) {
      markAsWatchedMutation({
        variables: { episodeId },
        optimisticResponse: {
          markAsWatched: {
            success: true,
            episode: {
              id: episodeId,
              watched: true,
            },
          },
        },
      });
    }
  };

  const unMarkAsWatched = () => {
    const episodeId = data?.id;
    if (episodeId != null) {
      deleteAsWatchedMutation({
        variables: { episodeId },
        optimisticResponse: {
          deleteWatchedEpisode: {
            success: true,
            episode: {
              id: episodeId,
              watched: false,
            },
          },
        },
      });
    }
  };
  function toggleWatched() {
    if (!isMutating) {
      if (!watched) {
        markAsWatched();
      } else {
        unMarkAsWatched();
      }
    }
  }

  const onClick = (e) => {
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

export default Episode;
