/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type createUserMutationVariables = {
    username: string;
    password: string;
    email: string;
};
export type createUserMutationResponse = {
    readonly createUser: {
        readonly success: boolean | null;
    } | null;
};
export type createUserMutation = {
    readonly response: createUserMutationResponse;
    readonly variables: createUserMutationVariables;
};



/*
mutation createUserMutation(
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
    "name": "createUserMutation",
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
    "name": "createUserMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "ea49701e432506ad1a8a55ddc7ffa269",
    "id": null,
    "metadata": {},
    "name": "createUserMutation",
    "operationKind": "mutation",
    "text": "mutation createUserMutation(\n  $username: String!\n  $password: String!\n  $email: String!\n) {\n  createUser(username: $username, password: $password, email: $email) {\n    success\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fe65e1343228277eb43cb31f00af16e1';
export default node;
