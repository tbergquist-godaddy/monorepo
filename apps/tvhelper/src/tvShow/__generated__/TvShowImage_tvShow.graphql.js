/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvShowImage_tvShow$ref: FragmentReference;
declare export opaque type TvShowImage_tvShow$fragmentType: TvShowImage_tvShow$ref;
export type TvShowImage_tvShow = {|
  +id: string,
  +name: ?string,
  +image: ?{|
    +medium: ?string
  |},
  +isFavorite: ?boolean,
  +$refType: TvShowImage_tvShow$ref,
|};
export type TvShowImage_tvShow$data = TvShowImage_tvShow;
export type TvShowImage_tvShow$key = {
  +$data?: TvShowImage_tvShow$data,
  +$fragmentRefs: TvShowImage_tvShow$ref,
  ...
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
// prettier-ignore
(node: any).hash = 'fd1bf557f149cc0ecb5cb61cfcfd9a64';
export default node;
