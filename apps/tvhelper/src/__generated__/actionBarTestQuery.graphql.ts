/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type actionBarTestQueryVariables = {};
export type actionBarTestQueryResponse = {
    readonly episode: {
        readonly id: string;
        readonly watched: boolean | null;
        readonly " $fragmentRefs": FragmentRefs<"actionBar">;
    } | null;
};
export type actionBarTestQuery = {
    readonly response: actionBarTestQueryResponse;
    readonly variables: actionBarTestQueryVariables;
};



/*
query actionBarTestQuery {
  episode(id: "1") {
    id
    watched
    ...actionBar
  }
}

fragment actionBar on Episode {
  watched
  ...watchedDate
}

fragment watchedDate on Episode {
  watchedDate
  watched
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "1"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "watched",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "actionBarTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Episode",
        "kind": "LinkedField",
        "name": "episode",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "actionBar"
          }
        ],
        "storageKey": "episode(id:\"1\")"
      }
    ],
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "actionBarTestQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Episode",
        "kind": "LinkedField",
        "name": "episode",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "watchedDate",
            "storageKey": null
          }
        ],
        "storageKey": "episode(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "20c4f488c79ee5d8ecaa2b91928d41d2",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "episode": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Episode"
        },
        "episode.id": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "ID"
        },
        "episode.watched": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Boolean"
        },
        "episode.watchedDate": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Date"
        }
      }
    },
    "name": "actionBarTestQuery",
    "operationKind": "query",
    "text": "query actionBarTestQuery {\n  episode(id: \"1\") {\n    id\n    watched\n    ...actionBar\n  }\n}\n\nfragment actionBar on Episode {\n  watched\n  ...watchedDate\n}\n\nfragment watchedDate on Episode {\n  watchedDate\n  watched\n}\n"
  }
};
})();
(node as any).hash = '74fa1aafbb31006bc2e8588fbf2672af';
export default node;
