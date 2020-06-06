/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type SearchScene_search$ref = any;
type SearchScene_viewer$ref = any;
export type SearchQueryVariables = {|
  query: string,
  includeResults: boolean,
|};
export type SearchQueryResponse = {|
  +$fragmentRefs: SearchScene_search$ref & SearchScene_viewer$ref
|};
export type SearchQuery = {|
  variables: SearchQueryVariables,
  response: SearchQueryResponse,
|};

/*
query SearchQuery(
  $query: String!
  $includeResults: Boolean!
) {
  ...SearchScene_search_1dc2Le
  ...SearchScene_viewer
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

fragment SearchResults_results on TvShowConnection {
  edges {
    node {
      id
      ...TvShowListItem_data
    }
  }
}

fragment SearchScene_search_1dc2Le on RootQuery {
  searchTvShow(query: $query) @include(if: $includeResults) {
    ...SearchResults_results
  }
}

fragment SearchScene_viewer on RootQuery {
  viewer {
    __typename
    ...Layout_viewer
    ... on TvHelperViewer {
      id
    }
  }
}

fragment TvShowListItem_data on TvShow {
  id
  name
  status
  rating
  image {
    medium
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "query",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "includeResults",
    "type": "Boolean!"
  }
],
v1 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
v2 = {
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
    "name": "SearchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "includeResults",
            "variableName": "includeResults"
          },
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "SearchScene_search"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SearchScene_viewer"
      }
    ],
    "type": "RootQuery"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchQuery",
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
                "args": null,
                "kind": "ScalarField",
                "name": "username",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "type": "TvHelperViewer"
          }
        ],
        "storageKey": null
      },
      {
        "condition": "includeResults",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": [
              (v1/*: any*/)
            ],
            "concreteType": "TvShowConnection",
            "kind": "LinkedField",
            "name": "searchTvShow",
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
                        "name": "status",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "rating",
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SearchQuery",
    "operationKind": "query",
    "text": "query SearchQuery(\n  $query: String!\n  $includeResults: Boolean!\n) {\n  ...SearchScene_search_1dc2Le\n  ...SearchScene_viewer\n}\n\nfragment Layout_viewer on Viewer {\n  __typename\n  ...NavbarRight_viewer\n}\n\nfragment NavbarRight_viewer on Viewer {\n  __typename\n  ... on TvHelperViewer {\n    username\n  }\n}\n\nfragment SearchResults_results on TvShowConnection {\n  edges {\n    node {\n      id\n      ...TvShowListItem_data\n    }\n  }\n}\n\nfragment SearchScene_search_1dc2Le on RootQuery {\n  searchTvShow(query: $query) @include(if: $includeResults) {\n    ...SearchResults_results\n  }\n}\n\nfragment SearchScene_viewer on RootQuery {\n  viewer {\n    __typename\n    ...Layout_viewer\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment TvShowListItem_data on TvShow {\n  id\n  name\n  status\n  rating\n  image {\n    medium\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '38c4fb85307e97756f3cda7a4ab0fd3a';
export default node;
