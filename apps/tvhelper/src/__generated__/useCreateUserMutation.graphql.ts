/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type useCreateUserMutationVariables = {
    username: string;
    password: string;
    email: string;
};
export type useCreateUserMutationResponse = {
    readonly createUser: {
        readonly success: boolean | null;
    } | null;
};
export type useCreateUserMutation = {
    readonly response: useCreateUserMutationResponse;
    readonly variables: useCreateUserMutationVariables;
};



/*
mutation useCreateUserMutation(
  $username: String!
  $password: String!
  $email: String!
) {
  createUser(username: $username, password: $password, email: $email) {
    success
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "email"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "password"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "username"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
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
    "concreteType": "CreateUserMutation",
    "kind": "LinkedField",
    "name": "createUser",
    "plural": false,
    "selections": [
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateUserMutation",
    "selections": (v3/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useCreateUserMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "028f4cb420e1c1322c6b8525c9b10fa6",
    "id": null,
    "metadata": {},
    "name": "useCreateUserMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateUserMutation(\n  $username: String!\n  $password: String!\n  $email: String!\n) {\n  createUser(username: $username, password: $password, email: $email) {\n    success\n  }\n}\n"
  }
};
})();
(node as any).hash = '3234930c16f96ffd7b1eb579498befec';
export default node;
