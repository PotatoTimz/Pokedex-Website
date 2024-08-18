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

export const defaultSearchQuery: SearchQueryInfo = {
  count: 1302,
  next: "https://pokeapi.co/api/v2/pokemon?offset=1&limit=1",
  previous: "",
  results: [
    {
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
  ],
};
