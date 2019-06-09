/**
 * @flow
 * @relayHash fea9d91f646d673c717a0c05e68f3f12
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteAsWatchedMutationVariables = {|
  episodeId: string
|};
export type DeleteAsWatchedMutationResponse = {|
  +deleteWatchedEpisode: ?{|
    +success: ?boolean,
    +episode: ?{|
      +id: ?string,
      +watched: ?boolean,
    |},
  |}
|};
export type DeleteAsWatchedMutation = {|
  variables: DeleteAsWatchedMutationVariables,
  response: DeleteAsWatchedMutationResponse,
|};
*/


/*
mutation DeleteAsWatchedMutation(
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
    "name": "DeleteAsWatchedMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteAsWatchedMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteAsWatchedMutation",
    "id": "930c9570fb568aa4ca8f2a9c140f460a",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f82f66c4c2eabff8ba9fbb130b3a2147';
module.exports = node;
