export interface SearchResult {
  name: string;
  url: string;
}

export interface SearchQueryInfo {
  count: number;
  next: string;
  previous: string;
  results: Array<SearchResult>;
}
