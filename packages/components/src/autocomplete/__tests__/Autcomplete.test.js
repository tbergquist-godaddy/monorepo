// @flow

import * as React from 'react';
import { create } from 'react-test-renderer';

import Autocomplete from '../Autocomplete';

const values = [
  { id: '1', name: 'name1' },
  { id: '2', name: 'name2' },
  { id: '3', name: 'name3' },
];
it('renders', () => {
  expect(
    create(<Autocomplete values={values} onSelect={jest.fn()} label="label" />),
  ).toMatchInlineSnapshot(`
    <div
      className="sc-htpNat byoPmM"
    >
      <label
        className="InputField__Field-sc-4opay-0 gqzABW"
      >
        <span
          className="FormLabel-sc-1927civ-1 iTEGJS"
        >
          <span>
            label
          </span>
        </span>
        <div
          className="InputField__InputContainer-sc-4opay-2 kccDHe"
        >
          <input
            className="InputField__Input-sc-4opay-6 isCXzD"
            onChange={[Function]}
            type="text"
            value=""
          />
          <div
            className="InputField__FakeInput-sc-4opay-1 ipxhgc"
          />
        </div>
      </label>
      <div
        className="sc-bwzfXH cMROGk"
        open={false}
      >
        <div
          className="sc-bdVaJa eXwqSu"
          onClick={[Function]}
          role="button"
        >
          name1
        </div>
        <div
          className="sc-bdVaJa eXwqSu"
          onClick={[Function]}
          role="button"
        >
          name2
        </div>
        <div
          className="sc-bdVaJa eXwqSu"
          onClick={[Function]}
          role="button"
        >
          name3
        </div>
      </div>
    </div>
  `);
});
