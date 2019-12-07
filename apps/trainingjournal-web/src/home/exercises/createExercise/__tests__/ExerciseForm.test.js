// @flow

import * as React from 'react';
import { Formik } from 'formik';
import { render, act, fireEvent } from '@testing-library/react';

import ExerciseForm from '../ExerciseForm';

const Wrapper = () => (
  <Formik
    initialValues={{
      name: '',
      muscleGroups: '',
      videoUrl: '',
      description: '',
    }}
  >
    <ExerciseForm isSubmitting={false} isVisible={true} />
  </Formik>
);

it('changes values', async () => {
  const { container } = render(<Wrapper />);

  const name = container.querySelector('input[name="name"]');
  const muscleGroup = container.querySelector('input[name="muscleGroups"]');
  const videoUrl = container.querySelector('input[name="videoUrl"]');
  const description = container.querySelector('input[name="description"]');

  await act(async () => {
    await fireEvent.change(name, { target: { name: 'name', value: 'Knebøy' } });
    await fireEvent.change(muscleGroup, { target: { name: 'muscleGroups', value: 'Lår' } });
    await fireEvent.change(videoUrl, {
      target: { name: 'videoUrl', value: 'https://www.mock.no' },
    });
    await fireEvent.change(description, {
      target: { name: 'description', value: 'Rolig ned, lår parallell med underlag' },
    });
  });

  expect(name.value).toBe('Knebøy');
  expect(muscleGroup.value).toBe('Lår');
  expect(videoUrl.value).toBe('https://www.mock.no');
  expect(description.value).toBe('Rolig ned, lår parallell med underlag');
});
