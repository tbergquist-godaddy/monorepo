/**
 * @flow
 * @relayHash 92814339e6dfa426eeffc8516911db9e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type unmarkAsWatchedEpisodeMutationVariables = {|
  episodeId: string
|};
export type unmarkAsWatchedEpisodeMutationResponse = {|
  +deleteWatchedEpisode: ?{|
    +success: ?boolean,
    +episode: ?{|
      +id: string,
      +watched: ?boolean,
    |},
  |}
|};
export type unmarkAsWatchedEpisodeMutation = {|
  variables: unmarkAsWatchedEpisodeMutationVariables,
  response: unmarkAsWatchedEpisodeMutationResponse,
|};
*/


/*
mutation unmarkAsWatchedEpisodeMutation(
  $episodeId: ID!
) {
  deleteWatchedEpisode(episodeId: $episodeId) {
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
    "name": "deleteWatchedEpisode",
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
    "name": "unmarkAsWatchedEpisodeMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "unmarkAsWatchedEpisodeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "unmarkAsWatchedEpisodeMutation",
    "id": null,
    "text": "mutation unmarkAsWatchedEpisodeMutation(\n  $episodeId: ID!\n) {\n  deleteWatchedEpisode(episodeId: $episodeId) {\n    success\n    episode {\n      id\n      watched\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '10bb83e81e6935664bc191c55dc22fdd';
module.exports = node;
