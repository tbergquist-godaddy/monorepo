/**
 * @generated SignedSource<<09dbd4f2d522e0f243d7d6ce0c54b4c5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SearchResults_results$data = {
  readonly edges: ReadonlyArray<{
    readonly node: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"TvShowListItem_data">;
    } | null;
  } | null> | null;
  readonly " $fragmentType": "SearchResults_results";
};
export type SearchResults_results$key = {
  readonly " $data"?: SearchResults_results$data;
  readonly " $fragmentSpreads": FragmentRefs<"SearchResults_results">;
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

(node as any).hash = "551ef5468ff2f5ee7af497265c38cc9e";

export default node;
