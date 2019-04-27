/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Weeks_program$ref: FragmentReference;
export type Weeks_program = {|
  +weeks: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
      |}
    |}>
  |},
  +$refType: Weeks_program$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Weeks_program",
  "type": "Program",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "weeks",
      "storageKey": null,
      "args": null,
      "concreteType": "WeekConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "WeekEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Week",
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
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
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
(node/*: any*/).hash = '7a8f8a131950566dcf1ab02ab710cc05';
module.exports = node;
