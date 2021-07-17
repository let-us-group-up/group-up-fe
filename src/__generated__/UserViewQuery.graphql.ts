/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UserViewQueryVariables = {
    id: string;
};
export type UserViewQueryResponse = {
    readonly user: {
        readonly id: string;
        readonly email: string;
    } | null;
};
export type UserViewQuery = {
    readonly response: UserViewQueryResponse;
    readonly variables: UserViewQueryVariables;
};



/*
query UserViewQuery(
  $id: ID!
) {
  user(id: $id) {
    id
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserViewQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserViewQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4cd4a8182f125448aef1617a6e1a2003",
    "id": null,
    "metadata": {},
    "name": "UserViewQuery",
    "operationKind": "query",
    "text": "query UserViewQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '4b6cc31aed07df1682d611be76d0d2a7';
export default node;
