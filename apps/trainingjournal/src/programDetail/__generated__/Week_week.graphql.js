/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Days_week$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Week_week$ref: FragmentReference;
declare export opaque type Week_week$fragmentType: Week_week$ref;
export type Week_week = {|
  +name: ?string,
  +$fragmentRefs: Days_week$ref,
  +$refType: Week_week$ref,
|};
export type Week_week$data = Week_week;
export type Week_week$key = {
  +$data?: Week_week$data,
  +$fragmentRefs: Week_week$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Week_week",
  "type": "Week",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Days_week",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '10b5e9333e2bcd3bd87d1ac07dab59e8';
module.exports = node;
