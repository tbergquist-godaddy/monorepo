// @flow

import * as React from 'react';

import ExcercisesQuery, { query } from '../../home/exercises/ExercisesQuery';

export default function Exercises() {
  return <ExcercisesQuery />;
}

Exercises.getInitialProps = () => {
  return { query };
};
