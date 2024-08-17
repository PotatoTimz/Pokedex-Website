export interface GenerationFilter {
  "generation-i": boolean;
  "generation-ii": boolean;
  "generation-iii": boolean;
  "generation-iv": boolean;
  "generation-v": boolean;
  "generation-vi": boolean;
  "generation-vii": boolean;
  "generation-viii": boolean;
  "generation-ix": boolean;
}

export interface TypeFilter {
  normal: boolean;
  fire: boolean;
  water: boolean;
  grass: boolean;
  flying: boolean;
  fighting: boolean;
  poison: boolean;
  electric: boolean;
  ground: boolean;
  psychic: boolean;
  ice: boolean;
  bug: boolean;
  ghost: boolean;
  steel: boolean;
  dragon: boolean;
  dark: boolean;
  fairy: boolean;
}

export interface SearchFilter {
  keyword: string;
  generation_filter: GenerationFilter;
  type_filter: TypeFilter;
}

export const searchFilterDefault: SearchFilter = {
  keyword: "",
  generation_filter: {
    "generation-i": true,
    "generation-ii": true,
    "generation-iii": true,
    "generation-iv": true,
    "generation-v": true,
    "generation-vi": true,
    "generation-vii": true,
    "generation-viii": true,
    "generation-ix": true,
  },
  type_filter: {
    normal: true,
    fire: true,
    water: true,
    grass: true,
    flying: true,
    fighting: true,
    poison: true,
    electric: true,
    ground: true,
    psychic: true,
    ice: true,
    bug: true,
    ghost: true,
    steel: true,
    dragon: true,
    dark: true,
    fairy: true,
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
