/**
 * @generated SignedSource<<d4a8eb66d8dee86e6dc9c9e1640632f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Episodes_episodes$data = {
  readonly episodes: ReadonlyArray<{
    readonly id: string;
    readonly seasonAndNumber: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"episodeListItem">;
  } | null> | null;
  readonly " $fragmentType": "Episodes_episodes";
};
export type Episodes_episodes$key = {
  readonly " $data"?: Episodes_episodes$data;
  readonly " $fragmentSpreads": FragmentRefs<"Episodes_episodes">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Episodes_episodes",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Episode",
      "kind": "LinkedField",
      "name": "episodes",
      "plural": true,
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
          "name": "seasonAndNumber",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "episodeListItem"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TvShow",
  "abstractKey": null
};

(node as any).hash = "d39f6ebf6b773b4c842183d558a35d8a";

export default node;
