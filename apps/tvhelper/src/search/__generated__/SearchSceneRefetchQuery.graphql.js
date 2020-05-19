/**
 * @flow
 */

/* eslint-disable */

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
    "name": "SearchSceneRefetchQuery",
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
      }
    ],
    "type": "RootQuery"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchSceneRefetchQuery",
    "selections": [
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
    "name": "SearchSceneRefetchQuery",
    "operationKind": "query",
    "text": "query SearchSceneRefetchQuery(\n  $query: String!\n  $includeResults: Boolean!\n) {\n  ...SearchScene_search_1dc2Le\n}\n\nfragment SearchResults_results on TvShowConnection {\n  edges {\n    node {\n      id\n      ...TvShowListItem_data\n    }\n  }\n}\n\nfragment SearchScene_search_1dc2Le on RootQuery {\n  searchTvShow(query: $query) @include(if: $includeResults) {\n    ...SearchResults_results\n  }\n}\n\nfragment TvShowListItem_data on TvShow {\n  id\n  name\n  status\n  rating\n  image {\n    medium\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = 'a77a4d177df5ce792299004b3916c280';
export default node;
