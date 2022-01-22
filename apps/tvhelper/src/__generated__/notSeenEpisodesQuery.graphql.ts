/**
 * @generated SignedSource<<7fe381867ca3a6185856d273eec8a7e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type notSeenEpisodesQuery$variables = {};
export type notSeenEpisodesQueryVariables = notSeenEpisodesQuery$variables;
export type notSeenEpisodesQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"notSeenEpisodeList">;
  } | null;
};
export type notSeenEpisodesQueryResponse = notSeenEpisodesQuery$data;
export type notSeenEpisodesQuery = {
  variables: notSeenEpisodesQueryVariables;
  response: notSeenEpisodesQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1000
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "notSeenEpisodesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "notSeenEpisodeList"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "notSeenEpisodesQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v1/*: any*/),
                "concreteType": "EpisodeConnection",
                "kind": "LinkedField",
                "name": "notSeenEpisodes",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EpisodeEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Episode",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "seasonAndNumber",
                            "storageKey": null
                          },
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
                            "selections": [
                              (v3/*: any*/),
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v0/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "ClientExtension",
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__id",
                        "storageKey": null
                      }
                    ]
                  }
                ],
                "storageKey": "notSeenEpisodes(first:1000)"
              },
              {
                "alias": null,
                "args": (v1/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "NotSeenEpisodeList_notSeenEpisodes",
                "kind": "LinkedHandle",
                "name": "notSeenEpisodes"
              },
              (v2/*: any*/)
            ],
            "type": "TvHelperViewer",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "aeede320a59e76da0be9ce9402cb8c8c",
    "id": null,
    "metadata": {},
    "name": "notSeenEpisodesQuery",
    "operationKind": "query",
    "text": "query notSeenEpisodesQuery {\n  viewer {\n    __typename\n    ...notSeenEpisodeList\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment episodeListItem on Episode {\n  id\n  name\n  seasonAndNumber\n  airdate\n  summary\n  watched\n  ...useToggleWatched\n  tvShow {\n    name\n    id\n  }\n}\n\nfragment notSeenEpisodeList on TvHelperViewer {\n  notSeenEpisodes(first: 1000) {\n    edges {\n      node {\n        id\n        ...episodeListItem\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment useToggleWatched on Episode {\n  id\n  watched\n}\n"
  }
};
})();

(node as any).hash = "3a4cf0331a752f6088d400d203157c73";

export default node;
