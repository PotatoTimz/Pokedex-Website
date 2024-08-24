import SearchScreenMain from "../../assets/scss/SearchScreen/SearchScreenMain.module.scss";
import { useEffect, useState } from "react";
import {
  GenerationFilter,
  SearchFilter,
  searchFilterDefault,
  TypeFilter,
} from "../Interface/SearchFilterInterface";
import { fetchSearchResults } from "../Hooks/FetchSearchScreenAPIData";
import {
  defaultSearchQuery,
  SearchQueryInfo,
} from "../Interface/ApiInterfaces/SearchResultsInterface";
import ResultCard from "../SearchScreen/ResultCard";
import FilterForm from "./FilterForm";
import { Link } from "react-router-dom";

function SearchScreen() {
  const [searchQuery, setSearchQuery] =
    useState<SearchQueryInfo>(defaultSearchQuery);

  const [searchFilter, setSearchFilter] =
    useState<SearchFilter>(searchFilterDefault);
  const [wordFilter, setWordFilter] = useState<string>("");
  const [enableFilterForm, setFilterForm] = useState<boolean>(false);

  // open filter form
  const openFilterForm = () => {
    setFilterForm(!enableFilterForm);
  };

  //onSubmit (Basic)
  const updateFilterSimple = () => {
    setSearchFilter({
      ...searchFilter,
      keyword: wordFilter,
    });
    setWordFilter("");
  };

  //onSubmit (Filter Form)
  const updateFilterAdvance = (
    word: string,
    generations: GenerationFilter,
    types: TypeFilter
  ) => {
    setSearchFilter({
      keyword: word,
      generation_filter: generations,
      type_filter: types,
    });
  };

  const clickEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter" && enableFilterForm === false) {
      updateFilterAdvance(
        wordFilter,
        searchFilterDefault.generation_filter,
        searchFilterDefault.type_filter
      );
    }
  };

  useEffect(() => {
    fetchSearchResults().then((response) => {
      setSearchQuery(response);
      console.log(response);
    });
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", clickEnter);
    return () => {
      document.removeEventListener("keydown", clickEnter);
    };
  }, [clickEnter]);

  return (
    <div id={SearchScreenMain["body"]}>
      {enableFilterForm ? (
        <FilterForm
          toggleFilterForm={openFilterForm}
          submitFilter={updateFilterAdvance}
        ></FilterForm>
      ) : (
        <>
          <div id={SearchScreenMain["searchBody"]}>
            <input
              id={SearchScreenMain["pokemonSearchBar"]}
              type="text"
              placeholder="Enter Pokemon Name"
              value={wordFilter}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setWordFilter(e.target.value);
              }}
            ></input>
            <button onClick={updateFilterSimple}>Search</button>
            <button onClick={openFilterForm}>More</button>
          </div>
        </>
      )}

      <div id={SearchScreenMain["queryResults"]}>
        {searchQuery.results.map((pokemon, index) => {
          const pokemonId = pokemon.url.substring(34, pokemon.url.length - 1);
          return (
            <Link
              key={`${pokemon}-${index}`}
              to={`/pokemon/${pokemonId}`}
              style={{ textDecoration: "none" }}
            >
              <ResultCard
                id={pokemonId}
                searchFilter={searchFilter}
              ></ResultCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SearchScreen;
