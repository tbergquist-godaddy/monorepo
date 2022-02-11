/**
 * @generated SignedSource<<42e9a534569214093a6091554471d19a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type actionBar$data = {
  readonly watched: boolean | null;
  readonly tvShow: {
    readonly id: string;
    readonly name: string | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"watchedDate">;
  readonly " $fragmentType": "actionBar";
};
export type actionBar$key = {
  readonly " $data"?: actionBar$data;
  readonly " $fragmentSpreads": FragmentRefs<"actionBar">;
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

(node as any).hash = "ccd3c4d681f2302f72a3a48d474f715c";

export default node;
