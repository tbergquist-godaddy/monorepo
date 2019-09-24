/**
 * @flow
 * @relayHash f46ae2f605fbde2004f49537d25a09bb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type markAsWatchedEpisodeMutationVariables = {|
  episodeId: string
|};
export type markAsWatchedEpisodeMutationResponse = {|
  +markAsWatched: ?{|
    +success: ?boolean,
    +episode: ?{|
      +id: string,
      +watched: ?boolean,
    |},
  |}
|};
export type markAsWatchedEpisodeMutation = {|
  variables: markAsWatchedEpisodeMutationVariables,
  response: markAsWatchedEpisodeMutationResponse,
|};
*/


/*
mutation markAsWatchedEpisodeMutation(
  $episodeId: ID!
) {
  markAsWatched(episodeId: $episodeId) {
    success
    episode {
      id
      watched
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "episodeId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "markAsWatched",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "episodeId",
        "variableName": "episodeId"
      }
    ],
    "concreteType": "EpisodeWatched",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "success",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "episode",
        "storageKey": null,
        "args": null,
        "concreteType": "Episode",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
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
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "markAsWatchedEpisodeMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "markAsWatchedEpisodeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "markAsWatchedEpisodeMutation",
    "id": null,
    "text": "mutation markAsWatchedEpisodeMutation(\n  $episodeId: ID!\n) {\n  markAsWatched(episodeId: $episodeId) {\n    success\n    episode {\n      id\n      watched\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e970b7f40ff6ed314c8e0fb592edc67f';
module.exports = node;
