/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type AddNewEventPageMutationVariables = {
    author: string;
    description?: string | null;
    title: string;
};
export type AddNewEventPageMutationResponse = {
    readonly createEvent: {
        readonly id: string;
        readonly title: string;
        readonly dateAndTime: unknown | null;
        readonly address: {
            readonly address1: string;
            readonly address2: string;
        } | null;
        readonly participants: ReadonlyArray<{
            readonly user: {
                readonly id: string;
            } | null;
        }>;
    };
};
export type AddNewEventPageMutation = {
    readonly response: AddNewEventPageMutationResponse;
    readonly variables: AddNewEventPageMutationVariables;
};



/*
mutation AddNewEventPageMutation(
  $author: ID!
  $description: String
  $title: String!
) {
  createEvent(author: $author, description: $description, title: $title) {
    id
    title
    dateAndTime
    address {
      address1
      address2
      id
    }
    participants {
      user {
        id
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "author"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "description"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "title"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "author",
    "variableName": "author"
  },
  {
    "kind": "Variable",
    "name": "description",
    "variableName": "description"
  },
  {
    "kind": "Variable",
    "name": "title",
    "variableName": "title"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateAndTime",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address1",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address2",
  "storageKey": null
},
v7 = {
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
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddNewEventPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Event",
        "kind": "LinkedField",
        "name": "createEvent",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Address",
            "kind": "LinkedField",
            "name": "address",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddNewEventPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Event",
        "kind": "LinkedField",
        "name": "createEvent",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Address",
            "kind": "LinkedField",
            "name": "address",
            "plural": false,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "990c4f47b156d64fc636529073fdcc9f",
    "id": null,
    "metadata": {},
    "name": "AddNewEventPageMutation",
    "operationKind": "mutation",
    "text": "mutation AddNewEventPageMutation(\n  $author: ID!\n  $description: String\n  $title: String!\n) {\n  createEvent(author: $author, description: $description, title: $title) {\n    id\n    title\n    dateAndTime\n    address {\n      address1\n      address2\n      id\n    }\n    participants {\n      user {\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '4db5d52b7aaad0ccf54281d36f66ffb1';
export default node;
