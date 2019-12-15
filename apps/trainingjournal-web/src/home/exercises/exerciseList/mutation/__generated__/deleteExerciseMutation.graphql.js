/**
 * @flow
 * @relayHash 838bbf3fac5563400d25760146fd94ea
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteExercise",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "DeletedEpisode",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "exerciseId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "deleteExerciseMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "deleteExerciseMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "deleteExerciseMutation",
    "id": null,
    "text": "mutation deleteExerciseMutation(\n  $id: ID!\n) {\n  deleteExercise(id: $id) {\n    success\n    exerciseId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '14f04535cd22e04efe65f3066739415f';
export default node;
