/**
 * @flow
 * @relayHash f74200d56c98b4e9eff72ae758dec203
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SearchResults_results$ref = any;
export type SearchQueryVariables = {|
  query: string
|};
export type SearchQueryResponse = {|
  +searchTvShow: ?{|
    +$fragmentRefs: SearchResults_results$ref
  |}
|};
export type SearchQuery = {|
  variables: SearchQueryVariables,
  response: SearchQueryResponse,
|};
*/


/*
query SearchQuery(
  $query: String!
) {
  searchTvShow(query: $query) {
    ...SearchResults_results
  }
}

fragment SearchResults_results on TvShowConnection {
  edges {
    node {
      id
      ...SearchResultItem_tvShow
    }
  }
}

fragment SearchResultItem_tvShow on TvShow {
  name
  rating
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "query",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query",
    "type": "String!"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "SearchQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchTvShow",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TvShowConnection",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SearchResults_results",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SearchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchTvShow",
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
                    "name": "rating",
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
    "name": "SearchQuery",
    "id": null,
    "text": "query SearchQuery(\n  $query: String!\n) {\n  searchTvShow(query: $query) {\n    ...SearchResults_results\n  }\n}\n\nfragment SearchResults_results on TvShowConnection {\n  edges {\n    node {\n      id\n      ...SearchResultItem_tvShow\n    }\n  }\n}\n\nfragment SearchResultItem_tvShow on TvShow {\n  name\n  rating\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c69f5a9aeaf684503729d266883c255c';
module.exports = node;
