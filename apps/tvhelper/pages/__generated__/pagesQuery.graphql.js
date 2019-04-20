/**
 * @flow
 * @relayHash a1aa9745513fa83591868b4fc5a8db15
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type pagesQueryVariables = {|
  query: string
|};
export type pagesQueryResponse = {|
  +searchTvShow: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: ?string,
        +name: ?string,
      |}
    |}>
  |}
|};
export type pagesQuery = {|
  variables: pagesQueryVariables,
  response: pagesQueryResponse,
|};
*/


/*
query pagesQuery(
  $query: String!
) {
  searchTvShow(query: $query) {
    edges {
      node {
        id
        name
      }
    }
  }
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
    "kind": "LinkedField",
    "alias": null,
    "name": "searchTvShow",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "query",
        "variableName": "query",
        "type": "String!"
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
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "pagesQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "pagesQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "pagesQuery",
    "id": null,
    "text": "query pagesQuery(\n  $query: String!\n) {\n  searchTvShow(query: $query) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dba42d1697cc19ccb27d7d4827e9fcb3';
module.exports = node;
