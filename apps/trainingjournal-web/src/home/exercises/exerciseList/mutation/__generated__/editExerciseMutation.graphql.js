/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type EditExercise_exercise$ref = any;
export type CreateExerciseInput = {|
  description?: ?string,
  muscleGroups?: ?string,
  name: string,
  videoUrl?: ?string,
|};
export type editExerciseMutationVariables = {|
  id: string,
  exercise: CreateExerciseInput,
|};
export type editExerciseMutationResponse = {|
  +editExercise: ?{|
    +exerciseEdge: ?{|
      +node: ?{|
        +$fragmentRefs: EditExercise_exercise$ref
      |}
    |}
  |}
|};
export type editExerciseMutation = {|
  variables: editExerciseMutationVariables,
  response: editExerciseMutationResponse,
|};

/*
mutation editExerciseMutation(
  $id: ID!
  $exercise: CreateExerciseInput!
) {
  editExercise(exerciseId: $id, exercise: $exercise) {
    exerciseEdge {
      node {
        ...EditExercise_exercise
        id
      }
    }
  }
}

fragment EditExercise_exercise on Exercise {
  id
  name
  muscleGroups
  videoUrl
  description
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "exercise",
    "type": "CreateExerciseInput!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "exercise",
    "variableName": "exercise"
  },
  {
    "kind": "Variable",
    "name": "exerciseId",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "editExerciseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateExercise",
        "kind": "LinkedField",
        "name": "editExercise",
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
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "EditExercise_exercise"
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
    ],
    "type": "RootMutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "editExerciseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateExercise",
        "kind": "LinkedField",
        "name": "editExercise",
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
                    "name": "muscleGroups",
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
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "editExerciseMutation",
    "operationKind": "mutation",
    "text": "mutation editExerciseMutation(\n  $id: ID!\n  $exercise: CreateExerciseInput!\n) {\n  editExercise(exerciseId: $id, exercise: $exercise) {\n    exerciseEdge {\n      node {\n        ...EditExercise_exercise\n        id\n      }\n    }\n  }\n}\n\nfragment EditExercise_exercise on Exercise {\n  id\n  name\n  muscleGroups\n  videoUrl\n  description\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '85cfa7827f8810d9dd64e6ce40821a52';
export default node;
