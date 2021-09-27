/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type actionBar = {
    readonly watched: boolean | null;
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
    }
  ],
  "type": "Episode",
  "abstractKey": null
};
(node as any).hash = 'f8a5291702944b5cdbfb8326dbb30e12';
export default node;
