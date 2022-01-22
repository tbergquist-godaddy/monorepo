/**
 * @generated SignedSource<<2b8bbb36d63842fdb434a535f2be551e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type imageSummary$data = {
  readonly image: {
    readonly medium: string | null;
  } | null;
  readonly summary: string | null;
  readonly " $fragmentType": "imageSummary";
};
export type imageSummary = imageSummary$data;
export type imageSummary$key = {
  readonly " $data"?: imageSummary$data;
  readonly " $fragmentSpreads": FragmentRefs<"imageSummary">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "imageSummary",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TvHelperImage",
      "kind": "LinkedField",
      "name": "image",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "medium",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "stripTags",
          "value": false
        }
      ],
      "kind": "ScalarField",
      "name": "summary",
      "storageKey": "summary(stripTags:false)"
    }
  ],
  "type": "ImageSummary",
  "abstractKey": "__isImageSummary"
};

(node as any).hash = "e1765ca834dd7c092b371c37f0eee53e";

export default node;
