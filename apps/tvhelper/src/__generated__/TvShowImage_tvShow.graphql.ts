/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TvShowImage_tvShow = {
    readonly id: string;
    readonly name: string | null;
    readonly image: {
        readonly medium: string | null;
    } | null;
    readonly isFavorite: boolean | null;
    readonly " $refType": "TvShowImage_tvShow";
};
export type TvShowImage_tvShow$data = TvShowImage_tvShow;
export type TvShowImage_tvShow$key = {
    readonly " $data"?: TvShowImage_tvShow$data;
    readonly " $fragmentRefs": FragmentRefs<"TvShowImage_tvShow">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TvShowImage_tvShow",
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
      "args": null,
      "kind": "ScalarField",
      "name": "isFavorite",
      "storageKey": null
    }
  ],
  "type": "TvShow",
  "abstractKey": null
};
(node as any).hash = 'fd1bf557f149cc0ecb5cb61cfcfd9a64';
export default node;
