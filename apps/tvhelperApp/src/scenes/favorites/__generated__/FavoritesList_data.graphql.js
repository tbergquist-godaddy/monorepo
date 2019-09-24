/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type FavoritesItem_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type FavoritesList_data$ref: FragmentReference;
declare export opaque type FavoritesList_data$fragmentType: FavoritesList_data$ref;
export type FavoritesList_data = {|
  +favorites: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: FavoritesItem_data$ref,
      |}
    |}>
  |},
  +$refType: FavoritesList_data$ref,
|};
export type FavoritesList_data$data = FavoritesList_data;
export type FavoritesList_data$key = {
  +$data?: FavoritesList_data$data,
  +$fragmentRefs: FavoritesList_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "FavoritesList_data",
  "type": "RootQuery",
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
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "first",
      "type": "Int",
      "defaultValue": null
    },
    {
      "kind": "LocalArgument",
      "name": "options",
      "type": "SortOptions",
      "defaultValue": {
        "sortDirection": "ASC",
        "sortBy": "NAME"
      }
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "favorites",
      "name": "__FavoritesScene_favorites_connection",
      "storageKey": null,
      "args": null,
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
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "FavoritesItem_data",
                  "args": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'bec0a24f0bba392574f5d25c6953d382';
module.exports = node;
