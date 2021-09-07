/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type useDeleteAsWatchedMutationVariables = {
    episodeId: string;
};
export type useDeleteAsWatchedMutationResponse = {
    readonly deleteWatchedEpisode: {
        readonly success: boolean | null;
        readonly episode: {
            readonly id: string;
            readonly watched: boolean | null;
        } | null;
    } | null;
};
export type useDeleteAsWatchedMutation = {
    readonly response: useDeleteAsWatchedMutationResponse;
    readonly variables: useDeleteAsWatchedMutationVariables;
};



/*
mutation useDeleteAsWatchedMutation(
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
    "name": "useDeleteAsWatchedMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useDeleteAsWatchedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4aad391c0f8c0041762f1e7d60508826",
    "id": null,
    "metadata": {},
    "name": "useDeleteAsWatchedMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteAsWatchedMutation(\n  $episodeId: ID!\n) {\n  deleteWatchedEpisode(episodeId: $episodeId) {\n    success\n    episode {\n      id\n      watched\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '9d2c91d1a4e0b21e014e9395036e26cd';
export default node;
