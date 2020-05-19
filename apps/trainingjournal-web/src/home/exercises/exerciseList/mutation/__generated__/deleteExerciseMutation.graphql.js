/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
export type deleteExerciseMutationVariables = {|
  id: string
|};
export type deleteExerciseMutationResponse = {|
  +deleteExercise: ?{|
    +success: ?boolean,
    +exerciseId: ?string,
  |}
|};
export type deleteExerciseMutation = {|
  variables: deleteExerciseMutationVariables,
  response: deleteExerciseMutationResponse,
|};

/*
mutation deleteExerciseMutation(
  $id: ID!
) {
  deleteExercise(id: $id) {
    success
    exerciseId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "DeletedEpisode",
    "kind": "LinkedField",
    "name": "deleteExercise",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "exerciseId",
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
    "name": "deleteExerciseMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteExerciseMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "deleteExerciseMutation",
    "operationKind": "mutation",
    "text": "mutation deleteExerciseMutation(\n  $id: ID!\n) {\n  deleteExercise(id: $id) {\n    success\n    exerciseId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '14f04535cd22e04efe65f3066739415f';
export default node;
