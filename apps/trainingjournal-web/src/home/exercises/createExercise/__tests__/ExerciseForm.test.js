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
    <ExerciseForm isSubmitting={false} />
  </Formik>
);

it('changes values', async () => {
  const { container } = render(<Wrapper />);

  const name = container.querySelector('input[name="name"]');
  const muscleGroup = container.querySelector('input[name="muscleGroups"]');
  const videoUrl = container.querySelector('input[name="videoUrl"]');
  const description = container.querySelector('input[name="description"]');

  await act(async () => {
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.change(name, { target: { name: 'name', value: 'Knebøy' } });
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.change(muscleGroup, { target: { name: 'muscleGroups', value: 'Lår' } });
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.change(videoUrl, {
      target: { name: 'videoUrl', value: 'https://www.mock.no' },
    });
    // $FlowFixMe: (add testing-library flow types)
    await fireEvent.change(description, {
      target: { name: 'description', value: 'Rolig ned, lår parallell med underlag' },
    });
  });

  // $FlowFixMe: (add testing-library flow types)
  expect(name.value).toBe('Knebøy');
  // $FlowFixMe: (add testing-library flow types)
  expect(muscleGroup.value).toBe('Lår');
  // $FlowFixMe: (add testing-library flow types)
  expect(videoUrl.value).toBe('https://www.mock.no');
  // $FlowFixMe: (add testing-library flow types)
  expect(description.value).toBe('Rolig ned, lår parallell med underlag');
});
