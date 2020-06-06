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
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v2 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v3 = {
  "type": "Date",
  "enumValues": null,
  "plural": false,
  "nullable": true
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
    "type": "RootQuery"
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
            "type": "TvHelperViewer"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "viewer": {
          "type": "Viewer",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.favorites": {
          "type": "TvShowConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.id": (v1/*: any*/),
        "viewer.favorites.edges": {
          "type": "TvShowEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "viewer.favorites.edges.node": {
          "type": "TvShow",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.favorites.edges.node.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "viewer.favorites.edges.node.name": (v2/*: any*/),
        "viewer.favorites.edges.node.nextEpisode": (v3/*: any*/),
        "viewer.favorites.edges.node.previousEpisode": (v3/*: any*/),
        "viewer.favorites.edges.node.status": (v2/*: any*/),
        "viewer.favorites.edges.node.image": {
          "type": "TvHelperImage",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "viewer.favorites.edges.node.image.medium": (v2/*: any*/),
        "viewer.favorites.edges.node.image.id": (v1/*: any*/)
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
