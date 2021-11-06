/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type actionBar = {
    readonly watched: boolean | null;
    readonly tvShow: {
        readonly id: string;
        readonly name: string | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"watchedDate">;
    readonly " $refType": "actionBar";
};
export type actionBar$data = actionBar;
export type actionBar$key = {
    readonly " $data"?: actionBar$data | undefined;
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
      "alias": null,
      "args": null,
      "concreteType": "TvShow",
      "kind": "LinkedField",
      "name": "tvShow",
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
          "name": "name",
          "storageKey": null
        }
      ],
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
(node as any).hash = 'ccd3c4d681f2302f72a3a48d474f715c';
export default node;
