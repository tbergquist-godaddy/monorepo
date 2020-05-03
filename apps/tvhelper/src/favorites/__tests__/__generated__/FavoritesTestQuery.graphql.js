/**
 * @flow
 * @relayHash fb2f7ff6f736cb4df9f8e242fc8add7a
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
    ... on TraningJournalViewer {
      id
    }
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
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FavoritesTestQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Favorites_favorites",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FavoritesTestQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "TvHelperViewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "favorites",
                "storageKey": "favorites(options:{\"sortBy\":\"PREVIOUS_EPISODE\",\"sortDirection\":\"DESC\"})",
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
                          (v0/*: any*/),
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
                              (v0/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              (v0/*: any*/)
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "TraningJournalViewer",
            "selections": [
              (v0/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FavoritesTestQuery",
    "id": null,
    "text": "query FavoritesTestQuery {\n  viewer {\n    __typename\n    ...Favorites_favorites\n    ... on TraningJournalViewer {\n      id\n    }\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment FavoriteListItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n  status\n  image {\n    medium\n    id\n  }\n}\n\nfragment Favorites_favorites on TvHelperViewer {\n  favorites(options: {sortDirection: DESC, sortBy: PREVIOUS_EPISODE}) {\n    edges {\n      node {\n        id\n        ...FavoriteListItem_favorite\n      }\n    }\n  }\n}\n",
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
    }
  }
};
})();
// prettier-ignore
(node: any).hash = 'b3dee53cc8d134dcabdd951dbcda749a';
export default node;
