/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SearchResults_results = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"TvShowListItem_data">;
        } | null;
    } | null> | null;
    readonly " $refType": "SearchResults_results";
};
export type SearchResults_results$data = SearchResults_results;
export type SearchResults_results$key = {
    readonly " $data"?: SearchResults_results$data;
    readonly " $fragmentRefs": FragmentRefs<"SearchResults_results">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchResults_results",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "TvShowEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TvShow",
          "kind": "LinkedField",
          "name": "node",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "TvShowListItem_data"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TvShowConnection",
  "abstractKey": null
};
(node as any).hash = '551ef5468ff2f5ee7af497265c38cc9e';
export default node;
