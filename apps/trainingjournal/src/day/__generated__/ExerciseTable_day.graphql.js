/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type ExerciseRow_exercise$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExerciseTable_day$ref: FragmentReference;
declare export opaque type ExerciseTable_day$fragmentType: ExerciseTable_day$ref;
export type ExerciseTable_day = {|
  +exercises: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +$fragmentRefs: ExerciseRow_exercise$ref,
      |}
    |}>
  |},
  +$refType: ExerciseTable_day$ref,
|};
export type ExerciseTable_day$data = ExerciseTable_day;
export type ExerciseTable_day$key = {
  +$data?: ExerciseTable_day$data,
  +$fragmentRefs: ExerciseTable_day$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ExerciseTable_day",
  "type": "Day",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "exercises",
      "storageKey": null,
      "args": null,
      "concreteType": "ExerciseConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "ExerciseEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Exercise",
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
                  "name": "ExerciseRow_exercise",
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
(node/*: any*/).hash = '9ff4280faa3bf847cf6e6449308176d0';
module.exports = node;
