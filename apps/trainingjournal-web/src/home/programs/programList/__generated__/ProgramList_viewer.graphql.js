/**
 * @flow
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ReaderFragment } from 'relay-runtime';
type ProgramListItem_program$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProgramList_viewer$ref: FragmentReference;
declare export opaque type ProgramList_viewer$fragmentType: ProgramList_viewer$ref;
export type ProgramList_viewer = {|
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


const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ProgramList_viewer",
  "type": "TraningJournalViewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "programs",
      "storageKey": null,
      "args": null,
      "concreteType": "ProgramConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ProgramEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Program",
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
                  "name": "ProgramListItem_program",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node: any).hash = '96aa9c0c3f8642bbb827f4f952dbe025';
export default node;
