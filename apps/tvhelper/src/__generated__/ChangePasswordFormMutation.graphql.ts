/**
 * @generated SignedSource<<15a0664331741cefea6321c452bea82b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ChangePasswordFormMutation$variables = {
  password: string;
  newPassword: string;
};
export type ChangePasswordFormMutationVariables = ChangePasswordFormMutation$variables;
export type ChangePasswordFormMutation$data = {
  readonly tvHelperChangePassword: {
    readonly success?: boolean | null;
    readonly message?: string | null;
  } | null;
};
export type ChangePasswordFormMutationResponse = ChangePasswordFormMutation$data;
export type ChangePasswordFormMutation = {
  variables: ChangePasswordFormMutationVariables;
  response: ChangePasswordFormMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "newPassword"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v2 = [
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
v3 = {
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
  "type": "ChangePasswordResponse",
  "abstractKey": null
},
v4 = {
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
  "type": "ChangePasswordError",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ChangePasswordFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "tvHelperChangePassword",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
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
    "name": "ChangePasswordFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ccbbe870ca59251798bcd8cd0eb090f3",
    "id": null,
    "metadata": {},
    "name": "ChangePasswordFormMutation",
    "operationKind": "mutation",
    "text": "mutation ChangePasswordFormMutation(\n  $password: String!\n  $newPassword: String!\n) {\n  tvHelperChangePassword(password: $password, newPassword: $newPassword) {\n    __typename\n    ... on ChangePasswordResponse {\n      success\n    }\n    ... on ChangePasswordError {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "82e55a8530cecc78b3863d8488df4bbd";

export default node;
