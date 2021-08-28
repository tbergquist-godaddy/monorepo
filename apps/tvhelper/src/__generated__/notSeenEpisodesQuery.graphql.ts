/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type notSeenEpisodesQueryVariables = {};
export type notSeenEpisodesQueryResponse = {
    readonly viewer: {
        readonly " $fragmentRefs": FragmentRefs<"notSeenEpisodeList">;
    } | null;
};
export type notSeenEpisodesQuery = {
    readonly response: notSeenEpisodesQueryResponse;
    readonly variables: notSeenEpisodesQueryVariables;
};



/*
query notSeenEpisodesQuery {
  viewer {
    __typename
    ...notSeenEpisodeList
    ... on TvHelperViewer {
      id
    }
  }
}

fragment notSeenEpisodeList on TvHelperViewer {
  notSeenEpisodes {
    edges {
      node {
        id
        name
        airdate
        seasonAndNumber
        tvShow {
          name
          id
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
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
                          (v0/*: any*/),
                          (v1/*: any*/),
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
                            "name": "seasonAndNumber",
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
                              (v1/*: any*/),
                              (v0/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v0/*: any*/)
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
    "cacheID": "b8524d9a01f72f7279c91e5bbfeaef4a",
    "id": null,
    "metadata": {},
    "name": "notSeenEpisodesQuery",
    "operationKind": "query",
    "text": "query notSeenEpisodesQuery {\n  viewer {\n    __typename\n    ...notSeenEpisodeList\n    ... on TvHelperViewer {\n      id\n    }\n  }\n}\n\nfragment notSeenEpisodeList on TvHelperViewer {\n  notSeenEpisodes {\n    edges {\n      node {\n        id\n        name\n        airdate\n        seasonAndNumber\n        tvShow {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3a4cf0331a752f6088d400d203157c73';
export default node;
