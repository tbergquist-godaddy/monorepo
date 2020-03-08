/**
 * @flow
 * @relayHash 49cb3884f448c3d976a70148438ed052
 */

/* eslint-disable */
// flowlint untyped-type-import:off

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
    ... on TraningJournalViewer {
      id
    }
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
  __typename
  ...NavbarRight_viewer
}

fragment NavbarRight_viewer on Viewer {
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
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TvShowQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Layout_viewer",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TvShowPage_tvShow",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TvShowQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "TvHelperViewer",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "username",
                "args": null,
                "storageKey": null
              },
              (v3/*: any*/)
            ]
          },
          {
            "kind": "InlineFragment",
            "type": "TraningJournalViewer",
            "selections": [
              (v3/*: any*/)
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "TvShow",
            "selections": [
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "network",
                "storageKey": null,
                "args": null,
                "concreteType": "Network",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v3/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "summary",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "stripTags",
                    "value": false
                  }
                ],
                "storageKey": "summary(stripTags:false)"
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "image",
                "storageKey": null,
                "args": null,
                "concreteType": "TvHelperImage",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "original",
                    "args": null,
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "isFavorite",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "episodes",
                "storageKey": null,
                "args": null,
                "concreteType": "Episode",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "seasonAndNumber",
                    "args": null,
                    "storageKey": null
                  },
                  (v4/*: any*/),
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "airdate",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "summary",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "watched",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TvShowQuery",
    "id": null,
    "text": "query TvShowQuery(\n  $id: ID!\n) {\n  viewer {\n    __typename\n    ...Layout_viewer\n    ... on TraningJournalViewer {\n      id\n    }\n    ... on TvHelperViewer {\n      id\n    }\n  }\n  node(id: $id) {\n    __typename\n    ...TvShowPage_tvShow\n    id\n  }\n}\n\nfragment Episode_episode on Episode {\n  id\n  name\n  seasonAndNumber\n  airdate\n  summary\n  watched\n}\n\nfragment Episodes_episodes on TvShow {\n  episodes {\n    id\n    seasonAndNumber\n    ...Episode_episode\n  }\n}\n\nfragment Layout_viewer on Viewer {\n  __typename\n  ...NavbarRight_viewer\n}\n\nfragment NavbarRight_viewer on Viewer {\n  __typename\n  ... on TvHelperViewer {\n    username\n  }\n}\n\nfragment TvShowImage_tvShow on TvShow {\n  id\n  name\n  image {\n    original\n    id\n  }\n  isFavorite\n}\n\nfragment TvShowPage_tvShow on TvShow {\n  name\n  network {\n    name\n    id\n  }\n  summary(stripTags: false)\n  ...TvShowImage_tvShow\n  ...Episodes_episodes\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node: any).hash = 'e7a3bc2bf2118dd2c4d00400aadfc5b6';
export default node;
