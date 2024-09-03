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

export interface MovePartialData {
  name: string;
  url: string;
  learn_method: string;
  learn_level?: number;
}

export interface MoveList {
  movesLevelUp: Array<MovePartialData>;
  movesTutor: Array<MovePartialData>;
  movesTM: Array<MovePartialData>;
  movesEgg: Array<MovePartialData>;
  movesOther: Array<MovePartialData>;
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
  height: number;
  weight: number;
}

export interface PokemonTypeMap {
  normal: number;
  fire: number;
  water: number;
  electric: number;
  grass: number;
  ice: number;
  fighting: number;
  poison: number;
  ground: number;
  flying: number;
  psychic: number;
  bug: number;
  rock: number;
  ghost: number;
  dragon: number;
  dark: number;
  steel: number;
  fairy: number;
}

export interface PokemonDataPageInfo {
  // is_mythical, is_legendary
  pokemonName: string;
  pokemonID: string;
  pokemonType: Array<string>;
  spriteData: SpriteData;
  moveData: MoveList;
  baseStatData: BaseStats;
  abilityData: Array<AbilityInfo>;

  isVariant: boolean;

  // From "pokemon-species"
  pokemonRegionName: string;
  pokemonRegionNumber: number;
  gamePokedexEntry: GamePokedexEntry;
  pokemonEvolutionLineUrl: string;
  pokemonMiscData: MiscData;
  pokemonVariants: Array<string>;
  pokemonTypeChart: PokemonTypeMap;
}

export const defaultPokemonTypeCart: PokemonTypeMap = {
  normal: 1,
  fire: 1,
  water: 1,
  electric: 1,
  grass: 1,
  ice: 1,
  fighting: 1,
  poison: 1,
  ground: 1,
  flying: 1,
  psychic: 1,
  bug: 1,
  rock: 1,
  ghost: 1,
  dragon: 1,
  dark: 1,
  steel: 1,
  fairy: 1,
};

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
  height: 0,
  weight: 0,
};

export const pokemonDataPageInfoDefault = {
  pokemonName: "",
  pokemonID: "",
  pokemonType: [],
  spriteData: defaultSpriteData,
  moveData: {
    movesLevelUp: [],
    movesTutor: [],
    movesTM: [],
    movesEgg: [],
    movesOther: [],
  },
  baseStatData: defaultBaseStats,
  abilityData: [],
  isVariant: false,
  pokemonRegionName: "",
  pokemonRegionNumber: 0,
  gamePokedexEntry: {},
  pokemonEvolutionLineUrl: "https://pokeapi.co/api/v2/evolution-chain/1/",
  pokemonMiscData: defaultMiscData,
  pokemonVariants: [],
  pokemonTypeChart: defaultPokemonTypeCart,
};

export interface BannerInfo {
  pokemonIcon: string;
  pokemonName: string;
  pokemonId: number;
}

export interface FeaturePokemon {
  name: string;
  types: Array<string>;
  sprite: string;
  id: string;
}

export const defaultFeaturePokemon: FeaturePokemon = {
  name: "",
  types: [],
  sprite: "",
  id: "",
};
