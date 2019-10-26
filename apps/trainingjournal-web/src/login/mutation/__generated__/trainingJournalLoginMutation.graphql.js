/**
 * @flow
 * @relayHash b67bbdfec0337b1a2ff49e10d5b9d90d
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
    +token: ?string,
    +success: ?boolean,
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
    token
    success
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
        "name": "token",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
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
    "text": "mutation trainingJournalLoginMutation(\n  $username: String!\n  $password: String!\n) {\n  trainingJournalLogin(username: $username, password: $password) {\n    token\n    success\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '71210f1b192fd97825ec7b37f053dc97';
module.exports = node;
