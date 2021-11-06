/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TvShowListItem_data = {
    readonly id: string;
    readonly name: string | null;
    readonly status: string | null;
    readonly rating: number | null;
    readonly image: {
        readonly medium: string | null;
    } | null;
    readonly " $refType": "TvShowListItem_data";
};
export type TvShowListItem_data$data = TvShowListItem_data;
export type TvShowListItem_data$key = {
    readonly " $data"?: TvShowListItem_data$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TvShowListItem_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TvShowListItem_data",
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
      "kind": "ScalarField",
      "name": "rating",
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
(node as any).hash = '41497783a7b76833b7b7d4de4e4a335f';
export default node;
