/**
 * @flow
 * @relayHash a7067fa0e51febc06a07a4a253ff7828
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type FavoritesTable_favorites$ref = any;
export type FavoritesTableTestQueryVariables = {||};
export type FavoritesTableTestQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: FavoritesTable_favorites$ref
  |}
|};
export type FavoritesTableTestQuery = {|
  variables: FavoritesTableTestQueryVariables,
  response: FavoritesTableTestQueryResponse,
|};

/*
query FavoritesTableTestQuery {
  viewer {
    __typename
    ...FavoritesTable_favorites
  }
}

fragment FavoriteItem_favorite on TvShow {
  name
  nextEpisode
  previousEpisode
  id
  status
}

fragment FavoritesTable_favorites on TvHelperViewer {
  favorites(options: {sortDirection: DESC, sortBy: PREVIOUS_EPISODE}) {
    edges {
      node {
        id
        ...FavoriteItem_favorite
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "type": "String",
  "enumValues": null,
  "plural": false,
  "nullable": true
},
v1 = {
  "type": "Date",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "FavoritesTableTestQuery",
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
            "name": "FavoritesTable_favorites",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FavoritesTableTestQuery",
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "FavoritesTableTestQuery",
    "id": null,
    "text": "query FavoritesTableTestQuery {\n  viewer {\n    __typename\n    ...FavoritesTable_favorites\n  }\n}\n\nfragment FavoriteItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n  status\n}\n\nfragment FavoritesTable_favorites on TvHelperViewer {\n  favorites(options: {sortDirection: DESC, sortBy: PREVIOUS_EPISODE}) {\n    edges {\n      node {\n        id\n        ...FavoriteItem_favorite\n      }\n    }\n  }\n}\n",
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
        "viewer.favorites.edges.node.name": (v0/*: any*/),
        "viewer.favorites.edges.node.nextEpisode": (v1/*: any*/),
        "viewer.favorites.edges.node.previousEpisode": (v1/*: any*/),
        "viewer.favorites.edges.node.status": (v0/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node: any).hash = 'ff6e3b9d9e8f5accfa6266b256d94f44';
export default node;
