export interface Ability {
  name: string;
  url: string;
}

export interface AbilityDetail {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

export interface Form {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

export interface Move {
  name: string;
  url: string;
}

export interface MoveDetail {
  move: Move;
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface TypeDetail {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface HomeSprites {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny: string;
}

export interface OtherSprites {
  home: HomeSprites;
  "official-artwork": OfficialArtwork;
}

export interface PokemonVersionSprites {
  [generation: string]: {
    [version: string]: {
      back_default?: string | null;
      back_gray?: string | null;
      back_transparent?: string | null;
      back_shiny?: string | null;
      back_shiny_transparent?: string | null;
      front_default?: string | null;
      front_gray?: string | null;
      front_transparent?: string | null;
      front_shiny?: string | null;
      front_shiny_transparent?: string | null;
      animated?: {
        back_default?: string | null;
        back_female?: string | null;
        back_shiny?: string | null;
        back_shiny_female?: string | null;
        front_default?: string | null;
        front_female?: string | null;
        front_shiny?: string | null;
        front_shiny_female?: string | null;
      };
    };
  };
}

export interface Sprites {
  front_default: string;
  other: OtherSprites;
  versions: PokemonVersionSprites;
}

export interface BaseStatsInfo {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: "";
  };
}

export interface PokemonGeneralData {
  abilities: AbilityDetail[];
  base_experience: number;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveDetail[];
  name: string;
  order: number;
  past_types: TypeDetail[];
  species: {
    name: string;
    url: string;
  };
  sprites: Sprites;
  stats: BaseStatsInfo[];
  types: TypeDetail[];
  weight: number;
}

export const defaultPokemonData = {
  abilities: [],
  base_experience: 0,
  forms: [],
  game_indices: [],
  height: 0,
  id: 0,
  is_default: true,
  location_area_encounters: "",
  moves: [],
  name: "",
  order: 0,
  past_types: [],
  species: {
    name: "",
    url: "",
  },
  sprites: {
    front_default: "",
    other: {
      home: {
        front_default: "",
        front_female: "",
        front_shiny: "",
        front_shiny_female: "",
      },
      "official-artwork": {
        front_default: "",
        front_shiny: "",
      },
    },
  },
  stats: Array<BaseStatsInfo>,
  types: [],
  weight: 0,
};
