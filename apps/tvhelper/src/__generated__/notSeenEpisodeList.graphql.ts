/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type notSeenEpisodeList = {
    readonly notSeenEpisodes: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"notSeenEpisodeListItem">;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "notSeenEpisodeList";
};
export type notSeenEpisodeList$data = notSeenEpisodeList;
export type notSeenEpisodeList$key = {
    readonly " $data"?: notSeenEpisodeList$data;
    readonly " $fragmentRefs": FragmentRefs<"notSeenEpisodeList">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "notSeenEpisodeList",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "EpisodeConnection",
      "kind": "LinkedField",
      "name": "notSeenEpisodes",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "EpisodeEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Episode",
              "kind": "LinkedField",
              "name": "node",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "notSeenEpisodeListItem"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TvHelperViewer",
  "abstractKey": null
};
(node as any).hash = '09550acf5ba5bc11cca261e0023e750a';
export default node;
