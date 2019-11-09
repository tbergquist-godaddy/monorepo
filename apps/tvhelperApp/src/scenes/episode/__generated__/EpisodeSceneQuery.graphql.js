/**
 * @flow
 * @relayHash 57f077a50fb5c5db94dbc59c9d2bbe4d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Episode_data$ref = any;
export type EpisodeSceneQueryVariables = {|
  id: string
|};
export type EpisodeSceneQueryResponse = {|
  +episode: ?{|
    +$fragmentRefs: Episode_data$ref
  |}
|};
export type EpisodeSceneQuery = {|
  variables: EpisodeSceneQueryVariables,
  response: EpisodeSceneQueryResponse,
|};
*/


/*
query EpisodeSceneQuery(
  $id: ID!
) {
  episode(id: $id) {
    ...Episode_data
    id
  }
}

fragment Episode_data on Episode {
  name
  summary
  image {
    ...TvHelperImage_data
    id
  }
  ...ToggleWatched_data
}

fragment ToggleWatched_data on Episode {
  id
  watched
}

fragment TvHelperImage_data on TvHelperImage {
  medium
  original
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "EpisodeSceneQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "episode",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Episode",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Episode_data",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "EpisodeSceneQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "episode",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Episode",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "name",
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
          (v2/*: any*/),
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
  },
  "params": {
    "operationKind": "query",
    "name": "EpisodeSceneQuery",
    "id": null,
    "text": "query EpisodeSceneQuery(\n  $id: ID!\n) {\n  episode(id: $id) {\n    ...Episode_data\n    id\n  }\n}\n\nfragment Episode_data on Episode {\n  name\n  summary\n  image {\n    ...TvHelperImage_data\n    id\n  }\n  ...ToggleWatched_data\n}\n\nfragment ToggleWatched_data on Episode {\n  id\n  watched\n}\n\nfragment TvHelperImage_data on TvHelperImage {\n  medium\n  original\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3730e7f8507e60fc1c4f1cdba32b0c99';
module.exports = node;
