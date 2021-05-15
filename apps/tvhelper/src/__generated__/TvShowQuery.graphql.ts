/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TvShowQueryVariables = {
    id: string;
};
export type TvShowQueryResponse = {
    readonly viewer: {
        readonly __typename: string;
    } | null;
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"TvShowPage_tvShow">;
    } | null;
};
export type TvShowQuery = {
    readonly response: TvShowQueryResponse;
    readonly variables: TvShowQueryVariables;
};



/*
query TvShowQuery(
  $id: ID!
) {
  viewer {
    __typename
    ... on TvHelperViewer {
      id
    }
  }
  node(id: $id) {
    __typename
    ...TvShowPage_tvShow
    id
  }
}

fragment Episode_episode on Episode {
  id
  name
  seasonAndNumber
  airdate
  summary
  watched
}

fragment Episodes_episodes on TvShow {
  episodes {
    id
    seasonAndNumber
    ...Episode_episode
  }
}

fragment TvShowImage_tvShow on TvShow {
  id
  name
  image {
    medium
    id
  }
  isFavorite
}

fragment TvShowPage_tvShow on TvShow {
  name
  network {
    name
    id
  }
  summary(stripTags: false)
  ...TvShowImage_tvShow
  ...Episodes_episodes
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
    "name": "TvShowQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
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
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/)
            ],
            "type": "TvHelperViewer",
            "abstractKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Network",
                "kind": "LinkedField",
                "name": "network",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v3/*: any*/)
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
              },
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
                  (v3/*: any*/)
                ],
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
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "seasonAndNumber",
                    "storageKey": null
                  },
                  (v4/*: any*/),
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
                  }
                ],
                "storageKey": null
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
    "cacheID": "d658f745dee82b434670112e976687c0",
    "id": null,
    "metadata": {},
    "name": "TvShowQuery",
    "operationKind": "query",
    "text": "query TvShowQuery(\n  $id: ID!\n) {\n  viewer {\n    __typename\n    ... on TvHelperViewer {\n      id\n    }\n  }\n  node(id: $id) {\n    __typename\n    ...TvShowPage_tvShow\n    id\n  }\n}\n\nfragment Episode_episode on Episode {\n  id\n  name\n  seasonAndNumber\n  airdate\n  summary\n  watched\n}\n\nfragment Episodes_episodes on TvShow {\n  episodes {\n    id\n    seasonAndNumber\n    ...Episode_episode\n  }\n}\n\nfragment TvShowImage_tvShow on TvShow {\n  id\n  name\n  image {\n    medium\n    id\n  }\n  isFavorite\n}\n\nfragment TvShowPage_tvShow on TvShow {\n  name\n  network {\n    name\n    id\n  }\n  summary(stripTags: false)\n  ...TvShowImage_tvShow\n  ...Episodes_episodes\n}\n"
  }
};
})();
(node as any).hash = '23dfe62ce0b6b94adcd23a3cf316baa9';
export default node;
