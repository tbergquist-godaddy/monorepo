/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type episodeQueryVariables = {
    id: string;
};
export type episodeQueryResponse = {
    readonly episode: {
        readonly name: string | null;
        readonly summary: string | null;
        readonly seasonAndNumber: string | null;
        readonly image: {
            readonly medium: string | null;
        } | null;
    } | null;
};
export type episodeQuery = {
    readonly response: episodeQueryResponse;
    readonly variables: episodeQueryVariables;
};



/*
query episodeQuery(
  $id: ID!
) {
  episode(id: $id) {
    name
    summary
    seasonAndNumber
    image {
      medium
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "seasonAndNumber",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "medium",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "episodeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Episode",
        "kind": "LinkedField",
        "name": "episode",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TvHelperImage",
            "kind": "LinkedField",
            "name": "image",
            "plural": false,
            "selections": [
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "episodeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Episode",
        "kind": "LinkedField",
        "name": "episode",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TvHelperImage",
            "kind": "LinkedField",
            "name": "image",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2f2971fff6c38d065f75c40130d7d88a",
    "id": null,
    "metadata": {},
    "name": "episodeQuery",
    "operationKind": "query",
    "text": "query episodeQuery(\n  $id: ID!\n) {\n  episode(id: $id) {\n    name\n    summary\n    seasonAndNumber\n    image {\n      medium\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd527dab3f94266d2f1db62d499458bd1';
export default node;
