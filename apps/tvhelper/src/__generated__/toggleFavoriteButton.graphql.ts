/**
 * @generated SignedSource<<298a9ed482e117f91ef198867d7df954>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type toggleFavoriteButton$data = {
  readonly id: string;
  readonly isFavorite: boolean | null;
  readonly " $fragmentType": "toggleFavoriteButton";
};
export type toggleFavoriteButton$key = {
  readonly " $data"?: toggleFavoriteButton$data;
  readonly " $fragmentSpreads": FragmentRefs<"toggleFavoriteButton">;
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

(node as any).hash = "db5aad87990b98af9a26e058c1945fdd";

export default node;
