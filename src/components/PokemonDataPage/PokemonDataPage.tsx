import { useEffect, useState } from "react";
import MainScreen from "../../assets/scss/PokemonDataScreen/PokemonDataScreenMain.module.scss";
import { fetchPokemonDataPageInfo } from "../Hooks/FetchPokemonPageAPIData";
import {
  PokemonDataPageInfo,
  SpriteData,
} from "../Interface/PokemonDataPageInterface";

function PokemonDataPage() {
  const [pokemonData, setPokemonData] = useState<PokemonDataPageInfo>();

  const print = () => {
    console.log(pokemonData);
  };

  useEffect(() => {
    fetchPokemonDataPageInfo("250").then((response) => {
      setPokemonData(response);
    });
  }, []);

  return (
    <div id={MainScreen["body"]}>
      <button onClick={print}>test</button>
      <img src={pokemonData?.spriteData["black-white"]}></img>
      <img src={pokemonData?.spriteData["diamond-pearl-platnuim"]}></img>
      <img src={pokemonData?.spriteData["x-y-omegaruby-alphasaphire"]}></img>
      <img src={pokemonData?.spriteData["official-artwork"]}></img>
    </div>
  );
}

export default PokemonDataPage;
