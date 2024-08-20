interface Trigger {
  name: string;
  url: string;
}

interface EvolutionDetail {
  gender: number | null;
  held_item: any | null;
  item: any | null;
  known_move: any | null;
  known_move_type: any | null;
  location: any | null;
  min_affection: number | null;
  min_beauty: number | null;
  min_happiness: number | null;
  min_level: number;
  needs_overworld_rain: boolean;
  party_species: any | null;
  party_type: any | null;
  relative_physical_stats: any | null;
  time_of_day: string;
  trade_species: any | null;
  trigger: Trigger;
  turn_upside_down: boolean;
}

interface Species {
  name: string;
  url: string;
}

export interface EvolutionChain {
  evolution_details: EvolutionDetail[];
  evolves_to: EvolutionChain[];
  is_baby: boolean;
  species: Species;
}

export interface PokemonEvolution {
  baby_trigger_item: any | null;
  chain: EvolutionChain;
  id: number;
}
