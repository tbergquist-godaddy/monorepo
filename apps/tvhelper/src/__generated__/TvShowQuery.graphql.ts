/**
 * @generated SignedSource<<35c240e239b4ad006e869d26e6a91f6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TvShowQuery$variables = {
  id: string;
};
export type TvShowQueryVariables = TvShowQuery$variables;
export type TvShowQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"TvShowPage_tvShow">;
  } | null;
};
export type TvShowQueryResponse = TvShowQuery$data;
export type TvShowQuery = {
  variables: TvShowQueryVariables;
  response: TvShowQuery$data;
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
  "name": "name",
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TvShowQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TvShowPage_tvShow"
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
    "name": "TvShowQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Network",
                "kind": "LinkedField",
                "name": "network",
                "plural": false,
                "selections": (v4/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isFavorite",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Episode",
                "kind": "LinkedField",
                "name": "episodes",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "seasonAndNumber",
                    "storageKey": null
                  },
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "airdate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "summary",
                    "storageKey": null
                  },
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
                    "concreteType": "TvShow",
                    "kind": "LinkedField",
                    "name": "tvShow",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": null
                  }
                ],
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
              }
            ],
            "type": "TvShow",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "773375de21f42aa5256c3ef693c49160",
    "id": null,
    "metadata": {},
    "name": "TvShowQuery",
    "operationKind": "query",
    "text": "query TvShowQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TvShowPage_tvShow\n    id\n  }\n}\n\nfragment Episodes_episodes on TvShow {\n  episodes {\n    id\n    seasonAndNumber\n    ...episodeListItem\n  }\n}\n\nfragment TvShowPage_tvShow on TvShow {\n  name\n  network {\n    name\n    id\n  }\n  ...toggleFavoriteButton\n  ...Episodes_episodes\n  ...imageSummary\n}\n\nfragment episodeListItem on Episode {\n  id\n  name\n  seasonAndNumber\n  airdate\n  summary\n  watched\n  ...useToggleWatched\n  tvShow {\n    name\n    id\n  }\n}\n\nfragment imageSummary on ImageSummary {\n  __isImageSummary: __typename\n  image {\n    medium\n    id\n  }\n  summary(stripTags: false)\n}\n\nfragment toggleFavoriteButton on TvShow {\n  id\n  isFavorite\n}\n\nfragment useToggleWatched on Episode {\n  id\n  watched\n}\n"
  }
};
})();

(node as any).hash = "9d89cc467b4de158a456a5c7a5f0877e";

export default node;
