/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FavoritesTable_favorites$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FavoriteScene_favorites$ref: FragmentReference;
export type FavoriteScene_favorites = {|
  +$fragmentRefs: FavoritesTable_favorites$ref,
  +$refType: FavoriteScene_favorites$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FavoriteScene_favorites",
  "type": "TvShowConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "FavoritesTable_favorites",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'a5666e346551ca5f51a1f46acf59d546';
module.exports = node;
