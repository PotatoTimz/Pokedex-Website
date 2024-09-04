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
import TypeEffectiveness from "./TypeEffectiveness/TypeEffectiveness";
import { useNavigate } from "react-router-dom";

export const PokemonDataContext = createContext<PokemonDataPageInfo>(
  pokemonDataPageInfoDefault
);

function PokemonDataPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState<PokemonDataPageInfo>(
    pokemonDataPageInfoDefault
  );
  const [foundError, setError] = useState<boolean>(false);

  useEffect(() => {
    // If the current ID is valid
    if (
      id !== undefined &&
      ((parseInt(id) >= 0 && parseInt(id) <= 1025) ||
        (parseInt(id) >= 10001 && parseInt(id) <= 10277))
    ) {
      fetchPokemonDataPageInfo(id.toString()).then((response) => {
        setPokemonData(response);
      });
      setError(true);
    }
    // If invalid navigate back to the home page
    else {
      setTimeout(() => {
        navigate("/", {});
      }, 1000);
    }
  }, [id]);

  return foundError ? (
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
              Defensive Matchups
            </h1>
          </div>
          <div className={MainScreenCss["row"]}>
            <TypeEffectiveness />
          </div>

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
  ) : (
    <div id={MainScreenCss["body"]}>
      ERROR: Pokemon Not Found ... Renavigating
    </div>
  );
}

export default PokemonDataPage;
