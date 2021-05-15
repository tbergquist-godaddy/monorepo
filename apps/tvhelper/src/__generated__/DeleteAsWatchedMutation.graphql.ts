/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteAsWatchedMutationVariables = {
    episodeId: string;
};
export type DeleteAsWatchedMutationResponse = {
    readonly deleteWatchedEpisode: {
        readonly success: boolean | null;
        readonly episode: {
            readonly id: string;
            readonly watched: boolean | null;
        } | null;
    } | null;
};
export type DeleteAsWatchedMutation = {
    readonly response: DeleteAsWatchedMutationResponse;
    readonly variables: DeleteAsWatchedMutationVariables;
};



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

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "episodeId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "episodeId",
        "variableName": "episodeId"
      }
    ],
    "concreteType": "EpisodeWatched",
    "kind": "LinkedField",
    "name": "deleteWatchedEpisode",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "success",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Episode",
        "kind": "LinkedField",
        "name": "episode",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteAsWatchedMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteAsWatchedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "930c9570fb568aa4ca8f2a9c140f460a",
    "id": null,
    "metadata": {},
    "name": "DeleteAsWatchedMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteAsWatchedMutation(\n  $episodeId: ID!\n) {\n  deleteWatchedEpisode(episodeId: $episodeId) {\n    success\n    episode {\n      id\n      watched\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f82f66c4c2eabff8ba9fbb130b3a2147';
export default node;
