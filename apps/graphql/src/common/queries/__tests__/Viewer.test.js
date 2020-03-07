// @flow

import executeTestQuery from '../../../services/executeTestQuery';

it('renders Unautorized type', async () => {
  const data = await executeTestQuery(
    `query Viewer {
      viewer {
        __typename
      }
}`,
    {},
    { user: { app: undefined } },
  );
  expect(data).toMatchSnapshot();
});

it('renders TJViewer type', async () => {
  const data = await executeTestQuery(
    `query Viewer {
      viewer {
        __typename
      }
}`,
    {},
    { user: { app: 'trainingjournal' } },
  );
  expect(data).toMatchSnapshot();
});

it('renders TVHViewer type', async () => {
  const data = await executeTestQuery(
    `query Viewer {
      viewer {
        __typename
        ... on TvHelperViewer {
          username
        }
      }
}`,
    {},
    { user: { app: 'tvhelper', username: 'tito' } },
  );
  expect(data).toMatchSnapshot();
});
