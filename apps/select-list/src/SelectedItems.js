// @flow

import * as React from 'react';

import { useSelectedItems } from './SelectedItemsContext';

export default function SelectedItems() {
  const { selectedItems } = useSelectedItems();
  if (selectedItems.length === 0) {
    return null;
  }
  return (
    <div className="SelectedItems">
      <p>Selected Items</p>
      {selectedItems.join(', ')}
    </div>
  );
}
