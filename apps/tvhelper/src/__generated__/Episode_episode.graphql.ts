/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Episode_episode = {
    readonly id: string;
    readonly name: string | null;
    readonly seasonAndNumber: string | null;
    readonly airdate: unknown | null;
    readonly summary: string | null;
    readonly watched: boolean | null;
    readonly " $refType": "Episode_episode";
};
export type Episode_episode$data = Episode_episode;
export type Episode_episode$key = {
    readonly " $data"?: Episode_episode$data;
    readonly " $fragmentRefs": FragmentRefs<"Episode_episode">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Episode_episode",
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
      "name": "name",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "airdate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "summary",
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
  "type": "Episode",
  "abstractKey": null
};
(node as any).hash = 'b37a76627f44969c23b45279d8831218';
export default node;
