/**
 * @flow
 * @relayHash 0f734739b93152c468bb56e9e739c547
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FavoriteScene_favorites$ref = any;
export type FavoriteQueryVariables = {||};
export type FavoriteQueryResponse = {|
  +favorites: ?{|
    +$fragmentRefs: FavoriteScene_favorites$ref
  |}
|};
export type FavoriteQuery = {|
  variables: FavoriteQueryVariables,
  response: FavoriteQueryResponse,
|};
*/


/*
query FavoriteQuery {
  favorites {
    ...FavoriteScene_favorites
  }
}

fragment FavoriteScene_favorites on TvShowConnection {
  ...FavoritesTable_favorites
}

fragment FavoritesTable_favorites on TvShowConnection {
  edges {
    node {
      id
      ...FavoriteItem_favorite
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

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FavoriteQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "favorites",
        "storageKey": null,
        "args": null,
        "concreteType": "TvShowConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "FavoriteScene_favorites",
            "args": null
          }
        ]
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
    "name": "FavoriteQuery",
    "id": null,
    "text": "query FavoriteQuery {\n  favorites {\n    ...FavoriteScene_favorites\n  }\n}\n\nfragment FavoriteScene_favorites on TvShowConnection {\n  ...FavoritesTable_favorites\n}\n\nfragment FavoritesTable_favorites on TvShowConnection {\n  edges {\n    node {\n      id\n      ...FavoriteItem_favorite\n    }\n  }\n}\n\nfragment FavoriteItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = 'fda78555e2ce4003f90dec9aca72dc84';
module.exports = node;
