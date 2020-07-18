/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserErrorReason = "EMAIL_EXISTS" | "UNKNOWN_ERROR" | "USERNAME_EXISTS" | "%future added value";
export type CreateUserInput = {|
  email: string,
  password: string,
  username: string,
|};
export type SignupFormMutationVariables = {|
  input: CreateUserInput
|};
export type SignupFormMutationResponse = {|
  +createUser: ?{|
    +__typename: "User",
    +reason?: ?CreateUserErrorReason,
  |}
|};
export type SignupFormMutation = {|
  variables: SignupFormMutationVariables,
  response: SignupFormMutationResponse,
|};

/*
mutation SignupFormMutation(
  $input: CreateUserInput!
) {
  createUser(input: $input) {
    __typename
    ... on User {
      __typename
    }
    ... on CreateUserError {
      reason
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "reason",
      "storageKey": null
    }
  ],
  "type": "CreateUserError",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignupFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createUser",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/)
            ],
            "type": "User",
            "abstractKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignupFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "23922e643a8b15febef7de6ddf8eb880",
    "id": null,
    "metadata": {},
    "name": "SignupFormMutation",
    "operationKind": "mutation",
    "text": "mutation SignupFormMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    __typename\n    ... on User {\n      __typename\n    }\n    ... on CreateUserError {\n      reason\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = '49a06b708ac978e1646a5dce639ed011';
export default node;
