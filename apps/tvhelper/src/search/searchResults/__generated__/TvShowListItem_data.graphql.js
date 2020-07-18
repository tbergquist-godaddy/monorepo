/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvShowListItem_data$ref: FragmentReference;
declare export opaque type TvShowListItem_data$fragmentType: TvShowListItem_data$ref;
export type TvShowListItem_data = {|
  +id: string,
  +name: ?string,
  +status: ?string,
  +rating: ?number,
  +image: ?{|
    +medium: ?string
  |},
  +$refType: TvShowListItem_data$ref,
|};
export type TvShowListItem_data$data = TvShowListItem_data;
export type TvShowListItem_data$key = {
  +$data?: TvShowListItem_data$data,
  +$fragmentRefs: TvShowListItem_data$ref,
  ...
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
// prettier-ignore
(node: any).hash = '41497783a7b76833b7b7d4de4e4a335f';
export default node;
