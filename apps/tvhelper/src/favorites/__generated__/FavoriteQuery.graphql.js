/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type Favorites_favorites$ref = any;
type Layout_viewer$ref = any;
export type SortBy = "NAME" | "NEXT_EPISODE" | "PREVIOUS_EPISODE" | "STATUS" | "%future added value";
export type SortDirection = "ASC" | "DESC" | "%future added value";
export type SortOptions = {|
  sortBy?: ?SortBy,
  sortDirection?: ?SortDirection,
|};
export type FavoriteQueryVariables = {|
  options?: ?SortOptions
|};
export type FavoriteQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Layout_viewer$ref & Favorites_favorites$ref
  |}
|};
export type FavoriteQuery = {|
  variables: FavoriteQueryVariables,
  response: FavoriteQueryResponse,
|};

/*
query FavoriteQuery(
  $options: SortOptions
) {
  viewer {
    __typename
    ...Layout_viewer
    ...Favorites_favorites_2Rby0E
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

fragment Favorites_favorites_2Rby0E on TvHelperViewer {
  favorites(options: $options, first: 10) {
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

fragment Layout_viewer on Viewer {
  __isViewer: __typename
  __typename
  ...NavbarRight_viewer
}

fragment NavbarRight_viewer on Viewer {
  __isViewer: __typename
  __typename
  ... on TvHelperViewer {
    username
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "options"
  }
],
v1 = {
  "kind": "Variable",
  "name": "options",
  "variableName": "options"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  (v1/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FavoriteQuery",
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
            "args": null,
            "kind": "FragmentSpread",
            "name": "Layout_viewer"
          },
          {
            "args": [
              (v1/*: any*/)
            ],
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FavoriteQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isViewer"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "username",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v3/*: any*/),
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
                          (v2/*: any*/)
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
                "args": (v3/*: any*/),
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
    "cacheID": "b612bb60ce60902642ab069b57d9d3c6",
    "id": null,
    "metadata": {},
    "name": "FavoriteQuery",
    "operationKind": "query",
    "text": "query FavoriteQuery(\n  $options: SortOptions\n) {\n  viewer {\n    __typename\n    ...Layout_viewer\n    ...Favorites_favorites_2Rby0E\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment FavoriteListItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n  status\n  image {\n    medium\n    id\n  }\n}\n\nfragment Favorites_favorites_2Rby0E on TvHelperViewer {\n  favorites(options: $options, first: 10) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...FavoriteListItem_favorite\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment Layout_viewer on Viewer {\n  __isViewer: __typename\n  __typename\n  ...NavbarRight_viewer\n}\n\nfragment NavbarRight_viewer on Viewer {\n  __isViewer: __typename\n  __typename\n  ... on TvHelperViewer {\n    username\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = 'd2c82cb98665918f3ba515d51511e3de';
export default node;
