/**
 * @flow
 * @relayHash 5909b3e2be2c381b5cf630ae29fe91db
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TvDetail_data$ref = any;
export type TvShowSceneQueryVariables = {|
  id: string
|};
export type TvShowSceneQueryResponse = {|
  +tvShowDetail: ?{|
    +$fragmentRefs: TvDetail_data$ref
  |}
|};
export type TvShowSceneQuery = {|
  variables: TvShowSceneQueryVariables,
  response: TvShowSceneQueryResponse,
|};
*/


/*
query TvShowSceneQuery(
  $id: ID!
) {
  tvShowDetail(id: $id) {
    ...TvDetail_data
    id
  }
}

fragment CastItem_data on Cast {
  person {
    name
    image {
      medium
      id
    }
    id
  }
  character {
    name
    image {
      medium
      id
    }
    id
  }
}

fragment Cast_data on TvShow {
  cast {
    id
    ...CastItem_data
  }
}

fragment EpisodeItem_data on Episode {
  id
  seasonAndNumber
  name
  airdate
  watched
}

fragment EpisodeList_data on TvShow {
  episodes {
    id
    ...EpisodeItem_data
  }
}

fragment Summary_data on TvShow {
  summary
}

fragment TvDetail_data on TvShow {
  isFavorite
  image {
    original
    id
  }
  ...Summary_data
  ...EpisodeList_data
  ...Cast_data
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
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
        "name": "medium",
        "args": null,
        "storageKey": null
      },
      (v2/*: any*/)
    ]
  },
  (v2/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TvShowSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tvShowDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TvShow",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TvDetail_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TvShowSceneQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tvShowDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TvShow",
        "plural": false,
        "selections": [
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
              (v2/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "summary",
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
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "seasonAndNumber",
                "args": null,
                "storageKey": null
              },
              (v3/*: any*/),
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
                "name": "watched",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cast",
            "storageKey": null,
            "args": null,
            "concreteType": "Cast",
            "plural": true,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "person",
                "storageKey": null,
                "args": null,
                "concreteType": "Person",
                "plural": false,
                "selections": (v4/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "character",
                "storageKey": null,
                "args": null,
                "concreteType": "Person",
                "plural": false,
                "selections": (v4/*: any*/)
              }
            ]
          },
          (v2/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TvShowSceneQuery",
    "id": null,
    "text": "query TvShowSceneQuery(\n  $id: ID!\n) {\n  tvShowDetail(id: $id) {\n    ...TvDetail_data\n    id\n  }\n}\n\nfragment CastItem_data on Cast {\n  person {\n    name\n    image {\n      medium\n      id\n    }\n    id\n  }\n  character {\n    name\n    image {\n      medium\n      id\n    }\n    id\n  }\n}\n\nfragment Cast_data on TvShow {\n  cast {\n    id\n    ...CastItem_data\n  }\n}\n\nfragment EpisodeItem_data on Episode {\n  id\n  seasonAndNumber\n  name\n  airdate\n  watched\n}\n\nfragment EpisodeList_data on TvShow {\n  episodes {\n    id\n    ...EpisodeItem_data\n  }\n}\n\nfragment Summary_data on TvShow {\n  summary\n}\n\nfragment TvDetail_data on TvShow {\n  isFavorite\n  image {\n    original\n    id\n  }\n  ...Summary_data\n  ...EpisodeList_data\n  ...Cast_data\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '11cb778ad6c5bca4b0ef18ab0a37ca94';
module.exports = node;
