/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
export type CreateTjUserMutationVariables = {|
  username: string,
  password: string,
  email: string,
|};
export type CreateTjUserMutationResponse = {|
  +createTrainingjournalUser: ?{|
    +id: string
  |}
|};
export type CreateTjUserMutation = {|
  variables: CreateTjUserMutationVariables,
  response: CreateTjUserMutationResponse,
|};

/*
mutation CreateTjUserMutation(
  $username: String!
  $password: String!
  $email: String!
) {
  createTrainingjournalUser(username: $username, password: $password, email: $email) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "concreteType": "CreateTrainingJournalUser",
    "kind": "LinkedField",
    "name": "createTrainingjournalUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "CreateTjUserMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateTjUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateTjUserMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTjUserMutation(\n  $username: String!\n  $password: String!\n  $email: String!\n) {\n  createTrainingjournalUser(username: $username, password: $password, email: $email) {\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = 'df1ddacd1af7470500b7bda81bac73f9';
export default node;
