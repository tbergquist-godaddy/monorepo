// @flow

import React from 'react';

import './index.css';
import List from '../src/List';
import SelectedItems from '../src/SelectedItems';
import { SelectedItemsProvider } from '../src/SelectedItemsContext';

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = [
  'navy',
  'blue',
  'aqua',
  'teal',
  'olive',
  'green',
  'lime',
  'yellow',
  'orange',
  'red',
  'maroon',
  'fuchsia',
  'purple',
  'silver',
  'gray',
  'black',
];
const fruits = [
  'apple',
  'banana',
  'watermelon',
  'orange',
  'peach',
  'tangerine',
  'pear',
  'kiwi',
  'mango',
  'pineapple',
];

const items = sizes.reduce(
  (items, size) => [
    ...items,
    ...fruits.reduce(
      (acc, fruit) => [
        ...acc,
        ...colors.reduce(
          (acc, color) => [
            ...acc,
            {
              name: `${size} ${color} ${fruit}`,
              color,
            },
          ],
          [],
        ),
      ],
      [],
    ),
  ],
  [],
);

export default function Index() {
  return (
    <SelectedItemsProvider>
      <SelectedItems />
      <List items={items} />
    </SelectedItemsProvider>
  );
}
