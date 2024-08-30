import BaseStatsCss from "../../../assets/scss/PokemonDataScreen/PokemonDataBaseStats.module.scss";
import Stat from "./Stat";
import { PokemonDataContext } from "../PokemonDataPage";
import { useContext } from "react";

function BaseStats() {
  const { baseStatData, pokemonType } = useContext(PokemonDataContext);
  const hp = baseStatData.hp;
  const attack = baseStatData.attack;
  const defense = baseStatData.defense;
  const spAttack = baseStatData["special-attack"];
  const spDefense = baseStatData["special-defense"];
  const speed = baseStatData.speed;

  return (
    <div
      id={BaseStatsCss["baseStats"]}
      className={`bg-${pokemonType[0]}-light border-${pokemonType[0]}-dark ${BaseStatsCss["column"]}`}
    >
      <Stat statValue={hp} statName={"HP"}></Stat>
      <Stat statValue={attack} statName={"Attack"}></Stat>
      <Stat statValue={defense} statName={"Defense"}></Stat>
      <Stat statValue={spAttack} statName={"SpAttack"}></Stat>
      <Stat statValue={spDefense} statName={"SpDefense"}></Stat>
      <Stat statValue={speed} statName={"Speed"}></Stat>
    </div>
  );
}

export default BaseStats;
