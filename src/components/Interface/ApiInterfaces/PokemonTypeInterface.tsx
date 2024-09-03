export interface TypeData {
  damage_relations: {
    half_damage_from: Array<{ name: string; url: string }>;
    double_damage_from: Array<{ name: string; url: string }>;
    no_damage_from: Array<{ name: string; url: string }>;
  };
  id: number;
}
