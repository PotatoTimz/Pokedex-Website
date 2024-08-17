import { useEffect, useState } from "react";
import {
  GenerationFilter,
  generationList,
  SearchFilter,
  searchFilterDefault,
  TypeFilter,
  typeList,
} from "../Interface/SearchFilterInterface";
import { fetchSearchResults } from "../Hooks/FetchAPIData";
import { SearchQueryInfo } from "../Interface/ApiInterfaces/SearchResultsInterface";
import ResultCard from "../SearchScreen/ResultCard";
import FilterForm from "./FilterForm";

function SearchScreen() {
  const [loadedPokemon, setLoadedPokemon] = useState<SearchQueryInfo>({
    count: 1302,
    next: "https://pokeapi.co/api/v2/pokemon?offset=1&limit=1",
    previous: "",
    results: [
      {
        name: "bulbasaur",
        url: "https://pokeapi.co/api/v2/pokemon/1/",
      },
    ],
  });
  const [searchFilter, setSearchFilter] =
    useState<SearchFilter>(searchFilterDefault);
  const [wordFilter, setWordFilter] = useState<string>("");

  const [enableFilterForm, setFilterForm] = useState<boolean>(false);

  useEffect(() => {
    fetchSearchResults().then((response) => {
      setLoadedPokemon(response);
      console.log(response);
    });
  }, []);

  // open filter form
  const openFilterForm = () => {
    setFilterForm(!enableFilterForm);
  };

  //onSubmit
  const changeFilterSimple = () => {
    setSearchFilter({
      ...searchFilter,
      keyword: wordFilter,
    });
  };

  //onSubmit for filter form
  const changeFilterAdvanced = (
    word: string,
    generations: GenerationFilter,
    types: TypeFilter
  ) => {
    setSearchFilter({
      keyword: word,
      generation_filter: generations,
      type_filter: types,
    });
    console.log(searchFilter);
  };

  return (
    <div className="body">
      {enableFilterForm ? (
        <FilterForm
          toggleFilterForm={openFilterForm}
          submitFilter={changeFilterAdvanced}
        ></FilterForm>
      ) : (
        <>
          <input
            id="pokemonSearchBar"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setWordFilter(e.target.value);
            }}
          ></input>
          <button onClick={changeFilterSimple}>Search</button>
          <button onClick={openFilterForm}>Open Filter Form</button>
        </>
      )}

      <div id="queryResults">
        {loadedPokemon.results.map((pokemon, index) => {
          return (
            <ResultCard
              key={`${pokemon}-${index}`}
              id={pokemon.url.substring(34, pokemon.url.length - 1)}
              searchFilter={searchFilter}
            ></ResultCard>
          );
        })}
      </div>
      {/* <ResultCard id={1000}></ResultCard> */}
    </div>
  );
}

export default SearchScreen;
