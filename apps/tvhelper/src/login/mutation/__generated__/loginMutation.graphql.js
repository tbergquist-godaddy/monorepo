/**
 * @flow
 */

/* eslint-disable */

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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v2 = [
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
    "name": "tvHelperLogin",
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
        "name": "token",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "loginMutation",
    "selections": (v2/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "loginMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "fd6c59b8b8bc3494ceaec2ee80767016",
    "id": null,
    "metadata": {},
    "name": "loginMutation",
    "operationKind": "mutation",
    "text": "mutation loginMutation(\n  $username: String!\n  $password: String!\n) {\n  tvHelperLogin(username: $username, password: $password) {\n    success\n    token\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '2851893dd75dca8660f0980ca9504cae';
export default node;
