// @flow

import * as React from 'react';

import ExcercisesQuery, { query } from '../../home/exercises/ExercisesQuery';

function Exercises() {
  return <ExcercisesQuery />;
}

Exercises.getInitialProps = () => {
  return { query };
};

export default (Exercises: React.ComponentType<{}>);
