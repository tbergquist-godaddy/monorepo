/**
 * @flow
 * @relayHash 59d7baea227c7e49c3f82b7e15d1c31f
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type FavoritesTable_favorites$ref = any;
export type FavoriteQueryVariables = {||};
export type FavoriteQueryResponse = {|
  +$fragmentRefs: FavoritesTable_favorites$ref
|};
export type FavoriteQuery = {|
  variables: FavoriteQueryVariables,
  response: FavoriteQueryResponse,
|};

/*
query FavoriteQuery {
  ...FavoritesTable_favorites
}

fragment FavoriteItem_favorite on TvShow {
  name
  nextEpisode
  previousEpisode
  id
  status
}

fragment FavoritesTable_favorites on RootQuery {
  favorites(options: {sortDirection: ASC, sortBy: NAME}) {
    edges {
      node {
        id
        ...FavoriteItem_favorite
      }
    }
  }
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FavoriteQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "FavoritesTable_favorites",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FavoriteQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "favorites",
        "storageKey": "favorites(options:{\"sortBy\":\"NAME\",\"sortDirection\":\"ASC\"})",
        "args": [
          {
            "kind": "Literal",
            "name": "options",
            "value": {
              "sortBy": "NAME",
              "sortDirection": "ASC"
            }
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
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
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
    "name": "FavoriteQuery",
    "id": null,
    "text": "query FavoriteQuery {\n  ...FavoritesTable_favorites\n}\n\nfragment FavoriteItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n  status\n}\n\nfragment FavoritesTable_favorites on RootQuery {\n  favorites(options: {sortDirection: ASC, sortBy: NAME}) {\n    edges {\n      node {\n        id\n        ...FavoriteItem_favorite\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node: any).hash = '554ac8e999e1efdbb7aa32f9736f1593';
export default node;
