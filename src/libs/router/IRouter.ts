export type To = string;

export type Path = string;

export type Pathname = string;

export type Search = string;

export type Params = Record<string, string>;

export interface NavigateOptions {
  replace?: boolean;
}

export interface Location {
  pathname: Pathname;
  search: Search;
}

export interface PathMatch {
  path: Path;
  pathname: Pathname;
  params: Params;
}
