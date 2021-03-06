/**
 * This file was generated by:
 *   relay-compiler
 *
 * @providesModule indexProductAddQuery.graphql
 * @generated SignedSource<<ae8d2254bfdfd472e43281f77f3de6c6>>
 * @relayHash b8218bd434ae6bf677595f6481f348de
 * @flow
 * @nogrep
 */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';

*/

/* eslint-disable comma-dangle, quotes */

/*
query indexProductAddQuery(
  $shopCode: String!
) {
  viewer {
    ...ProductAdd_viewer
    shops(code: $shopCode) {
      id
    }
  }
}

fragment ProductAdd_viewer on Viewer {
  shops(code: $shopCode) {
    id
    systemCurr
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "shopCode",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "indexProductAddQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "viewer",
        "args": null,
        "concreteType": "Viewer",
        "name": "__viewer_viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ProductAdd_viewer",
            "args": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "code",
                "variableName": "shopCode",
                "type": "String!"
              }
            ],
            "concreteType": "Shop",
            "name": "shops",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "indexProductAddQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "shopCode",
        "type": "String!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "indexProductAddQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "code",
                "variableName": "shopCode",
                "type": "String!"
              }
            ],
            "concreteType": "Shop",
            "name": "shops",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "systemCurr",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "args": null,
        "handle": "viewer",
        "name": "viewer",
        "key": "",
        "filters": null
      }
    ]
  },
  "text": "query indexProductAddQuery(\n  $shopCode: String!\n) {\n  viewer {\n    ...ProductAdd_viewer\n    shops(code: $shopCode) {\n      id\n    }\n  }\n}\n\nfragment ProductAdd_viewer on Viewer {\n  shops(code: $shopCode) {\n    id\n    systemCurr\n  }\n}\n"
};

module.exports = batch;
