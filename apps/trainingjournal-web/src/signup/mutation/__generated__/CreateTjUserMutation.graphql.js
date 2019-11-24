/**
 * @flow
 * @relayHash 76a3597aee015e342a98e02a83ea754c
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createTrainingjournalUser",
    "storageKey": null,
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
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
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
    "name": "CreateTjUserMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateTjUserMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateTjUserMutation",
    "id": null,
    "text": "mutation CreateTjUserMutation(\n  $username: String!\n  $password: String!\n  $email: String!\n) {\n  createTrainingjournalUser(username: $username, password: $password, email: $email) {\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'df1ddacd1af7470500b7bda81bac73f9';
export default node;
