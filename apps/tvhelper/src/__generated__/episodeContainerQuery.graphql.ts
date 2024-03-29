/**
 * @generated SignedSource<<88f7a6cc055681173e2f6bd8847a072c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type episodeContainerQuery$variables = {
  id: string;
};
export type episodeContainerQuery$data = {
  readonly episode: {
    readonly id: string;
    readonly watched: boolean | null;
    readonly " $fragmentSpreads": FragmentRefs<"episode">;
  } | null;
};
export type episodeContainerQuery = {
  variables: episodeContainerQuery$variables;
  response: episodeContainerQuery$data;
};

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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "watched",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "episodeContainerQuery",
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "episode"
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
    "name": "episodeContainerQuery",
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
            "kind": "ScalarField",
            "name": "seasonAndNumber",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TvHelperImage",
                "kind": "LinkedField",
                "name": "image",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "medium",
                    "storageKey": null
                  },
                  (v2/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "stripTags",
                    "value": false
                  }
                ],
                "kind": "ScalarField",
                "name": "summary",
                "storageKey": "summary(stripTags:false)"
              }
            ],
            "type": "ImageSummary",
            "abstractKey": "__isImageSummary"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "TvShow",
            "kind": "LinkedField",
            "name": "tvShow",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/)
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "65d463cdb952ef5af0d2624649299da4",
    "id": null,
    "metadata": {},
    "name": "episodeContainerQuery",
    "operationKind": "query",
    "text": "query episodeContainerQuery(\n  $id: ID!\n) {\n  episode(id: $id) {\n    id\n    watched\n    ...episode\n  }\n}\n\nfragment actionBar on Episode {\n  watched\n  tvShow {\n    id\n    name\n  }\n  ...watchedDate\n}\n\nfragment episode on Episode {\n  name\n  seasonAndNumber\n  ...imageSummary\n  ...actionBar\n}\n\nfragment imageSummary on ImageSummary {\n  __isImageSummary: __typename\n  image {\n    medium\n    id\n  }\n  summary(stripTags: false)\n}\n\nfragment watchedDate on Episode {\n  watchedDate\n  watched\n}\n"
  }
};
})();

(node as any).hash = "d46bded01e2adbaccd1a6b2554d07c37";

export default node;
