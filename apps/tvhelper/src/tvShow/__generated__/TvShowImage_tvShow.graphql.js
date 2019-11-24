/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvShowImage_tvShow$ref: FragmentReference;
declare export opaque type TvShowImage_tvShow$fragmentType: TvShowImage_tvShow$ref;
export type TvShowImage_tvShow = {|
  +id: string,
  +name: ?string,
  +image: ?{|
    +original: ?string
  |},
  +isFavorite: ?boolean,
  +$refType: TvShowImage_tvShow$ref,
|};
export type TvShowImage_tvShow$data = TvShowImage_tvShow;
export type TvShowImage_tvShow$key = {
  +$data?: TvShowImage_tvShow$data,
  +$fragmentRefs: TvShowImage_tvShow$ref,
};


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "TvShowImage_tvShow",
  "type": "TvShow",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "image",
      "storageKey": null,
      "args": null,
      "concreteType": "TvHelperImage",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "original",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "isFavorite",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node: any).hash = '6ac05d6d7a57a0b1503b0bd297fdb7e3';
export default node;
