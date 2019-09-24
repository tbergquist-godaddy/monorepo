/**
 * @flow
 * @relayHash afe35e6be7b2a226c0152bfed76214b4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type FavoritesList_data$ref = any;
export type SortBy = "NAME" | "NEXT_EPISODE" | "PREVIOUS_EPISODE" | "STATUS" | "%future added value";
export type SortDirection = "ASC" | "DESC" | "%future added value";
export type SortOptions = {|
  sortBy?: ?SortBy,
  sortDirection?: ?SortDirection,
|};
export type FavoritesSceneQueryVariables = {|
  first?: ?number,
  options?: ?SortOptions,
|};
export type FavoritesSceneQueryResponse = {|
  +$fragmentRefs: FavoritesList_data$ref
|};
export type FavoritesSceneQuery = {|
  variables: FavoritesSceneQueryVariables,
  response: FavoritesSceneQueryResponse,
|};
*/


/*
query FavoritesSceneQuery(
  $first: Int
  $options: SortOptions
) {
  ...FavoritesList_data_42u0Wi
}

fragment FavoritesList_data_42u0Wi on RootQuery {
  favorites(first: $first, options: $options) {
    edges {
      node {
        id
        ...FavoritesItem_data
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment FavoritesItem_data on TvShow {
  id
  name
  image {
    medium
    id
  }
  previousEpisode
  nextEpisode
  status
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "options",
    "variableName": "options"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FavoritesSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "FavoritesList_data",
        "args": (v1/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FavoritesSceneQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "favorites",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "name",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TvHelperImage",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "medium",
                        "args": null,
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ]
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
                    "name": "nextEpisode",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "status",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
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
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "favorites",
        "args": (v1/*: any*/),
        "handle": "connection",
        "key": "FavoritesScene_favorites",
        "filters": []
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FavoritesSceneQuery",
    "id": null,
    "text": "query FavoritesSceneQuery(\n  $first: Int\n  $options: SortOptions\n) {\n  ...FavoritesList_data_42u0Wi\n}\n\nfragment FavoritesList_data_42u0Wi on RootQuery {\n  favorites(first: $first, options: $options) {\n    edges {\n      node {\n        id\n        ...FavoritesItem_data\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment FavoritesItem_data on TvShow {\n  id\n  name\n  image {\n    medium\n    id\n  }\n  previousEpisode\n  nextEpisode\n  status\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8775e66a80a7d4d1c79d3ce806ebae4c';
module.exports = node;
