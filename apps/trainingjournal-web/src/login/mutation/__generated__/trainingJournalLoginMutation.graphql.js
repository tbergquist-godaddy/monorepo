/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
export type trainingJournalLoginMutationVariables = {|
  username: string,
  password: string,
|};
export type trainingJournalLoginMutationResponse = {|
  +trainingJournalLogin: ?{|
    +token: ?string,
    +success: ?boolean,
  |}
|};
export type trainingJournalLoginMutation = {|
  variables: trainingJournalLoginMutationVariables,
  response: trainingJournalLoginMutationResponse,
|};

/*
mutation trainingJournalLoginMutation(
  $username: String!
  $password: String!
) {
  trainingJournalLogin(username: $username, password: $password) {
    token
    success
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
  }
],
v1 = [
  {
    "alias": null,
    "args": [
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
    "concreteType": "LoginType",
    "kind": "LinkedField",
    "name": "trainingJournalLogin",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
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
    "name": "trainingJournalLoginMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "trainingJournalLoginMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "trainingJournalLoginMutation",
    "operationKind": "mutation",
    "text": "mutation trainingJournalLoginMutation(\n  $username: String!\n  $password: String!\n) {\n  trainingJournalLogin(username: $username, password: $password) {\n    token\n    success\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '71210f1b192fd97825ec7b37f053dc97';
export default node;
