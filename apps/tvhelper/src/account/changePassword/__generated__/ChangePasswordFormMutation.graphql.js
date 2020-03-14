/**
 * @flow
 * @relayHash 9cd3f8ff107bf85b32704f0542ef5451
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
export type ChangePasswordFormMutationVariables = {|
  password: string,
  newPassword: string,
|};
export type ChangePasswordFormMutationResponse = {|
  +tvHelperChangePassword: ?{|
    +success?: ?boolean,
    +message?: ?string,
  |}
|};
export type ChangePasswordFormMutation = {|
  variables: ChangePasswordFormMutationVariables,
  response: ChangePasswordFormMutationResponse,
|};

/*
mutation ChangePasswordFormMutation(
  $password: String!
  $newPassword: String!
) {
  tvHelperChangePassword(password: $password, newPassword: $newPassword) {
    __typename
    ... on ChangePasswordResponse {
      success
    }
    ... on ChangePasswordError {
      message
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "newPassword",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "newPassword",
    "variableName": "newPassword"
  },
  {
    "kind": "Variable",
    "name": "password",
    "variableName": "password"
  }
],
v2 = {
  "kind": "InlineFragment",
  "type": "ChangePasswordResponse",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "success",
      "args": null,
      "storageKey": null
    }
  ]
},
v3 = {
  "kind": "InlineFragment",
  "type": "ChangePasswordError",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "message",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ChangePasswordFormMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tvHelperChangePassword",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ChangePasswordFormMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tvHelperChangePassword",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ChangePasswordFormMutation",
    "id": null,
    "text": "mutation ChangePasswordFormMutation(\n  $password: String!\n  $newPassword: String!\n) {\n  tvHelperChangePassword(password: $password, newPassword: $newPassword) {\n    __typename\n    ... on ChangePasswordResponse {\n      success\n    }\n    ... on ChangePasswordError {\n      message\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = '82e55a8530cecc78b3863d8488df4bbd';
export default node;
