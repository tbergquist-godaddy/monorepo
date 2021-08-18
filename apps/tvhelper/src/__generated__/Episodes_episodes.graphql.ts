/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Episodes_episodes = {
    readonly episodes: ReadonlyArray<{
        readonly id: string;
        readonly seasonAndNumber: string | null;
        readonly " $fragmentRefs": FragmentRefs<"Episode_episode">;
    } | null> | null;
    readonly " $refType": "Episodes_episodes";
};
export type Episodes_episodes$data = Episodes_episodes;
export type Episodes_episodes$key = {
    readonly " $data"?: Episodes_episodes$data;
    readonly " $fragmentRefs": FragmentRefs<"Episodes_episodes">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Episodes_episodes",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "episodes",
      "plural": true,
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
          "name": "seasonAndNumber",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "Episode_episode"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TvShow",
  "abstractKey": null
};
(node as any).hash = 'c31dfb8b38dfcd39b29d480557854c1a';
export default node;
