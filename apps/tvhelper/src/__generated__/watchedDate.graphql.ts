/**
 * @generated SignedSource<<8d8b814f4ac2893abac00c897dbe9f51>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type watchedDate$data = {
  readonly watchedDate: any | null;
  readonly watched: boolean | null;
  readonly " $fragmentType": "watchedDate";
};
export type watchedDate$key = {
  readonly " $data"?: watchedDate$data;
  readonly " $fragmentSpreads": FragmentRefs<"watchedDate">;
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

(node as any).hash = "7c89572aec088b0b1d3f4d20c3de01f5";

export default node;
