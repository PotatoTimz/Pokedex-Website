import { createContext, useEffect, useState } from "react";
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
import MoveList from "./MoveList/MoveList";
import EvolutionaryLine from "./EvolutionaryLine/EvolutionaryLine";
import AlternativeForms from "./EvolutionaryLine/AlternativeForms";

export const PokemonDataContext = createContext<PokemonDataPageInfo>(
  pokemonDataPageInfoDefault
);

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
  }, [id]);

  return (
    <div id={MainScreenCss["body"]}>
      <PokemonDataContext.Provider value={pokemonData}>
        <div className={MainScreenCss["column"]}>
          <div className={MainScreenCss["row"]}>
            <Banner />
          </div>

          <div className={MainScreenCss["row"]}>
            <h1 className={`border-${pokemonData.pokemonType[0]}-light`}>
              Pokédex Data
            </h1>
          </div>
          <div className={MainScreenCss["row"]}>
            <GeneralInfoCard />
            <PokedexEntries />
          </div>

          <div className={MainScreenCss["row"]}>
            <h1 className={`border-${pokemonData.pokemonType[0]}-light`}>
              Evolutionary Line
            </h1>
          </div>
          <div className={MainScreenCss["row"]}>
            <EvolutionaryLine />
          </div>

          {pokemonData.pokemonVariants.length > 0 ? (
            <>
              <div className={MainScreenCss["row"]}>
                <h1 className={`border-${pokemonData.pokemonType[0]}-light`}>
                  Other Forms and Varients
                </h1>
              </div>
              <div className={MainScreenCss["row"]}>
                <AlternativeForms />
              </div>
            </>
          ) : null}

          <div className={MainScreenCss["row"]}>
            <h1 className={`border-${pokemonData.pokemonType[0]}-light`}>
              Move List
            </h1>
          </div>
          <div className={MainScreenCss["row"]}>
            <MoveList />
          </div>

          <div className={MainScreenCss["row"]}>
            <h1 className={`border-${pokemonData.pokemonType[0]}-light`}>
              Base Stats
            </h1>
          </div>
          <div className={MainScreenCss["row"]}>
            <BaseStats />
          </div>
        </div>
      </PokemonDataContext.Provider>
    </div>
  );
}

export default PokemonDataPage;
