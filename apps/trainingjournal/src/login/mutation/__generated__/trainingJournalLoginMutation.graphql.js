/**
 * @flow
 * @relayHash 4c679f1c1ec24c5b21ea40399eca0fd0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type trainingJournalLoginMutationVariables = {|
  username: string,
  password: string,
|};
export type trainingJournalLoginMutationResponse = {|
  +trainingJournalLogin: ?{|
    +success: ?boolean,
    +token: ?string,
  |}
|};
export type trainingJournalLoginMutation = {|
  variables: trainingJournalLoginMutationVariables,
  response: trainingJournalLoginMutationResponse,
|};
*/


/*
mutation trainingJournalLoginMutation(
  $username: String!
  $password: String!
) {
  trainingJournalLogin(username: $username, password: $password) {
    success
    token
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "trainingJournalLogin",
    "storageKey": null,
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
        "name": "token",
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
    "name": "trainingJournalLoginMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "trainingJournalLoginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "trainingJournalLoginMutation",
    "id": null,
    "text": "mutation trainingJournalLoginMutation(\n  $username: String!\n  $password: String!\n) {\n  trainingJournalLogin(username: $username, password: $password) {\n    success\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17776b304d68865cc1d5ba4c7d072038';
module.exports = node;
