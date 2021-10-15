/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type watchedDate = {
    readonly watchedDate: unknown | null;
    readonly watched: boolean | null;
    readonly " $refType": "watchedDate";
};
export type watchedDate$data = watchedDate;
export type watchedDate$key = {
    readonly " $data"?: watchedDate$data;
    readonly " $fragmentRefs": FragmentRefs<"watchedDate">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "watchedDate",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "watchedDate",
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
(node as any).hash = '7c89572aec088b0b1d3f4d20c3de01f5';
export default node;
