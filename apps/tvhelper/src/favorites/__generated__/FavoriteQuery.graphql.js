/**
 * @flow
 * @relayHash 5fa58821e176f96197e7e46f08cfa495
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type FavoritesTable_favorites$ref = any;
type Layout_viewer$ref = any;
export type FavoriteQueryVariables = {||};
export type FavoriteQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Layout_viewer$ref
  |},
  +$fragmentRefs: FavoritesTable_favorites$ref,
|};
export type FavoriteQuery = {|
  variables: FavoriteQueryVariables,
  response: FavoriteQueryResponse,
|};

/*
query FavoriteQuery {
  viewer {
    __typename
    ...Layout_viewer
  }
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

fragment Layout_viewer on Viewer {
  __typename
  ...NavbarRight_viewer
}

fragment NavbarRight_viewer on Viewer {
  __typename
  ... on TvHelperViewer {
    username
  }
}
*/

const node: ConcreteRequest = {
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
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Layout_viewer",
            "args": null
          }
        ]
      },
      {
        "kind": "FragmentSpread",
        "name": "FavoritesTable_favorites",
        "args": null
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
                "kind": "ScalarField",
                "alias": null,
                "name": "username",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
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
    "name": "FavoriteQuery",
    "id": null,
    "text": "query FavoriteQuery {\n  viewer {\n    __typename\n    ...Layout_viewer\n  }\n  ...FavoritesTable_favorites\n}\n\nfragment FavoriteItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n  status\n}\n\nfragment FavoritesTable_favorites on RootQuery {\n  favorites(options: {sortDirection: DESC, sortBy: PREVIOUS_EPISODE}) {\n    edges {\n      node {\n        id\n        ...FavoriteItem_favorite\n      }\n    }\n  }\n}\n\nfragment Layout_viewer on Viewer {\n  __typename\n  ...NavbarRight_viewer\n}\n\nfragment NavbarRight_viewer on Viewer {\n  __typename\n  ... on TvHelperViewer {\n    username\n  }\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node: any).hash = 'feab9ba518f080faa463e891af99767c';
export default node;
