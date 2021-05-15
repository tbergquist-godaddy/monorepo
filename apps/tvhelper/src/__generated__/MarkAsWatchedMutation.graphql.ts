/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MarkAsWatchedMutationVariables = {
    episodeId: string;
};
export type MarkAsWatchedMutationResponse = {
    readonly markAsWatched: {
        readonly success: boolean | null;
        readonly episode: {
            readonly id: string;
            readonly watched: boolean | null;
        } | null;
    } | null;
};
export type MarkAsWatchedMutation = {
    readonly response: MarkAsWatchedMutationResponse;
    readonly variables: MarkAsWatchedMutationVariables;
};



/*
mutation MarkAsWatchedMutation(
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
    "name": "MarkAsWatchedMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MarkAsWatchedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5291931e8dc373c5a43626591ef0dbf2",
    "id": null,
    "metadata": {},
    "name": "MarkAsWatchedMutation",
    "operationKind": "mutation",
    "text": "mutation MarkAsWatchedMutation(\n  $episodeId: ID!\n) {\n  markAsWatched(episodeId: $episodeId) {\n    success\n    episode {\n      id\n      watched\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'dad9374747b0d6ac8e3e7d23b5cf41fe';
export default node;
