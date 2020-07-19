/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type Favorites_favorites$ref = any;
export type FavoritesTestQueryVariables = {||};
export type FavoritesTestQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Favorites_favorites$ref
  |}
|};
export type FavoritesTestQuery = {|
  variables: FavoritesTestQueryVariables,
  response: FavoritesTestQueryResponse,
|};

/*
query FavoritesTestQuery {
  viewer {
    __typename
    ...Favorites_favorites
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

fragment Favorites_favorites on TvHelperViewer {
  favorites(options: {sortDirection: DESC, sortBy: PREVIOUS_EPISODE}, first: 10) {
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  {
    "kind": "Literal",
    "name": "options",
    "value": {
      "sortBy": "PREVIOUS_EPISODE",
      "sortDirection": "DESC"
    }
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v5 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v6 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Date"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FavoritesTestQuery",
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FavoritesTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v1/*: any*/),
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
                          (v2/*: any*/),
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
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v0/*: any*/)
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
                "storageKey": "favorites(first:10,options:{\"sortBy\":\"PREVIOUS_EPISODE\",\"sortDirection\":\"DESC\"})"
              },
              {
                "alias": null,
                "args": (v1/*: any*/),
                "filters": [
                  "options"
                ],
                "handle": "connection",
                "key": "Favorites_favorites",
                "kind": "LinkedHandle",
                "name": "favorites"
              },
              (v2/*: any*/)
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
    "cacheID": "870bf895dde6dd3f0e76500991bc682e",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Viewer"
        },
        "viewer.__typename": (v3/*: any*/),
        "viewer.favorites": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "TvShowConnection"
        },
        "viewer.favorites.edges": {
          "enumValues": null,
          "nullable": true,
          "plural": true,
          "type": "TvShowEdge"
        },
        "viewer.favorites.edges.cursor": (v3/*: any*/),
        "viewer.favorites.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "TvShow"
        },
        "viewer.favorites.edges.node.__typename": (v3/*: any*/),
        "viewer.favorites.edges.node.id": (v4/*: any*/),
        "viewer.favorites.edges.node.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "TvHelperImage"
        },
        "viewer.favorites.edges.node.image.id": (v4/*: any*/),
        "viewer.favorites.edges.node.image.medium": (v5/*: any*/),
        "viewer.favorites.edges.node.name": (v5/*: any*/),
        "viewer.favorites.edges.node.nextEpisode": (v6/*: any*/),
        "viewer.favorites.edges.node.previousEpisode": (v6/*: any*/),
        "viewer.favorites.edges.node.status": (v5/*: any*/),
        "viewer.favorites.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "viewer.favorites.pageInfo.endCursor": (v5/*: any*/),
        "viewer.favorites.pageInfo.hasNextPage": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Boolean"
        },
        "viewer.id": (v4/*: any*/)
      }
    },
    "name": "FavoritesTestQuery",
    "operationKind": "query",
    "text": "query FavoritesTestQuery {\n  viewer {\n    __typename\n    ...Favorites_favorites\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment FavoriteListItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n  status\n  image {\n    medium\n    id\n  }\n}\n\nfragment Favorites_favorites on TvHelperViewer {\n  favorites(options: {sortDirection: DESC, sortBy: PREVIOUS_EPISODE}, first: 10) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...FavoriteListItem_favorite\n        __typename\n      }\n      cursor\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = 'b3dee53cc8d134dcabdd951dbcda749a';
export default node;
