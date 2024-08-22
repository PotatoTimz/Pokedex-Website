// Define the interface for the nested `color` object
interface Color {
  name: string;
  url: string;
}

// Define the interface for the nested `egg_groups` array items
export interface EggGroup {
  name: string;
  url: string;
}

// Define the interface for the nested `evolution_chain` object
interface EvolutionChain {
  url: string;
}

// Define the interface for the nested `flavor_text_entries` array items
export interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}
// Define the interface for the nested `language` object in `genera` and `names`
interface Language {
  name: string;
  url: string;
}

// Define the interface for the nested `generation` and `growth_rate` objects
interface Generation {
  name: string;
  url: string;
}

interface GrowthRate {
  name: string;
  url: string;
}

// Define the interface for the nested `habitat` object
interface Habitat {
  name: string;
  url: string;
}

// Define the interface for the nested `genus` object in `genera`
interface Genus {
  genus: string;
  language: Language;
}

// Define the interface for the nested `name` object in `names`
interface NameEntry {
  language: Language;
  name: string;
}

// Define the interface for the nested `area` object in `pal_park_encounters`
interface PalParkArea {
  name: string;
  url: string;
}

// Define the interface for the nested `pokedex` object in `pokedex_numbers`
interface Pokedex {
  name: string;
  url: string;
}

// Define the interface for the nested `pokemon` object in `varieties`
export interface PokemonVariety {
  name: string;
  url: string;
}

// Define the main interface
export interface PokedexData {
  base_happiness: number;
  capture_rate: number;
  color: Color;
  egg_groups: EggGroup[];
  evolution_chain: EvolutionChain;
  evolves_from_species: null | any; // `null` or you can replace `any` with a specific type if known
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[]; // Adjust type if you know the structure
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: Generation;
  growth_rate: GrowthRate;
  habitat: Habitat;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: NameEntry[];
  order: number;
  pal_park_encounters: {
    area: PalParkArea;
    base_score: number;
    rate: number;
  }[];
  pokedex_numbers: {
    entry_number: number;
    pokedex: Pokedex;
  }[];
  shape: {
    name: string;
    url: string;
  };
  varieties: {
    is_default: boolean;
    pokemon: PokemonVariety;
  }[];
}
