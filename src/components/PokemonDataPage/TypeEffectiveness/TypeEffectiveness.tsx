import { useContext, useEffect } from "react";
import { PokemonDataContext } from "../PokemonDataPage";
import { PokemonTypeMap } from "../../Interface/PokemonDataPageInterface";
import TypeEffectivenessCss from "../../../assets/scss/PokemonDataScreen/PokemonDataTypeEffectiveness.module.scss";

function TypeEffectiveness() {
  const { pokemonTypeChart } = useContext(PokemonDataContext);

  const fourTimes: Array<string> = [];
  const twoTimes: Array<string> = [];
  const regular: Array<string> = [];
  const immune: Array<string> = [];

  for (const type in pokemonTypeChart) {
    if (pokemonTypeChart[type as keyof PokemonTypeMap] === 0) {
      immune.push(type);
    } else if (pokemonTypeChart[type as keyof PokemonTypeMap] === 1) {
      regular.push(type);
    } else if (pokemonTypeChart[type as keyof PokemonTypeMap] === 0.5) {
      twoTimes.push(type);
    } else {
      fourTimes.push(type);
    }
  }

  return (
    <div className={`${TypeEffectivenessCss["column"]}`}>
      <div className={`${TypeEffectivenessCss["row"]}`}>
        <div>Immune:</div>
        <div className={`${TypeEffectivenessCss["row"]}`}>
          {immune.map((type) => {
            return <div key={type}>{type} </div>;
          })}
        </div>
      </div>

      <div className={`${TypeEffectivenessCss["row"]}`}>
        <div>Regular Resistant:</div>
        <div className={`${TypeEffectivenessCss["row"]}`}>
          {regular.map((type) => {
            return <div key={type}>{type}</div>;
          })}
        </div>
      </div>

      <div className={`${TypeEffectivenessCss["row"]}`}>
        <div>Two Times Resistant:</div>
        <div className={`${TypeEffectivenessCss["row"]}`}>
          {twoTimes.map((type) => {
            return <div key={type}>{type}</div>;
          })}
        </div>
      </div>

      <div className={`${TypeEffectivenessCss["row"]}`}>
        <div>Four Times Resistant:</div>
        <div className={`${TypeEffectivenessCss["row"]}`}>
          {fourTimes.map((type) => {
            return <div key={type}>{type}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default TypeEffectiveness;
