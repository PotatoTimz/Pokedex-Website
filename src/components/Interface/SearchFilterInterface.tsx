export interface GenerationFilter {
  "generation-i": string;
  "generation-ii": string;
  "generation-iii": string;
  "generation-iv": string;
  "generation-v": string;
  "generation-vi": string;
  "generation-vii": string;
  "generation-viii": string;
  "generation-ix": string;
}

export interface TypeFilter {
  normal: string;
  fire: string;
  water: string;
  grass: string;
  flying: string;
  fighting: string;
  poison: string;
  electric: string;
  ground: string;
  psychic: string;
  ice: string;
  bug: string;
  ghost: string;
  steel: string;
  dragon: string;
  dark: string;
  fairy: string;
}

export interface SearchFilter {
  keyword: string;
  generation_filter: GenerationFilter;
  type_filter: TypeFilter;
}

export const searchFilterDefault: SearchFilter = {
  keyword: "",
  generation_filter: {
    "generation-i": "true",
    "generation-ii": "true",
    "generation-iii": "true",
    "generation-iv": "true",
    "generation-v": "true",
    "generation-vi": "true",
    "generation-vii": "true",
    "generation-viii": "true",
    "generation-ix": "true",
  },
  type_filter: {
    normal: "true",
    fire: "true",
    water: "true",
    grass: "true",
    flying: "true",
    fighting: "true",
    poison: "true",
    electric: "true",
    ground: "true",
    psychic: "true",
    ice: "true",
    bug: "true",
    ghost: "true",
    steel: "true",
    dragon: "true",
    dark: "true",
    fairy: "true",
  },
};

export const searchFilterDisableAll: SearchFilter = {
  keyword: "",
  generation_filter: {
    "generation-i": "false",
    "generation-ii": "false",
    "generation-iii": "false",
    "generation-iv": "false",
    "generation-v": "false",
    "generation-vi": "false",
    "generation-vii": "false",
    "generation-viii": "false",
    "generation-ix": "false",
  },
  type_filter: {
    normal: "false",
    fire: "false",
    water: "false",
    grass: "false",
    flying: "false",
    fighting: "false",
    poison: "false",
    electric: "false",
    ground: "false",
    psychic: "false",
    ice: "false",
    bug: "false",
    ghost: "false",
    steel: "false",
    dragon: "false",
    dark: "false",
    fairy: "false",
  },
};

export const typeList: Array<string> = [
  "normal",
  "fire",
  "water",
  "grass",
  "flying",
  "fighting",
  "poison",
  "electric",
  "ground",
  "psychic",
  "ice",
  "bug",
  "ghost",
  "steel",
  "dragon",
  "dark",
  "fairy",
];

export const generationList: Array<string> = [
  "generation-i",
  "generation-ii",
  "generation-iii",
  "generation-iv",
  "generation-v",
  "generation-vi",
  "generation-vii",
  "generation-viii",
  "generation-ix",
];
