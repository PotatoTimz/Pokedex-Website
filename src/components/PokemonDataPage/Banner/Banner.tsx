import { useEffect, useState } from "react";
import BannerCss from "../../../assets/scss/PokemonDataScreen/PokemonDataBanner.module.scss";
import { BannerInfo } from "../../Interface/PokemonDataPageInterface";
import { fetchPokemonBannerData } from "../../Hooks/FetchPokemonPageAPIData";
import { Link, useParams } from "react-router-dom";
import { convertFirstCharacterUpper } from "../../Utilities/UtilityFunctions";
import BannerItem from "./BannerItem";

interface Props {
  primaryTyping: string;
}

function Banner(props: Props) {
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
      console.log(response);
    });
    // Previous Data
    fetchPokemonBannerData(parseInt(id as string)).then((response) => {
      setCurrentPokemon(response);
      console.log(response);
    });
    // Next Data
    fetchPokemonBannerData(parseInt(id as string) + 1).then((response) => {
      setNextPokemon(response);
    });
  }, []);
  //className={`${BannerCss["row"]}`}
  return (
    <>
      <div
        id={BannerCss["banner"]}
        className={`bg-${props.primaryTyping}-dark  ${BannerCss["row"]}`}
      >
        {previousPokemon !== undefined ? (
          <Link
            reloadDocument
            to={`/pokemon/${previousPokemon.pokemonId}`}
            style={{ textDecoration: "none" }}
          >
            <BannerItem
              bannerItem={previousPokemon}
              primaryTyping={props.primaryTyping}
            ></BannerItem>
          </Link>
        ) : (
          <div></div>
        )}
        {currentPokemon !== undefined ? (
          <Link
            reloadDocument
            to={`/pokemon/${currentPokemon.pokemonId}`}
            style={{ textDecoration: "none" }}
          >
            <BannerItem
              bannerItem={currentPokemon}
              primaryTyping={props.primaryTyping}
            ></BannerItem>
          </Link>
        ) : (
          <div></div>
        )}
        {nextPokemon !== undefined ? (
          <Link
            reloadDocument
            to={`/pokemon/${nextPokemon.pokemonId}`}
            style={{ textDecoration: "none" }}
          >
            <BannerItem
              bannerItem={nextPokemon}
              primaryTyping={props.primaryTyping}
            ></BannerItem>
          </Link>
        ) : null}
      </div>
    </>
  );
}

export default Banner;
