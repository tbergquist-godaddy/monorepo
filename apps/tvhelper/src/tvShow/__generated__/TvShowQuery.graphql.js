/**
 * @flow
 */

/* eslint-disable */

import type { ConcreteRequest } from 'relay-runtime';
type Layout_viewer$ref = any;
type TvShowPage_tvShow$ref = any;
export type TvShowQueryVariables = {|
  id: string
|};
export type TvShowQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Layout_viewer$ref
  |},
  +node: ?{|
    +$fragmentRefs: TvShowPage_tvShow$ref
  |},
|};
export type TvShowQuery = {|
  variables: TvShowQueryVariables,
  response: TvShowQueryResponse,
|};

/*
query TvShowQuery(
  $id: ID!
) {
  viewer {
    __typename
    ...Layout_viewer
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

fragment Layout_viewer on Viewer {
  __isViewer: __typename
  __typename
  ...NavbarRight_viewer
}

fragment NavbarRight_viewer on Viewer {
  __isViewer: __typename
  __typename
  ... on TvHelperViewer {
    username
  }
}

fragment TvShowImage_tvShow on TvShow {
  id
  name
  image {
    original
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
  "name": "__typename",
  "storageKey": null
},
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Layout_viewer"
          }
        ],
        "storageKey": null
      },
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
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "TypeDiscriminator",
            "abstractKey": "__isViewer"
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "username",
                "storageKey": null
              },
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
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
                    "name": "original",
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
    "cacheID": "0e0342b124de6cd30b822baecdc728c2",
    "id": null,
    "metadata": {},
    "name": "TvShowQuery",
    "operationKind": "query",
    "text": "query TvShowQuery(\n  $id: ID!\n) {\n  viewer {\n    __typename\n    ...Layout_viewer\n    ... on TvHelperViewer {\n      id\n    }\n  }\n  node(id: $id) {\n    __typename\n    ...TvShowPage_tvShow\n    id\n  }\n}\n\nfragment Episode_episode on Episode {\n  id\n  name\n  seasonAndNumber\n  airdate\n  summary\n  watched\n}\n\nfragment Episodes_episodes on TvShow {\n  episodes {\n    id\n    seasonAndNumber\n    ...Episode_episode\n  }\n}\n\nfragment Layout_viewer on Viewer {\n  __isViewer: __typename\n  __typename\n  ...NavbarRight_viewer\n}\n\nfragment NavbarRight_viewer on Viewer {\n  __isViewer: __typename\n  __typename\n  ... on TvHelperViewer {\n    username\n  }\n}\n\nfragment TvShowImage_tvShow on TvShow {\n  id\n  name\n  image {\n    original\n    id\n  }\n  isFavorite\n}\n\nfragment TvShowPage_tvShow on TvShow {\n  name\n  network {\n    name\n    id\n  }\n  summary(stripTags: false)\n  ...TvShowImage_tvShow\n  ...Episodes_episodes\n}\n"
  }
};
})();
// prettier-ignore
(node: any).hash = 'e7a3bc2bf2118dd2c4d00400aadfc5b6';
export default node;
