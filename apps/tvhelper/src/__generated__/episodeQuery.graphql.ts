/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type episodeQueryVariables = {
    id: string;
};
export type episodeQueryResponse = {
    readonly episode: {
        readonly name: string | null;
        readonly seasonAndNumber: string | null;
        readonly " $fragmentRefs": FragmentRefs<"imageSummary" | "actionBar">;
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
    seasonAndNumber
    ...imageSummary
    ...actionBar
    id
  }
}

fragment actionBar on Episode {
  watched
  ...useToggleWatched
}

fragment imageSummary on ImageSummary {
  __isImageSummary: __typename
  image {
    medium
    id
  }
  summary(stripTags: false)
}

fragment useToggleWatched on Episode {
  id
  watched
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
  "name": "seasonAndNumber",
  "storageKey": null
},
v4 = {
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "imageSummary"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "actionBar"
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "watched",
            "storageKey": null
          },
          (v4/*: any*/),
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
                  (v4/*: any*/)
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c74a1158a945e4b90a3016e717feccb3",
    "id": null,
    "metadata": {},
    "name": "episodeQuery",
    "operationKind": "query",
    "text": "query episodeQuery(\n  $id: ID!\n) {\n  episode(id: $id) {\n    name\n    seasonAndNumber\n    ...imageSummary\n    ...actionBar\n    id\n  }\n}\n\nfragment actionBar on Episode {\n  watched\n  ...useToggleWatched\n}\n\nfragment imageSummary on ImageSummary {\n  __isImageSummary: __typename\n  image {\n    medium\n    id\n  }\n  summary(stripTags: false)\n}\n\nfragment useToggleWatched on Episode {\n  id\n  watched\n}\n"
  }
};
})();
(node as any).hash = '1883b22f35c655325f11e7fc3cd2d47e';
export default node;
