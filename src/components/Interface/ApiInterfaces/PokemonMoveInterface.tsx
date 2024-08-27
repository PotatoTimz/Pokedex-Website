export interface MoveAPIData {
  id: number;
  name: string;
  accuracy: number;
  pp: number;
  power: number;
  type: {
    name: string;
    url: string;
  };
  damage_class: {
    name: string;
  };
}
