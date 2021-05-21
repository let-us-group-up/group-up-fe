type PayloadData = Record<string, unknown>;

interface PayloadError {
  message: string;
  locations?: Array<{
      line: number;
      column: number;
  }>;
}

type PayloadExtensions = Record<string, unknown>;

/**
* The shape of a GraphQL response as dictated by the
* [spec](https://graphql.github.io/graphql-spec/June2018/#sec-Response-Format)
*/
interface GraphQLResponseWithData {
  data: PayloadData;
  errors?: PayloadError[];
  extensions?: PayloadExtensions;
  label?: string;
  path?: Array<string | number>;
}
interface GraphQLResponseWithoutData {
  data?: PayloadData;
  errors: PayloadError[];
  extensions?: PayloadExtensions;
  label?: string;
  path?: Array<string | number>;
}
interface GraphQLResponseWithExtensionsOnly {
  // Per https://spec.graphql.org/June2018/#sec-Errors
  // > If the data entry in the response is not present, the errors entry
  // > in the response must not be empty. It must contain at least one error
  // This means a payload has to have either a data key or an errors key:
  // but the spec leaves room for the combination of data: null plus extensions
  // since `data: null` is a *required* output if there was an error during
  // execution, but the inverse is not described in the sepc: `data: null`
  // does not necessarily indicate that there was an error.
  data: null;
  extensions: PayloadExtensions;
}

type GraphQLSingularResponse =
  | GraphQLResponseWithData
  | GraphQLResponseWithExtensionsOnly
  | GraphQLResponseWithoutData;

export type GraphQLResponse = GraphQLSingularResponse | ReadonlyArray<GraphQLSingularResponse>;
