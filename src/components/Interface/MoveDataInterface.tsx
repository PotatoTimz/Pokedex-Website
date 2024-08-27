export interface MoveSpecificData {
  name: string;
  accuracy: number;
  pp: number;
  power: number;
  type: string;
  damage_class: string;
  learn_level: number;
}

export const defaultMoveSpecificData: MoveSpecificData = {
  name: "",
  accuracy: 0,
  pp: 0,
  power: 0,
  type: "",
  damage_class: "",
  learn_level: 0,
};
