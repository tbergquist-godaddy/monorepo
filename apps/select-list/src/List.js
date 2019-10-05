// @flow

import React from 'react';

import ListItem from './ListItem';

type Props = {|
  +items: $ReadOnlyArray<{|
    +color: string,
    +name: string,
  |}>,
|};

const List = ({ items }: Props) => (
  <ul className="List">
    {items.map(item => (
      <ListItem key={item.name} name={item.name} color={item.color} />
    ))}
  </ul>
);

export default List;
