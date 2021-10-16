/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type Roles = "Organizer" | "Participant" | "%future added value";
export type EventsQueryVariables = {};
export type EventsQueryResponse = {
    readonly events: ReadonlyArray<{
        readonly id: string;
        readonly title: string;
        readonly dateAndTime: unknown | null;
        readonly address: {
            readonly address1: string;
            readonly address2: string;
        } | null;
        readonly participants: ReadonlyArray<{
            readonly role: Roles;
        }>;
    }>;
};
export type EventsQuery = {
    readonly response: EventsQueryResponse;
    readonly variables: EventsQueryVariables;
};



/*
query EventsQuery {
  events {
    id
    title
    dateAndTime
    address {
      address1
      address2
      id
    }
    participants {
      role
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateAndTime",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address1",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address2",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "Participant",
  "kind": "LinkedField",
  "name": "participants",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "role",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "EventsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Event",
        "kind": "LinkedField",
        "name": "events",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Address",
            "kind": "LinkedField",
            "name": "address",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "EventsQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Event",
        "kind": "LinkedField",
        "name": "events",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Address",
            "kind": "LinkedField",
            "name": "address",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "abef3e0983c283d9919dc19dcc10e6e7",
    "id": null,
    "metadata": {},
    "name": "EventsQuery",
    "operationKind": "query",
    "text": "query EventsQuery {\n  events {\n    id\n    title\n    dateAndTime\n    address {\n      address1\n      address2\n      id\n    }\n    participants {\n      role\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '2fcd24dcee6a95665725ea94cc01ffd8';
export default node;
