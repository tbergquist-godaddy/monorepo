/**
 * @flow
 * @relayHash c554542816cd0e4686135304582dbecb
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "exercise",
    "type": "CreateExerciseInput!",
    "defaultValue": null
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
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "editExerciseMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editExercise",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                    "kind": "FragmentSpread",
                    "name": "EditExercise_exercise",
                    "args": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "editExerciseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "editExercise",
        "storageKey": null,
        "args": (v1/*: any*/),
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
                    "name": "muscleGroups",
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
    "operationKind": "mutation",
    "name": "editExerciseMutation",
    "id": null,
    "text": "mutation editExerciseMutation(\n  $id: ID!\n  $exercise: CreateExerciseInput!\n) {\n  editExercise(exerciseId: $id, exercise: $exercise) {\n    exerciseEdge {\n      node {\n        ...EditExercise_exercise\n        id\n      }\n    }\n  }\n}\n\nfragment EditExercise_exercise on Exercise {\n  id\n  name\n  muscleGroups\n  videoUrl\n  description\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '85cfa7827f8810d9dd64e6ce40821a52';
export default node;
