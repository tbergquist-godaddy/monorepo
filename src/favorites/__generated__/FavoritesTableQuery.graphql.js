/**
 * @flow
 * @relayHash e5cb098a16b6be10eacb43821dfc118e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FavoritesTable_favorites$ref = any;
export type SortBy = "NAME" | "NEXT_EPISODE" | "PREVIOUS_EPISODE" | "STATUS" | "%future added value";
export type SortDirection = "ASC" | "DESC" | "%future added value";
export type SortOptions = {|
  sortDirection?: ?SortDirection,
  sortBy?: ?SortBy,
|};
export type FavoritesTableQueryVariables = {|
  options?: ?SortOptions
|};
export type FavoritesTableQueryResponse = {|
  +$fragmentRefs: FavoritesTable_favorites$ref
|};
export type FavoritesTableQuery = {|
  variables: FavoritesTableQueryVariables,
  response: FavoritesTableQueryResponse,
|};
*/


/*
query FavoritesTableQuery(
  $options: SortOptions
) {
  ...FavoritesTable_favorites_2Rby0E
}

fragment FavoritesTable_favorites_2Rby0E on RootQuery {
  favorites(options: $options) {
    edges {
      node {
        id
        ...FavoriteItem_favorite
      }
    }
  }
}

fragment FavoriteItem_favorite on TvShow {
  name
  nextEpisode
  previousEpisode
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "options",
    "type": "SortOptions",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FavoritesTableQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "FavoritesTable_favorites",
        "args": [
          {
            "kind": "Variable",
            "name": "options",
            "variableName": "options",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FavoritesTableQuery",
    "argumentDefinitions": (v0/*: any*/),
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
            "variableName": "options",
            "type": "SortOptions"
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
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "nextEpisode",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "previousEpisode",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FavoritesTableQuery",
    "id": null,
    "text": "query FavoritesTableQuery(\n  $options: SortOptions\n) {\n  ...FavoritesTable_favorites_2Rby0E\n}\n\nfragment FavoritesTable_favorites_2Rby0E on RootQuery {\n  favorites(options: $options) {\n    edges {\n      node {\n        id\n        ...FavoriteItem_favorite\n      }\n    }\n  }\n}\n\nfragment FavoriteItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '46fb2dbb88c1044f1be74408843022b3';
module.exports = node;
