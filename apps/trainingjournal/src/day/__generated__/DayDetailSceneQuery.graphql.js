/**
 * @flow
 * @relayHash 1cc0f88a899dd6a14ba21c422bffdcec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DayDetailSceneQueryVariables = {|
  dayId: string
|};
export type DayDetailSceneQueryResponse = {|
  +day: ?{|
    +name: ?string
  |}
|};
export type DayDetailSceneQuery = {|
  variables: DayDetailSceneQueryVariables,
  response: DayDetailSceneQueryResponse,
|};
*/


/*
query DayDetailSceneQuery(
  $dayId: ID!
) {
  day(dayId: $dayId) {
    name
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "dayId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "dayId",
    "variableName": "dayId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DayDetailSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "day",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Day",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DayDetailSceneQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "day",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Day",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DayDetailSceneQuery",
    "id": null,
    "text": "query DayDetailSceneQuery(\n  $dayId: ID!\n) {\n  day(dayId: $dayId) {\n    name\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '092ad19d0cd2ff369065fd3facd63fb3';
module.exports = node;
