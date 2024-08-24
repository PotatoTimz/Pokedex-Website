import { useEffect, useState } from "react";
import MainScreenCss from "../../assets/scss/PokemonDataScreen/PokemonDataMain.module.scss";
import { fetchPokemonDataPageInfo } from "../Hooks/FetchPokemonPageAPIData";
import {
  PokemonDataPageInfo,
  pokemonDataPageInfoDefault,
} from "../Interface/PokemonDataPageInterface";
import GeneralInfoCard from "./GeneralInfo/GeneralInfoCard";
import PokedexEntries from "./Pokedex/PokdexEntries";
import { useParams } from "react-router-dom";
import BaseStats from "./BaseStats/BaseStats";
import Banner from "./Banner/Banner";

function PokemonDataPage() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState<PokemonDataPageInfo>(
    pokemonDataPageInfoDefault
  );

  useEffect(() => {
    if (id !== undefined) {
      const pokemonID: string = id.toString();

      fetchPokemonDataPageInfo(pokemonID).then((response) => {
        setPokemonData(response);
        //console.log(response);
      });
    }
  }, []);

  return (
    <div id={MainScreenCss["body"]}>
      <div className={MainScreenCss["column"]}>
        <div className={MainScreenCss["row"]}>
          <Banner primaryTyping={pokemonData.pokemonType[0]}></Banner>
        </div>
        <div className={MainScreenCss["row"]}>
          <h1>Pokédex Data</h1>
        </div>
        <div className={MainScreenCss["row"]}>
          <GeneralInfoCard pokemonData={pokemonData}></GeneralInfoCard>
          <PokedexEntries pokemonData={pokemonData}></PokedexEntries>
        </div>
        <div className={MainScreenCss["row"]}>
          <h1>Base Stats</h1>
        </div>
        <div className={MainScreenCss["row"]}>
          <BaseStats pokemonData={pokemonData}></BaseStats>
        </div>
      </div>
    </div>
  );
}

export default PokemonDataPage;
