// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@tbergq/relay';
import { Heading, Button } from '@tbergq/components';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { DayDetail_day as DayType } from './__generated__/DayDetail_day.graphql';
import ExerciseTable from './ExerciseTable';
import AddExerciseForm from './AddExerciseForm';

const Fab = styled(Button)({
  position: 'fixed',
  bottom: 25,
  right: 25,
  zIndex: defaultTokens.zIndexSticky,
});

type Props = {|
  +day: ?DayType,
|};

const DayDetail = (props: Props) => {
  const [showCreateFrom, setShowCreateForm] = React.useState(false);
  const showForm = React.useCallback(() => {
    setShowCreateForm(true);
  }, []);
  const hideForm = React.useCallback(() => {
    setShowCreateForm(false);
  }, []);
  const dayName = props.day?.name ?? '';
  return (
    <>
      <Heading>{dayName}</Heading>
      {showCreateFrom && <AddExerciseForm hideForm={hideForm} day={props.day} />}
      <ExerciseTable day={props.day} />
      <Fab dataTest="fab" circled={true} onClick={showForm}>
        <MdAdd />
      </Fab>
    </>
  );
};

export default createFragmentContainer(DayDetail, {
  day: graphql`
    fragment DayDetail_day on Day {
      name
      ...ExerciseTable_day
      ...AddExerciseForm_day
    }
  `,
});
