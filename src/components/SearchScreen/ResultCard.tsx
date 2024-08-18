import ResultCardClasses from "../../assets/scss/SearchScreen/ResultCard.module.scss";
import { fetchPokemonSearchData } from "../Hooks/FetchAPIData";
import { SearchFilter } from "../Interface/SearchFilterInterface";
import { useEffect, useState } from "react";
import { convertFirstCharacterUpper } from "../Utilities/UtilityFunctions";
import { generationInfo } from "../Interface/GenerationInterface";
import pokeball_img from "../../assets/pokeball_transparent.jpg";
import {
  SearchCard,
  defaultSearchCard,
} from "../Interface/SearchCardInterface";

interface Props {
  id: string;
  searchFilter: SearchFilter;
}

function ResultCard(props: Props) {
  const [pokemonData, setPokemonData] = useState<SearchCard>(defaultSearchCard);
  const [passFilter, setPassFilter] = useState<boolean>(true);

  const filterKeyword = (): boolean => {
    if (
      pokemonData.pokemonName
        .toLowerCase()
        .includes(props.searchFilter.keyword.toLowerCase())
    ) {
      return true;
    }
    return false;
  };

  const filterGeneration = (): boolean => {
    for (const [genNumber, toggle] of Object.entries(
      props.searchFilter.generation_filter
    )) {
      const genInfo = generationInfo(genNumber);

      if (
        toggle === "true" &&
        genInfo.region === pokemonData.pokemonRegionName
      ) {
        return true;
      }
    }
    return false;
  };

  const filterType = (): boolean => {
    for (const [typeName, toggle] of Object.entries(
      props.searchFilter.type_filter
    )) {
      if (toggle === "true" && pokemonData.pokemonType.includes(typeName)) {
        return true;
      }
    }
    return false;
  };

  // Check if pokemon fits filter
  useEffect(() => {
    if (filterKeyword() && filterGeneration() && filterType()) {
      setPassFilter(true);
    } else {
      setPassFilter(false);
    }
  }, [props.searchFilter, pokemonData]);

  useEffect(() => {
    fetchPokemonSearchData(props.id).then((response) => {
      setPokemonData(() => {
        return response;
      });
    });
  }, [props.id]);

  return passFilter ? (
    <div
      className={`${ResultCardClasses["pokemonCard"]} bg-${pokemonData.pokemonType[0]}-dark`}
    >
      <div className={ResultCardClasses["header"]}>
        <div className={ResultCardClasses["row-1"]}>
          <div
            className={`${ResultCardClasses["pokemonName"]} bg-${pokemonData.pokemonType[0]}-light`}
          >
            {pokemonData.pokemonName}
          </div>
          <div
            className={`${ResultCardClasses["pokemonId"]} bg-${pokemonData.pokemonType[0]}-light`}
          >
            #{pokemonData.pokemonId}
          </div>
        </div>
        <div className={ResultCardClasses["row-2"]}>
          {pokemonData.pokemonType.map((typing) => {
            return (
              <div
                key={`${typing}`}
                className={`${ResultCardClasses["pokemonType"]} bg-${typing}-light`}
              >
                {convertFirstCharacterUpper(typing)}
              </div>
            );
          })}
        </div>
      </div>
      <div className={ResultCardClasses["body"]}>
        <img
          className={`${ResultCardClasses["pokeballImg"]} bg-${
            pokemonData.pokemonType.length >= 1
              ? pokemonData.pokemonType[1]
              : pokemonData.pokemonType[0]
          }-light`}
          src={pokeball_img}
          alt="pokeball"
        ></img>
        <img
          src={pokemonData.pokemonSprite}
          alt={pokemonData.pokemonName}
          className={ResultCardClasses["pokemonImg"]}
        ></img>
      </div>
      <div className={ResultCardClasses["footer"]}>
        <div
          className={`${ResultCardClasses["generationInfo"]} bg-${pokemonData.pokemonType[0]}-light`}
        >
          <div>{pokemonData.pokemonRegionName}</div>
          <div>Generation: {pokemonData.pokemonRegionNumber}</div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default ResultCard;
