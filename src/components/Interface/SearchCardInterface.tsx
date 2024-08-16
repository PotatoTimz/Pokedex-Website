export interface SearchCard {
  pokemonName: string;
  pokemonId: string;
  pokemonType: Array<string>;
  pokemonRegionName: string;
  pokemonRegionNumber: number;
  pokemonSprite: string;
}

export const defaultSearchCard: SearchCard = {
  pokemonName: "",
  pokemonId: "",
  pokemonType: [],
  pokemonRegionName: "",
  pokemonRegionNumber: 0,
  pokemonSprite: "",
};
