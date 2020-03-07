/**
 * @flow
 * @relayHash f5e43ef39a7ef42c6749c7713b63f744
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type SearchScene_search$ref = any;
export type SearchSceneRefetchQueryVariables = {|
  query: string,
  includeResults: boolean,
|};
export type SearchSceneRefetchQueryResponse = {|
  +$fragmentRefs: SearchScene_search$ref
|};
export type SearchSceneRefetchQuery = {|
  variables: SearchSceneRefetchQueryVariables,
  response: SearchSceneRefetchQueryResponse,
|};

/*
query SearchSceneRefetchQuery(
  $query: String!
  $includeResults: Boolean!
) {
  ...SearchScene_search_1dc2Le
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
    "kind": "LocalArgument",
    "name": "query",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "includeResults",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "Variable",
  "name": "query",
  "variableName": "query"
},
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
    "name": "SearchSceneRefetchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "SearchScene_search",
        "args": [
          {
            "kind": "Variable",
            "name": "includeResults",
            "variableName": "includeResults"
          },
          (v1/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchSceneRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "Condition",
        "passingValue": true,
        "condition": "includeResults",
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "searchTvShow",
            "storageKey": null,
            "args": [
              (v1/*: any*/)
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
                        "name": "status",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "rating",
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "SearchSceneRefetchQuery",
    "id": null,
    "text": "query SearchSceneRefetchQuery(\n  $query: String!\n  $includeResults: Boolean!\n) {\n  ...SearchScene_search_1dc2Le\n}\n\nfragment SearchResults_results on TvShowConnection {\n  edges {\n    node {\n      id\n      ...TvShowListItem_data\n    }\n  }\n}\n\nfragment SearchScene_search_1dc2Le on RootQuery {\n  searchTvShow(query: $query) @include(if: $includeResults) {\n    ...SearchResults_results\n  }\n}\n\nfragment TvShowListItem_data on TvShow {\n  id\n  name\n  status\n  rating\n  image {\n    medium\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'a77a4d177df5ce792299004b3916c280';
export default node;
