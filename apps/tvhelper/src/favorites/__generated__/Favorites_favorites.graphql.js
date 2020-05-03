/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type FavoriteListItem_favorite$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Favorites_favorites$ref: FragmentReference;
declare export opaque type Favorites_favorites$fragmentType: Favorites_favorites$ref;
export type Favorites_favorites = {|
  +favorites: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: FavoriteListItem_favorite$ref,
      |}
    |}>
  |},
  +$refType: Favorites_favorites$ref,
|};
export type Favorites_favorites$data = Favorites_favorites;
export type Favorites_favorites$key = {
  +$data?: Favorites_favorites$data,
  +$fragmentRefs: Favorites_favorites$ref,
  ...
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "Favorites_favorites",
  "type": "TvHelperViewer",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "options",
      "type": "SortOptions",
      "defaultValue": {
        "sortDirection": "DESC",
        "sortBy": "PREVIOUS_EPISODE"
      }
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "favorites",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "options",
          "variableName": "options"
        }
      ],
      "concreteType": "TvShowConnection",
      "plural": false,
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
                  "name": "FavoriteListItem_favorite",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = 'f9ba1adf491e27909a01d3f28323f4af';
export default node;
