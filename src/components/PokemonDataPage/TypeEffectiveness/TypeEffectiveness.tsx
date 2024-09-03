import { useContext, useState, useEffect } from "react";
import { PokemonDataContext } from "../PokemonDataPage";
import { PokemonTypeMap } from "../../Interface/PokemonDataPageInterface";
import TypeEffectivenessCss from "../../../assets/scss/PokemonDataScreen/PokemonDataTypeEffectiveness.module.scss";
import EffectivenessLevel from "./EffectivenessLevel";

function TypeEffectiveness() {
  const { pokemonTypeChart, pokemonType } = useContext(PokemonDataContext);

  const [fourTimes, setFourTimes] = useState<Array<string>>([]);
  const [twoTimes, setTwoTimes] = useState<Array<string>>([]);
  const [regular, setRegular] = useState<Array<string>>([]);
  const [immune, setImmune] = useState<Array<string>>([]);

  useEffect(() => {
    const four: Array<string> = [];
    const two: Array<string> = [];
    const regular: Array<string> = [];
    const immune: Array<string> = [];

    for (const type in pokemonTypeChart) {
      if (pokemonTypeChart[type as keyof PokemonTypeMap] === 0) {
        immune.push(type);
      } else if (pokemonTypeChart[type as keyof PokemonTypeMap] === 1) {
        regular.push(type);
      } else if (pokemonTypeChart[type as keyof PokemonTypeMap] === 0.5) {
        two.push(type);
      } else {
        four.push(type);
      }
    }

    setFourTimes([...four]);
    setTwoTimes([...two]);
    setRegular([...regular]);
    setImmune([...immune]);
  }, [pokemonTypeChart]);

  return (
    <div
      id={TypeEffectivenessCss["type-chart"]}
      className={`${TypeEffectivenessCss["column"]} border-${pokemonType[0]}-dark`}
    >
      <EffectivenessLevel
        effectivenessLevel="Immune (0x)"
        typeList={immune}
        primaryType={pokemonType[0]}
      />
      <EffectivenessLevel
        effectivenessLevel="Regular Resistant (1x)"
        typeList={regular}
        primaryType={pokemonType[0]}
      />
      <EffectivenessLevel
        effectivenessLevel="Two Times Resistant (2x)"
        typeList={twoTimes}
        primaryType={pokemonType[0]}
      />
      <EffectivenessLevel
        effectivenessLevel="Four Times Resistant (4x)"
        typeList={fourTimes}
        primaryType={pokemonType[0]}
      />
    </div>
  );
}

export default TypeEffectiveness;
