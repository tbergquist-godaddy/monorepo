/**
 * @flow
 * @relayHash a0b2942f1f84455051ef6fb0183555d9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SelectExerciseQueryVariables = {||};
export type SelectExerciseQueryResponse = {|
  +baseExercises: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
      |}
    |}>
  |}
|};
export type SelectExerciseQuery = {|
  variables: SelectExerciseQueryVariables,
  response: SelectExerciseQueryResponse,
|};
*/


/*
query SelectExerciseQuery {
  baseExercises(first: 1000) {
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
    "kind": "LinkedField",
    "alias": null,
    "name": "baseExercises",
    "storageKey": "baseExercises(first:1000)",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 1000
      }
    ],
    "concreteType": "BaseExerciseConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "BaseExerciseEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "BaseExercise",
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
    "name": "SelectExerciseQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SelectExerciseQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "SelectExerciseQuery",
    "id": null,
    "text": "query SelectExerciseQuery {\n  baseExercises(first: 1000) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e0484529adf991ced7dd0f4e56df50f8';
module.exports = node;
