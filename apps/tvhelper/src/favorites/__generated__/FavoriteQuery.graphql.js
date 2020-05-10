/**
 * @flow
 * @relayHash b804adf35a367fac6a31ad74f24b0fdd
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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

fragment Favorites_favorites_2Rby0E on TvHelperViewer {
  favorites(options: $options) {
    edges {
      node {
        id
        ...FavoriteListItem_favorite
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

const node: ConcreteRequest = (function(){
var v0 = [
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
    "name": "FavoriteQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
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
          },
          {
            "kind": "FragmentSpread",
            "name": "Favorites_favorites",
            "args": (v1/*: any*/)
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "FavoriteQuery",
    "argumentDefinitions": (v0/*: any*/),
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
              },
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
                              (v2/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              (v2/*: any*/)
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "TraningJournalViewer",
            "selections": [
              (v2/*: any*/)
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
    "text": "query FavoriteQuery(\n  $options: SortOptions\n) {\n  viewer {\n    __typename\n    ...Layout_viewer\n    ...Favorites_favorites_2Rby0E\n    ... on TraningJournalViewer {\n      id\n    }\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment FavoriteListItem_favorite on TvShow {\n  name\n  nextEpisode\n  previousEpisode\n  id\n  status\n  image {\n    medium\n    id\n  }\n}\n\nfragment Favorites_favorites_2Rby0E on TvHelperViewer {\n  favorites(options: $options) {\n    edges {\n      node {\n        id\n        ...FavoriteListItem_favorite\n      }\n    }\n  }\n}\n\nfragment Layout_viewer on Viewer {\n  __typename\n  ...NavbarRight_viewer\n}\n\nfragment NavbarRight_viewer on Viewer {\n  __typename\n  ... on TvHelperViewer {\n    username\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'd2c82cb98665918f3ba515d51511e3de';
export default node;
