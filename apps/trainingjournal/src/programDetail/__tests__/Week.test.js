// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Week } from '../Week';

const renderer = new ShallowRenderer();
const $refType: any = null;

const week = {
  name: 'Week name',
  $refType,
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
          <div>
            todo
          </div>
        </CardSectionContent>
      </CardSection>
    </Card>
  `);
});
