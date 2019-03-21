/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FavoriteItem_favorite$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FavoritesTable_favorites$ref: FragmentReference;
export type FavoritesTable_favorites = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: ?string,
      +$fragmentRefs: FavoriteItem_favorite$ref,
    |}
  |}>,
  +$refType: FavoritesTable_favorites$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FavoritesTable_favorites",
  "type": "TvShowConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "TvShowEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "TvShow",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "FragmentSpread",
              "name": "FavoriteItem_favorite",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3775f13316409c35d34aa32322972da8';
module.exports = node;
