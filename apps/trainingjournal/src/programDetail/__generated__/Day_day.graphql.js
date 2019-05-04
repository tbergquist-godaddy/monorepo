/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Day_day$ref: FragmentReference;
declare export opaque type Day_day$fragmentType: Day_day$ref;
export type Day_day = {|
  +id: string,
  +name: ?string,
  +exercises: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +baseExercise: ?{|
          +name: ?string
        |},
      |}
    |}>
  |},
  +$refType: Day_day$ref,
|};
export type Day_day$data = Day_day;
export type Day_day$key = {
  +$data?: Day_day$data,
  +$fragmentRefs: Day_day$ref,
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "Day_day",
  "type": "Day",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
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
                (v0/*: any*/),
                {
                  "kind": "LinkedField",
                  "alias": null,
                  "name": "baseExercise",
                  "storageKey": null,
                  "args": null,
                  "concreteType": "BaseExercise",
                  "plural": false,
                  "selections": [
                    (v1/*: any*/)
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c6afd0288d91394f83f571b36116fa3e';
module.exports = node;
