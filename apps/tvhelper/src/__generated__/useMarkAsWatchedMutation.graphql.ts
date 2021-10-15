/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type useMarkAsWatchedMutationVariables = {
    episodeId: string;
};
export type useMarkAsWatchedMutationResponse = {
    readonly markAsWatched: {
        readonly success: boolean | null;
        readonly episode: {
            readonly id: string;
            readonly watched: boolean | null;
            readonly watchedDate: unknown | null;
        } | null;
    } | null;
};
export type useMarkAsWatchedMutation = {
    readonly response: useMarkAsWatchedMutationResponse;
    readonly variables: useMarkAsWatchedMutationVariables;
};



/*
mutation useMarkAsWatchedMutation(
  $episodeId: ID!
) {
  markAsWatched(episodeId: $episodeId) {
    success
    episode {
      id
      watched
      watchedDate
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
    "name": "markAsWatched",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "watchedDate",
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
    "name": "useMarkAsWatchedMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useMarkAsWatchedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1ecc7655f76f7238df238e86410c936e",
    "id": null,
    "metadata": {},
    "name": "useMarkAsWatchedMutation",
    "operationKind": "mutation",
    "text": "mutation useMarkAsWatchedMutation(\n  $episodeId: ID!\n) {\n  markAsWatched(episodeId: $episodeId) {\n    success\n    episode {\n      id\n      watched\n      watchedDate\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3eccd4053653306483588a913391299b';
export default node;
