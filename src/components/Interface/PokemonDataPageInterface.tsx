export interface SpriteData {
  "official-artwork": string;
  "official-artwork-shiny": string;
  "red-blue"?: string;
  yellow?: string;
  "gold-silver-crystal"?: string;
  "firered-leafgreen"?: string;
  "ruby-saphire-emerald"?: string;
  "diamond-pearl-platnuim"?: string;
  "heartgold-soulsilver"?: string;
  "black-white"?: string;
  "x-y-omegaruby-alphasaphire"?: string;
  "sun-moon"?: string;
}

export interface GamePokedexEntry {
  [gameName: string]: string;
}

export interface MoveData {
  name: string;
  url: string;
  learn_method: string;
  learn_level?: number;
}

export interface MoveList {
  movesLevelUp: Array<MoveData>;
  movesTutor: Array<MoveData>;
  movesTM: Array<MoveData>;
  movesEgg: Array<MoveData>;
  movesOther: Array<MoveData>;
}

export interface BaseStats {
  hp: number;
  attack: number;
  defense: number;
  "special-attack": number;
  "special-defense": number;
  speed: number;
}

export interface AbilityInfo {
  name: string;
  hidden: boolean;
}

export interface MiscData {
  "base-happiness": number;
  "egg-groups": Array<string>;
  "growth-rate": string;
  habitat: string;
  height: number;
  weight: number;
}

export interface PokemonDataPageInfo {
  // base_happiness, egg_groups, growth_rate, habitat,  /pokemon-species
  // height, weight <- /pokemon
  // is_mythical, is_legendary
  // variants,
  pokemonName: string;
  pokemonID: string;
  pokemonType: Array<string>;
  spriteData: SpriteData;
  moveData: MoveList;
  baseStatData: BaseStats;
  abilityData: Array<AbilityInfo>;
  // From "pokemon-species"
  pokemonRegionName: string;
  pokemonRegionNumber: number;
  gamePokedexEntry: GamePokedexEntry;
  pokemonEvolutionLineUrl: string;
}

export const defaultSpriteData: SpriteData = {
  "official-artwork": "",
  "official-artwork-shiny": "",
};

export const defaultBaseStats: BaseStats = {
  hp: 0,
  attack: 0,
  defense: 0,
  "special-attack": 0,
  "special-defense": 0,
  speed: 0,
};

export const defaultMiscData: MiscData = {
  "base-happiness": 0,
  "egg-groups": [],
  "growth-rate": "",
  habitat: "",
  height: 0,
  weight: 0,
};
