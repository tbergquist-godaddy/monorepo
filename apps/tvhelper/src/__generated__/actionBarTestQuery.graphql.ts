/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type actionBarTestQueryVariables = {};
export type actionBarTestQueryResponse = {
    readonly episode: {
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
    ...actionBar
    id
  }
}

fragment actionBar on Episode {
  watched
  ...useToggleWatched
}

fragment useToggleWatched on Episode {
  id
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
];
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "watched",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "episode(id:\"1\")"
      }
    ]
  },
  "params": {
    "cacheID": "0f15e83fcd48ea93baa55c7a26ff2eae",
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
        }
      }
    },
    "name": "actionBarTestQuery",
    "operationKind": "query",
    "text": "query actionBarTestQuery {\n  episode(id: \"1\") {\n    ...actionBar\n    id\n  }\n}\n\nfragment actionBar on Episode {\n  watched\n  ...useToggleWatched\n}\n\nfragment useToggleWatched on Episode {\n  id\n  watched\n}\n"
  }
};
})();
(node as any).hash = 'a08d0562f7cfb02158eb7fbae23c507f';
export default node;
