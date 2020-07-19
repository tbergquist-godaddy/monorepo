/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
type FavoriteListItem_favorite$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Favorites_favorites$ref: FragmentReference;
declare export opaque type Favorites_favorites$fragmentType: Favorites_favorites$ref;
export type Favorites_favorites = {|
  +favorites: ?{|
    +pageInfo: {|
      +hasNextPage: boolean
    |},
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: FavoriteListItem_favorite$ref,
      |}
    |}>,
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
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "first"
    },
    {
      "defaultValue": {
        "sortBy": "PREVIOUS_EPISODE",
        "sortDirection": "DESC"
      },
      "kind": "LocalArgument",
      "name": "options"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "first",
        "cursor": null,
        "direction": "forward",
        "path": [
          "favorites"
        ]
      }
    ]
  },
  "name": "Favorites_favorites",
  "selections": [
    {
      "alias": "favorites",
      "args": [
        {
          "kind": "Variable",
          "name": "options",
          "variableName": "options"
        }
      ],
      "concreteType": "TvShowConnection",
      "kind": "LinkedField",
      "name": "__Favorites_favorites_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "TvShowEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "TvShow",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "FavoriteListItem_favorite"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TvHelperViewer",
  "abstractKey": null
};
// prettier-ignore
(node: any).hash = '7679187c9df51d98b24dc6f14df0d0b0';
export default node;
