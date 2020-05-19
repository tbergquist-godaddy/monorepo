/**
 * @flow
 */

/* eslint-disable */

import type { ReaderFragment } from 'relay-runtime';
type ProgramListItem_program$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramList_viewer$ref: FragmentReference;
declare export opaque type ProgramList_viewer$fragmentType: ProgramList_viewer$ref;
export type ProgramList_viewer = {|
  +id: string,
  +programs: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: ProgramListItem_program$ref,
      |}
    |}>
  |},
  +$refType: ProgramList_viewer$ref,
|};
export type ProgramList_viewer$data = ProgramList_viewer;
export type ProgramList_viewer$key = {
  +$data?: ProgramList_viewer$data,
  +$fragmentRefs: ProgramList_viewer$ref,
  ...
};


const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "programs"
        ]
      }
    ]
  },
  "name": "ProgramList_viewer",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "programs",
      "args": null,
      "concreteType": "ProgramConnection",
      "kind": "LinkedField",
      "name": "__ProgramList_programs_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ProgramEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Program",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ProgramListItem_program"
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "TraningJournalViewer"
};
})();
// prettier-ignore
(node: any).hash = '090e5470ce8060fce34dbca6f19a2239';
export default node;
