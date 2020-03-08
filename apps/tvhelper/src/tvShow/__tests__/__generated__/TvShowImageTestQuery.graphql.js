/**
 * @flow
 * @relayHash 1536d83f82bd8db35e1cf9052112ceae
 */

/* eslint-disable */
// flowlint untyped-type-import:off

import type { ConcreteRequest } from 'relay-runtime';
type TvShowImage_tvShow$ref = any;
export type TvShowImageTestQueryVariables = {|
  id: string
|};
export type TvShowImageTestQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: TvShowImage_tvShow$ref
  |}
|};
export type TvShowImageTestQuery = {|
  variables: TvShowImageTestQueryVariables,
  response: TvShowImageTestQueryResponse,
|};

/*
query TvShowImageTestQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...TvShowImage_tvShow
    id
  }
}

fragment TvShowImage_tvShow on TvShow {
  id
  name
  image {
    original
    id
  }
  isFavorite
}
*/

const node: ConcreteRequest = (function(){
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
  "type": "String",
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
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
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
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "TvShow",
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TvShowImageTestQuery",
    "id": null,
    "text": "query TvShowImageTestQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...TvShowImage_tvShow\n    id\n  }\n}\n\nfragment TvShowImage_tvShow on TvShow {\n  id\n  name\n  image {\n    original\n    id\n  }\n  isFavorite\n}\n",
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "node": {
          "type": "Node",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "node.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": false
        },
        "node.name": (v3/*: any*/),
        "node.image": {
          "type": "TvHelperImage",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "node.isFavorite": {
          "type": "Boolean",
          "enumValues": null,
          "plural": false,
          "nullable": true
        },
        "node.image.original": (v3/*: any*/),
        "node.image.id": {
          "type": "ID",
          "enumValues": null,
          "plural": false,
          "nullable": true
        }
      }
    }
  }
};
})();
// prettier-ignore
(node: any).hash = '2f1b739e930c96736592386597507480';
export default node;
