/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type FavoriteListItem_favorite = {
    readonly name: string | null;
    readonly nextEpisode: unknown | null;
    readonly previousEpisode: unknown | null;
    readonly id: string;
    readonly status: string | null;
    readonly image: {
        readonly medium: string | null;
    } | null;
    readonly " $refType": "FavoriteListItem_favorite";
};
export type FavoriteListItem_favorite$data = FavoriteListItem_favorite;
export type FavoriteListItem_favorite$key = {
    readonly " $data"?: FavoriteListItem_favorite$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"FavoriteListItem_favorite">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FavoriteListItem_favorite",
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
      "name": "nextEpisode",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "previousEpisode",
      "storageKey": null
    },
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
      "name": "status",
      "storageKey": null
    },
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
    }
  ],
  "type": "TvShow",
  "abstractKey": null
};
(node as any).hash = 'f5be8c9bfed9dcea574147dbce5c98e3';
export default node;
