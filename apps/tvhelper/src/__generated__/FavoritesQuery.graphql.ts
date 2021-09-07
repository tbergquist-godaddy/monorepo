/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SortBy = "NAME" | "NEXT_EPISODE" | "PREVIOUS_EPISODE" | "STATUS" | "%future added value";
export type SortDirection = "ASC" | "DESC" | "%future added value";
export type SortOptions = {
    sortBy?: SortBy | null;
    sortDirection?: SortDirection | null;
};
export type FavoritesQueryVariables = {
    options?: SortOptions | null;
    first?: number | null;
};
export type FavoritesQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"Favorites_favorites">;
    } | null;
};
export type FavoritesQuery = {
    readonly response: FavoritesQueryResponse;
    readonly variables: FavoritesQueryVariables;
};



/*
query FavoritesQuery(
  $options: SortOptions
  $first: Int
) {
  viewer {
    __typename
    ...Favorites_favorites_42u0Wi
    ... on TvHelperViewer {
      id
    }
  }
}

fragment FavoriteListItem_favorite on TvShow {
  name
  nextEpisode
  previousEpisode
  id
  status
  image {
    medium
    id
  }
}

fragment Favorites_favorites_42u0Wi on TvHelperViewer {
  favorites(options: $options, first: $first) {
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        id
        ...FavoriteListItem_favorite
        __typename
      }
      cursor
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "options"
},
v2 = [
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FavoritesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": (v2/*: any*/),
            "kind": "FragmentSpread",
            "name": "Favorites_favorites"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "FavoritesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "TvShowConnection",
                "kind": "LinkedField",
                "name": "favorites",
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
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "name",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "nextEpisode",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "previousEpisode",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "status",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TvHelperImage",
                            "kind": "LinkedField",
                            "name": "image",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "medium",
                                "storageKey": null
                              },
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v3/*: any*/)
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
              },
              {
                "alias": null,
                "args": (v2/*: any*/),
                "filters": [
                  "options"
                ],
                "handle": "connection",
                "key": "Favorites_favorites",
                "kind": "LinkedHandle",
                "name": "favorites"
              },
              (v4/*: any*/)
            ],
            "type": "TvHelperViewer",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5941bf65f8a210baf78e3ba0df857a47",
    "id": null,
    "metadata": {},
    "name": "FavoritesQuery",
    "operationKind": "query",
    "text": "query FavoritesQuery(\n  $options: SortOptions\n  $first: Int\n) {\n  viewer {\n    __typename\n    ...Favorites_favorites_42u0Wi\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment FavoriteListItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n  status\n  image {\n    medium\n    id\n  }\n}\n\nfragment Favorites_favorites_42u0Wi on TvHelperViewer {\n  favorites(options: $options, first: $first) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...FavoriteListItem_favorite\n        __typename\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a572f2277702799afd708e52797304d6';
export default node;
