/**
 * @flow
 * @relayHash e49907b76c0900765568b50eef1aeda8
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
export type CreateExerciseInput = {|
  description?: ?string,
  muscleGroups?: ?string,
  name: string,
  videoUrl?: ?string,
|};
export type addExerciseMutationVariables = {|
  input: CreateExerciseInput
|};
export type addExerciseMutationResponse = {|
  +createExercise: ?{|
    +exerciseEdge: ?{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +videoUrl: ?string,
        +description: ?string,
        +muscleGroups: ?string,
      |}
    |}
  |}
|};
export type addExerciseMutation = {|
  variables: addExerciseMutationVariables,
  response: addExerciseMutationResponse,
|};

/*
mutation addExerciseMutation(
  $input: CreateExerciseInput!
) {
  createExercise(exercise: $input) {
    exerciseEdge {
      node {
        id
        name
        videoUrl
        description
        muscleGroups
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateExerciseInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createExercise",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "exercise",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateExercise",
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
                "name": "videoUrl",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "muscleGroups",
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
    "name": "addExerciseMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "addExerciseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "addExerciseMutation",
    "id": null,
    "text": "mutation addExerciseMutation(\n  $input: CreateExerciseInput!\n) {\n  createExercise(exercise: $input) {\n    exerciseEdge {\n      node {\n        id\n        name\n        videoUrl\n        description\n        muscleGroups\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'dce9cdc0aef2a7435c597d1411b8a7e8';
export default node;
