/**
 * @flow
 * @relayHash 5003df0f98c6b6a8b4db51eca0b73f55
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginMutationVariables = {|
  username: string,
  password: string,
|};
export type LoginMutationResponse = {|
  +trainingJournalLogin: ?{|
    +success: ?boolean,
    +token: ?string,
  |}
|};
export type LoginMutation = {|
  variables: LoginMutationVariables,
  response: LoginMutationResponse,
|};
*/


/*
mutation LoginMutation(
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
    "name": "LoginMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "LoginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "LoginMutation",
    "id": null,
    "text": "mutation LoginMutation(\n  $username: String!\n  $password: String!\n) {\n  trainingJournalLogin(username: $username, password: $password) {\n    success\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5a33f999b5e26125671e3ec948eb9cfb';
module.exports = node;
