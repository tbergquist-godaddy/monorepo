/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type actionBar = {
    readonly watched: boolean | null;
    readonly " $fragmentRefs": FragmentRefs<"watchedDate">;
    readonly " $refType": "actionBar";
};
export type actionBar$data = actionBar;
export type actionBar$key = {
    readonly " $data"?: actionBar$data;
    readonly " $fragmentRefs": FragmentRefs<"actionBar">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "actionBar",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "watched",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "watchedDate"
    }
  ],
  "type": "Episode",
  "abstractKey": null
};
(node as any).hash = '0f4c17524145e1ee569d003caa3fa8d7';
export default node;
