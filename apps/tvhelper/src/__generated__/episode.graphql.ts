/**
 * @generated SignedSource<<ab2fde4b3ada2adf91695c37e455578a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type episode$data = {
  readonly name: string | null;
  readonly seasonAndNumber: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"imageSummary" | "actionBar">;
  readonly " $fragmentType": "episode";
};
export type episode = episode$data;
export type episode$key = {
  readonly " $data"?: episode$data;
  readonly " $fragmentSpreads": FragmentRefs<"episode">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "episode",
  "selections": [
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "imageSummary"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "actionBar"
    }
  ],
  "type": "Episode",
  "abstractKey": null
};

(node as any).hash = "bc0d6418aea37f9c4ed1d2bf09134d8f";

export default node;
