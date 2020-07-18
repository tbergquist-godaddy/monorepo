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
  favorites(options: {sortDirection: DESC, sortBy: PREVIOUS_EPISODE}) {
    edges {
      node {
        id
        ...FavoriteListItem_favorite
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v2 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "String"
},
v3 = {
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "options",
                    "value": {
                      "sortBy": "PREVIOUS_EPISODE",
                      "sortDirection": "DESC"
                    }
                  }
                ],
                "concreteType": "TvShowConnection",
                "kind": "LinkedField",
                "name": "favorites",
                "plural": false,
                "selections": [
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
                          (v0/*: any*/),
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
                              (v0/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "favorites(options:{\"sortBy\":\"PREVIOUS_EPISODE\",\"sortDirection\":\"DESC\"})"
              },
              (v0/*: any*/)
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
    "cacheID": "dbbee7eb58e0fecd17af0191a63f41ba",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Viewer"
        },
        "viewer.__typename": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "String"
        },
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
        "viewer.favorites.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "TvShow"
        },
        "viewer.favorites.edges.node.id": (v1/*: any*/),
        "viewer.favorites.edges.node.image": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "TvHelperImage"
        },
        "viewer.favorites.edges.node.image.id": (v1/*: any*/),
        "viewer.favorites.edges.node.image.medium": (v2/*: any*/),
        "viewer.favorites.edges.node.name": (v2/*: any*/),
        "viewer.favorites.edges.node.nextEpisode": (v3/*: any*/),
        "viewer.favorites.edges.node.previousEpisode": (v3/*: any*/),
        "viewer.favorites.edges.node.status": (v2/*: any*/),
        "viewer.id": (v1/*: any*/)
      }
    },
    "name": "FavoritesTestQuery",
    "operationKind": "query",
    "text": "query FavoritesTestQuery {\n  viewer {\n    __typename\n    ...Favorites_favorites\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment FavoriteListItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n  status\n  image {\n    medium\n    id\n  }\n}\n\nfragment Favorites_favorites on TvHelperViewer {\n  favorites(options: {sortDirection: DESC, sortBy: PREVIOUS_EPISODE}) {\n    edges {\n      node {\n        id\n        ...FavoriteListItem_favorite\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = 'b3dee53cc8d134dcabdd951dbcda749a';
export default node;
