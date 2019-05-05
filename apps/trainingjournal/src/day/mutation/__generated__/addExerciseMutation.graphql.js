/**
 * @flow
 * @relayHash 454eab696a9011e5169a22ff28d55d7a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ExerciseInput = {|
  breakTime: number,
  dayId: string,
  description?: ?string,
  reps: string,
  set: string,
  baseExerciseId: string,
|};
export type addExerciseMutationVariables = {|
  exercise: ExerciseInput
|};
export type addExerciseMutationResponse = {|
  +createExercise: ?{|
    +exerciseEdge: ?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +set: ?string,
        +reps: ?string,
        +breakTime: ?string,
        +baseExercise: ?{|
          +id: string,
          +name: ?string,
        |},
      |}
    |}
  |}
|};
export type addExerciseMutation = {|
  variables: addExerciseMutationVariables,
  response: addExerciseMutationResponse,
|};
*/


/*
mutation addExerciseMutation(
  $exercise: ExerciseInput!
) {
  createExercise(exercise: $exercise) {
    exerciseEdge {
      node {
        id
        name
        set
        reps
        breakTime
        baseExercise {
          id
          name
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "exercise",
    "type": "ExerciseInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createExercise",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "exercise",
        "variableName": "exercise"
      }
    ],
    "concreteType": "CreateExerciseEdge",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "exerciseEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "ExerciseEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Exercise",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "set",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "reps",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "breakTime",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "baseExercise",
                "storageKey": null,
                "args": null,
                "concreteType": "BaseExercise",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/)
                ]
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
    "name": "addExerciseMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "addExerciseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "addExerciseMutation",
    "id": null,
    "text": "mutation addExerciseMutation(\n  $exercise: ExerciseInput!\n) {\n  createExercise(exercise: $exercise) {\n    exerciseEdge {\n      node {\n        id\n        name\n        set\n        reps\n        breakTime\n        baseExercise {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bfbbb68d9cd8892534ac08f5ac9ea3e8';
module.exports = node;
