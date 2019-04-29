// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Week } from '../Week';

const renderer = new ShallowRenderer();
const $refType: any = null;
const $fragmentRefs: any = null;

const week = {
  name: 'Week name',
  $refType,
  $fragmentRefs,
};

it('renders', () => {
  expect(renderer.render(<Week week={week} />)).toMatchInlineSnapshot(`
    <Card>
      <CardSection
        expandable={true}
        initialExpanded={false}
      >
        <CardSectionHeader>
          Week name
        </CardSectionHeader>
        <CardSectionContent>
          <ForwardRef(Relay(Days))
            week={
              Object {
                "$fragmentRefs": null,
                "$refType": null,
                "name": "Week name",
              }
            }
          />
        </CardSectionContent>
      </CardSection>
    </Card>
  `);
});
