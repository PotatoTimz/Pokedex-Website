import { PokemonDataPageInfo } from "../../Interface/PokemonDataPageInterface";
import BaseStatsCss from "../../../assets/scss/PokemonDataScreen/PokemonDataBaseStats.module.scss";
import Stat from "./Stat";

interface Props {
  pokemonData: PokemonDataPageInfo;
}

function BaseStats(props: Props) {
  const hp = props.pokemonData.baseStatData.hp;
  const attack = props.pokemonData.baseStatData.attack;
  const defense = props.pokemonData.baseStatData.defense;
  const spAttack = props.pokemonData.baseStatData["special-attack"];
  const spDefense = props.pokemonData.baseStatData["special-defense"];
  const speed = props.pokemonData.baseStatData.speed;

  const primaryTyping = props.pokemonData.pokemonType[0];

  return (
    <div
      id={BaseStatsCss["baseStats"]}
      className={`bg-${primaryTyping}-light border-${primaryTyping}-dark ${BaseStatsCss["column"]}`}
    >
      <Stat statValue={hp} statName={"HP"} primaryTyping={primaryTyping}></Stat>
      <Stat
        statValue={attack}
        statName={"Attack"}
        primaryTyping={primaryTyping}
      ></Stat>
      <Stat
        statValue={defense}
        statName={"Defense"}
        primaryTyping={primaryTyping}
      ></Stat>
      <Stat
        statValue={spAttack}
        statName={"SpAttack"}
        primaryTyping={primaryTyping}
      ></Stat>
      <Stat
        statValue={spDefense}
        statName={"SpDefense"}
        primaryTyping={primaryTyping}
      ></Stat>
      <Stat
        statValue={speed}
        statName={"Speed"}
        primaryTyping={primaryTyping}
      ></Stat>
    </div>
  );
}

export default BaseStats;
