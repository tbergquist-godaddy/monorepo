/**
 * @flow
 * @relayHash 2e72a5441cf6beead5526d6b314293c9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TvShowImage_tvShow$ref = any;
export type TvShowImageTestQueryVariables = {|
  id: string
|};
export type TvShowImageTestQueryResponse = {|
  +tvShowDetail: ?{|
    +$fragmentRefs: TvShowImage_tvShow$ref
  |}
|};
export type TvShowImageTestQuery = {|
  variables: TvShowImageTestQueryVariables,
  response: TvShowImageTestQueryResponse,
|};
*/


/*
query TvShowImageTestQuery(
  $id: ID!
) {
  tvShowDetail(id: $id) {
    ...TvShowImage_tvShow
    id
  }
}

fragment TvShowImage_tvShow on TvShow {
  id
  image {
    original
    id
  }
  isFavorite
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "type": "ID",
  "enumValues": null,
  "plural": false,
  "nullable": true
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TvShowImageTestQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tvShowDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TvShow",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "TvShowImage_tvShow",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TvShowImageTestQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "tvShowDetail",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "TvShow",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "image",
            "storageKey": null,
            "args": null,
            "concreteType": "TvHelperImage",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "original",
                "args": null,
                "storageKey": null
              },
              (v2/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "isFavorite",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TvShowImageTestQuery",
    "id": null,
    "text": "query TvShowImageTestQuery(\n  $id: ID!\n) {\n  tvShowDetail(id: $id) {\n    ...TvShowImage_tvShow\n    id\n  }\n}\n\nfragment TvShowImage_tvShow on TvShow {\n  id\n  image {\n    original\n    id\n  }\n  isFavorite\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "tvShowDetail": {
          "type": "TvShow",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "tvShowDetail.id": (v3/*: any*/),
        "tvShowDetail.image": {
          "type": "TvHelperImage",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "tvShowDetail.isFavorite": {
          "type": "Boolean",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "tvShowDetail.image.original": {
          "type": "String",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "tvShowDetail.image.id": (v3/*: any*/)
      }
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '905bcdabf2e5d05d18640f94de3afc9c';
module.exports = node;
