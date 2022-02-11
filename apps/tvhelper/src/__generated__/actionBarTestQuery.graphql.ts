/**
 * @generated SignedSource<<a62e3e337fe5cab8905ab956fb39d474>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type actionBarTestQuery$variables = {};
export type actionBarTestQuery$data = {
  readonly episode: {
    readonly id: string;
    readonly watched: boolean | null;
    readonly " $fragmentSpreads": FragmentRefs<"actionBar">;
  } | null;
};
export type actionBarTestQuery = {
  variables: actionBarTestQuery$variables;
  response: actionBarTestQuery$data;
};

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
},
v3 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
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
            "concreteType": "TvShow",
            "kind": "LinkedField",
            "name": "tvShow",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
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
    "cacheID": "86375edb7f5acab66f5541a331f23378",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "episode": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Episode"
        },
        "episode.id": (v3/*: any*/),
        "episode.tvShow": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "TvShow"
        },
        "episode.tvShow.id": (v3/*: any*/),
        "episode.tvShow.name": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
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
    "text": "query actionBarTestQuery {\n  episode(id: \"1\") {\n    id\n    watched\n    ...actionBar\n  }\n}\n\nfragment actionBar on Episode {\n  watched\n  tvShow {\n    id\n    name\n  }\n  ...watchedDate\n}\n\nfragment watchedDate on Episode {\n  watchedDate\n  watched\n}\n"
  }
};
})();

(node as any).hash = "74fa1aafbb31006bc2e8588fbf2672af";

export default node;
