import { useContext, useEffect, useState } from "react";
import BannerCss from "../../../assets/scss/PokemonDataScreen/PokemonDataBanner.module.scss";
import { BannerInfo } from "../../Interface/PokemonDataPageInterface";
import { fetchPokemonBannerData } from "../../Hooks/FetchPokemonPageAPIData";
import { Link, useParams } from "react-router-dom";
import BannerItem from "./BannerItem";
import { PokemonDataContext } from "../PokemonDataPage";

function Banner() {
  const { pokemonType } = useContext(PokemonDataContext);
  const { id } = useParams();
  const [previousPokemon, setPreviousPokemon] = useState<
    BannerInfo | undefined
  >(undefined);
  const [currentPokemon, setCurrentPokemon] = useState<BannerInfo | undefined>(
    undefined
  );
  const [nextPokemon, setNextPokemon] = useState<BannerInfo | undefined>(
    undefined
  );

  useEffect(() => {
    // Previous Data
    fetchPokemonBannerData(parseInt(id as string) - 1).then((response) => {
      setPreviousPokemon(response);
    });
    // Previous Data
    fetchPokemonBannerData(parseInt(id as string)).then((response) => {
      setCurrentPokemon(response);
    });
    // Next Data
    fetchPokemonBannerData(parseInt(id as string) + 1).then((response) => {
      setNextPokemon(response);
    });
  }, [id]);
  //className={`${BannerCss["row"]}`}
  return (
    <>
      <div
        id={BannerCss["banner"]}
        className={`bg-${pokemonType[0]}-dark  ${BannerCss["row"]}`}
      >
        {previousPokemon !== undefined ? (
          <Link
            reloadDocument
            to={`/pokemon/${previousPokemon.pokemonId}`}
            style={{ textDecoration: "none" }}
          >
            <BannerItem
              bannerItem={previousPokemon}
              primaryTyping={pokemonType[0]}
            ></BannerItem>
          </Link>
        ) : null}
        {currentPokemon !== undefined ? (
          <BannerItem
            bannerItem={currentPokemon}
            primaryTyping={pokemonType[0]}
          ></BannerItem>
        ) : null}
        {nextPokemon !== undefined ? (
          <Link
            reloadDocument
            to={`/pokemon/${nextPokemon.pokemonId}`}
            style={{ textDecoration: "none" }}
          >
            <BannerItem
              bannerItem={nextPokemon}
              primaryTyping={pokemonType[0]}
            ></BannerItem>
          </Link>
        ) : null}
      </div>
    </>
  );
}

export default Banner;
