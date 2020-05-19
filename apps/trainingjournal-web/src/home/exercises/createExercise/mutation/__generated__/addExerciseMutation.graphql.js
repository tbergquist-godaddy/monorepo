/**
 * @flow
 */

/* eslint-disable */

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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateExerciseInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "exercise",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateExercise",
    "kind": "LinkedField",
    "name": "createExercise",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "ExerciseEdge",
        "kind": "LinkedField",
        "name": "exerciseEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Exercise",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
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
                "name": "videoUrl",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "muscleGroups",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "addExerciseMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addExerciseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "addExerciseMutation",
    "operationKind": "mutation",
    "text": "mutation addExerciseMutation(\n  $input: CreateExerciseInput!\n) {\n  createExercise(exercise: $input) {\n    exerciseEdge {\n      node {\n        id\n        name\n        videoUrl\n        description\n        muscleGroups\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = 'dce9cdc0aef2a7435c597d1411b8a7e8';
export default node;
