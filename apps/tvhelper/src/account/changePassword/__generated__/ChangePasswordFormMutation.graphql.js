/**
 * @flow
 */

/* eslint-disable */

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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "newPassword",
    "type": "String!"
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
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "success",
      "storageKey": null
    }
  ],
  "type": "ChangePasswordResponse"
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "ChangePasswordError"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ChangePasswordFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "tvHelperChangePassword",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChangePasswordFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "tvHelperChangePassword",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ChangePasswordFormMutation",
    "operationKind": "mutation",
    "text": "mutation ChangePasswordFormMutation(\n  $password: String!\n  $newPassword: String!\n) {\n  tvHelperChangePassword(password: $password, newPassword: $newPassword) {\n    __typename\n    ... on ChangePasswordResponse {\n      success\n    }\n    ... on ChangePasswordError {\n      message\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '82e55a8530cecc78b3863d8488df4bbd';
export default node;
