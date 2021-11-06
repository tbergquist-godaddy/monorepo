/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type toggleFavoriteButton = {
    readonly id: string;
    readonly isFavorite: boolean | null;
    readonly " $refType": "toggleFavoriteButton";
};
export type toggleFavoriteButton$data = toggleFavoriteButton;
export type toggleFavoriteButton$key = {
    readonly " $data"?: toggleFavoriteButton$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"toggleFavoriteButton">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "toggleFavoriteButton",
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
      "name": "isFavorite",
      "storageKey": null
    }
  ],
  "type": "TvShow",
  "abstractKey": null
};
(node as any).hash = 'db5aad87990b98af9a26e058c1945fdd';
export default node;
