import { useEffect, useState } from "react";
import MainScreen from "../../assets/scss/PokemonDataScreen/PokemonDataMain.module.scss";
import { fetchPokemonDataPageInfo } from "../Hooks/FetchPokemonPageAPIData";
import {
  PokemonDataPageInfo,
  pokemonDataPageInfoDefault,
  SpriteData,
} from "../Interface/PokemonDataPageInterface";
import GeneralInfoCard from "./GeneralInfoCard";
import PokedexEntries from "./Pokedex/PokdexEntries";
import { useParams } from "react-router-dom";

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
        console.log(response);
      });
    }
  }, []);

  return (
    <div id={MainScreen["body"]}>
      <div className={MainScreen["column"]}>
        <h1>Pokédex Data</h1>
        <div className={MainScreen["row"]}>
          <GeneralInfoCard pokemonData={pokemonData}></GeneralInfoCard>
          <PokedexEntries pokemonData={pokemonData}></PokedexEntries>
        </div>
      </div>
    </div>
  );
}

export default PokemonDataPage;
