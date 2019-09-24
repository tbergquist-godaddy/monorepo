/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type TvShowItem_data$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type TvShowList_data$ref: FragmentReference;
declare export opaque type TvShowList_data$fragmentType: TvShowList_data$ref;
export type TvShowList_data = {|
  +edges: ?$ReadOnlyArray<?{|
    +node: ?{|
      +id: string,
      +$fragmentRefs: TvShowItem_data$ref,
    |}
  |}>,
  +$refType: TvShowList_data$ref,
|};
export type TvShowList_data$data = TvShowList_data;
export type TvShowList_data$key = {
  +$data?: TvShowList_data$data,
  +$fragmentRefs: TvShowList_data$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "TvShowList_data",
  "type": "TvShowConnection",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "edges",
      "storageKey": null,
      "args": null,
      "concreteType": "TvShowEdge",
      "plural": true,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "node",
          "storageKey": null,
          "args": null,
          "concreteType": "TvShow",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "id",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "FragmentSpread",
              "name": "TvShowItem_data",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1f0d068a83bc1ac866d258d92d872d46';
module.exports = node;
