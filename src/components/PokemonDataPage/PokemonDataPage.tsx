import { useEffect, useState } from "react";
import MainScreen from "../../assets/scss/PokemonDataScreen/PokemonDataScreenMain.module.scss";
import GeneralInfo from "../../assets/scss/PokemonDataScreen/PokemonDataGeneralInfo.module.scss";
import { fetchPokemonDataPageInfo } from "../Hooks/FetchPokemonPageAPIData";
import {
  PokemonDataPageInfo,
  pokemonDataPageInfoDefault,
  SpriteData,
} from "../Interface/PokemonDataPageInterface";
import { convertFirstCharacterUpper } from "../Utilities/UtilityFunctions";
import PokemonDataGeneralInfo from "./PokemonDataGeneralInfo";

function PokemonDataPage() {
  const [pokemonData, setPokemonData] = useState<PokemonDataPageInfo>(
    pokemonDataPageInfoDefault
  );

  const print = () => {
    console.log(pokemonData);
  };

  useEffect(() => {
    fetchPokemonDataPageInfo("3").then((response) => {
      setPokemonData(response);
    });
  }, []);

  return (
    <div id={MainScreen["body"]}>
      {/* <button onClick={print}>test</button> */}
      <PokemonDataGeneralInfo
        types={pokemonData.pokemonType}
        name={pokemonData.pokemonName}
        id={pokemonData.pokemonID}
        sprites={pokemonData.spriteData}
        abilities={pokemonData.abilityData}
        eggGroups={pokemonData.pokemonMiscData["egg-groups"]}
        baseHappiness={pokemonData.pokemonMiscData["base-happiness"]}
        growthRate={pokemonData.pokemonMiscData["growth-rate"]}
        height={pokemonData.pokemonMiscData.height}
        weight={pokemonData.pokemonMiscData.weight}
      ></PokemonDataGeneralInfo>
    </div>
  );
}

export default PokemonDataPage;
