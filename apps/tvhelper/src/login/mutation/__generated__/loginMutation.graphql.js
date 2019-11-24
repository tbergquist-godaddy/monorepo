/**
 * @flow
 * @relayHash 5086013721af3359693a5a28ff8c5871
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
export type loginMutationVariables = {|
  username: string,
  password: string,
|};
export type loginMutationResponse = {|
  +tvHelperLogin: ?{|
    +success: ?boolean,
    +token: ?string,
  |}
|};
export type loginMutation = {|
  variables: loginMutationVariables,
  response: loginMutationResponse,
|};

/*
mutation loginMutation(
  $username: String!
  $password: String!
) {
  tvHelperLogin(username: $username, password: $password) {
    success
    token
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
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "tvHelperLogin",
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
    "name": "loginMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "loginMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "loginMutation",
    "id": null,
    "text": "mutation loginMutation(\n  $username: String!\n  $password: String!\n) {\n  tvHelperLogin(username: $username, password: $password) {\n    success\n    token\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '2851893dd75dca8660f0980ca9504cae';
export default node;
