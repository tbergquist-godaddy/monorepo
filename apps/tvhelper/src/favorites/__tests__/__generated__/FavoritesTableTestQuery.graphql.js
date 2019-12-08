/**
 * @flow
 * @relayHash bdd0ad4e4287ed74bc367c7ad1ba9467
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type FavoritesTable_favorites$ref = any;
export type FavoritesTableTestQueryVariables = {||};
export type FavoritesTableTestQueryResponse = {|
  +$fragmentRefs: FavoritesTable_favorites$ref
|};
export type FavoritesTableTestQuery = {|
  variables: FavoritesTableTestQueryVariables,
  response: FavoritesTableTestQueryResponse,
|};

/*
query FavoritesTableTestQuery {
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
        "kind": "FragmentSpread",
        "name": "FavoritesTable_favorites",
        "args": null
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
  },
  "params": {
    "operationKind": "query",
    "name": "FavoritesTableTestQuery",
    "id": null,
    "text": "query FavoritesTableTestQuery {\n  ...FavoritesTable_favorites\n}\n\nfragment FavoriteItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n  status\n}\n\nfragment FavoritesTable_favorites on RootQuery {\n  favorites(options: {sortDirection: DESC, sortBy: PREVIOUS_EPISODE}) {\n    edges {\n      node {\n        id\n        ...FavoriteItem_favorite\n      }\n    }\n  }\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "favorites": {
          "type": "TvShowConnection",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "favorites.edges": {
          "type": "TvShowEdge",
          "enumValues": null,
          "plural": true,
          "nullable": true
        },
        "favorites.edges.node": {
          "type": "TvShow",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "favorites.edges.node.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "favorites.edges.node.name": (v0/*: any*/),
        "favorites.edges.node.nextEpisode": (v1/*: any*/),
        "favorites.edges.node.previousEpisode": (v1/*: any*/),
        "favorites.edges.node.status": (v0/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node: any).hash = '1c60e8ef4c4b49ab3506044db3757695';
export default node;
