/**
 * @flow
 * @relayHash 159ce819b5ef3462d246d42c45012728
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ToggleFavoriteMutationVariables = {|
  serieId: string,
  add: boolean,
|};
export type ToggleFavoriteMutationResponse = {|
  +toggleFavorite: ?{|
    +success: ?boolean,
    +serieId: ?string,
    +tvShow: ?{|
      +node: ?{|
        +id: ?string,
        +name: ?string,
        +image: ?{|
          +original: ?string,
          +medium: ?string,
        |},
        +previousEpisode: ?any,
        +nextEpisode: ?any,
      |}
    |},
  |}
|};
export type ToggleFavoriteMutation = {|
  variables: ToggleFavoriteMutationVariables,
  response: ToggleFavoriteMutationResponse,
|};
*/


/*
mutation ToggleFavoriteMutation(
  $serieId: ID!
  $add: Boolean!
) {
  toggleFavorite(serieId: $serieId, add: $add) {
    success
    serieId
    tvShow {
      node {
        id
        name
        image {
          original
          medium
          id
        }
        previousEpisode
        nextEpisode
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "serieId",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "add",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "add",
    "variableName": "add",
    "type": "Boolean!"
  },
  {
    "kind": "Variable",
    "name": "serieId",
    "variableName": "serieId",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "success",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "serieId",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "original",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "medium",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "previousEpisode",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "nextEpisode",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ToggleFavoriteMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleFavorite",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ToggleFavorite",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tvShow",
            "storageKey": null,
            "args": null,
            "concreteType": "TvShowNode",
            "plural": false,
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TvHelperImage",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/)
                    ]
                  },
                  (v8/*: any*/),
                  (v9/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ToggleFavoriteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "toggleFavorite",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ToggleFavorite",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tvShow",
            "storageKey": null,
            "args": null,
            "concreteType": "TvShowNode",
            "plural": false,
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
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "image",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TvHelperImage",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v7/*: any*/),
                      (v4/*: any*/)
                    ]
                  },
                  (v8/*: any*/),
                  (v9/*: any*/)
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "ToggleFavoriteMutation",
    "id": "0a0577fc485bd7ef725a825733ce42e4",
    "text": null,
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0a0577fc485bd7ef725a825733ce42e4';
module.exports = node;
