import { useEffect, useState } from "react";
import {
  GenerationFilter,
  TypeFilter,
  searchFilterDefault,
  searchFilterDisableAll,
  typeList,
  generationList,
} from "../Interface/SearchFilterInterface";
import { convertFirstCharacterUpper } from "../Utilities/UtilityFunctions";
import { generationInfo } from "../Interface/GenerationInterface";
import FilterFormClasses from "../../assets/scss/SearchScreen/FilterForm.module.scss";

interface Props {
  toggleFilterForm: () => void;
  submitFilter: (
    word: string,
    generations: GenerationFilter,
    types: TypeFilter
  ) => void;
}

function FilterForm(props: Props) {
  const [wordFilter, setWordFilter] = useState<string>("");
  const [generationFilter, setGenerationFilter] = useState<GenerationFilter>(
    searchFilterDefault.generation_filter
  );
  const [typeFilter, setTypeFilter] = useState<TypeFilter>(
    searchFilterDefault.type_filter
  );

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.submitFilter(wordFilter, generationFilter, typeFilter);
    props.toggleFilterForm();
  };

  const resetFilters = () => {
    setWordFilter("");
    setTypeFilter(searchFilterDefault.type_filter);
    setGenerationFilter(searchFilterDefault.generation_filter);
  };

  const disableAllFilters = () => {
    setTypeFilter(searchFilterDisableAll.type_filter);
    setGenerationFilter(searchFilterDisableAll.generation_filter);
  };

  const setKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWordFilter(e.target.value);
  };

  const toggleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.currentTarget.name as keyof TypeFilter;
    setTypeFilter({
      ...typeFilter,
      [type]: typeFilter[type] === "true" ? "false" : "true",
    });
  };

  const toggleGeneration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gen = e.currentTarget.name as keyof GenerationFilter;
    setGenerationFilter({
      ...generationFilter,
      [gen]: generationFilter[gen] === "true" ? "false" : "true",
    });
  };

  const clickEnter = (event: KeyboardEvent) => {
    console.log("test");
    if (event.key === "Enter") {
      props.submitFilter(wordFilter, generationFilter, typeFilter);
      props.toggleFilterForm();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", clickEnter);
    return () => {
      document.removeEventListener("keydown", clickEnter);
    };
  }, [clickEnter]);

  return (
    <>
      <form onSubmit={submitForm} id={FilterFormClasses["filterForm"]}>
        <div id={FilterFormClasses["header"]}>
          <button
            id={FilterFormClasses["closeFormButton"]}
            onClick={props.toggleFilterForm}
          >
            x
          </button>
        </div>
        <div id={FilterFormClasses["keywordFilter"]}>
          <input
            id={FilterFormClasses["pokemonSearchBar"]}
            type="text"
            onChange={setKeyword}
            name="keyword"
            placeholder="Enter Pokemon Name"
            value={wordFilter}
          ></input>
        </div>
        <div id={FilterFormClasses["typeFilter"]}>
          {typeList.map((type: string) => {
            return (
              <label key={type}>
                <input
                  className={FilterFormClasses["checkbox"]}
                  type="checkbox"
                  name={type}
                  onChange={toggleType}
                  value={typeFilter[type as keyof TypeFilter]}
                  checked={typeFilter[type as keyof TypeFilter] === "true"}
                ></input>
                <span
                  className={`${FilterFormClasses["pokemonTypeFilter"]} bg-${type}-light  `}
                >
                  {convertFirstCharacterUpper(type)}{" "}
                </span>
              </label>
            );
          })}
        </div>
        <div id={FilterFormClasses["generationFilter"]}>
          {generationList.map((gen: string) => {
            const genInfo = generationInfo(gen);
            return (
              <label key={gen}>
                <input
                  className={FilterFormClasses["checkbox"]}
                  type="checkbox"
                  name={gen}
                  onChange={toggleGeneration}
                  value={generationFilter[gen as keyof GenerationFilter]}
                  checked={
                    generationFilter[gen as keyof GenerationFilter] === "true"
                  }
                ></input>
                <span
                  className={`${FilterFormClasses["generationTypeFilter"]}`}
                >
                  <img
                    id={`${FilterFormClasses["mascotImage"]}`}
                    src={genInfo["mascot-sprites"]["mascot-1"]}
                    alt="mascot-1"
                  ></img>
                  {genInfo.region}
                  <img
                    id={`${FilterFormClasses["mascotImage"]}`}
                    src={genInfo["mascot-sprites"]["mascot-2"]}
                    alt="mascot-2"
                  ></img>
                </span>
              </label>
            );
          })}
        </div>
        <div id={FilterFormClasses["footer"]}>
          <button type="submit">Submit</button>
          <button type="button" onClick={disableAllFilters}>
            Disable All
          </button>
          <button type="button" onClick={resetFilters}>
            Clear Filters
          </button>
        </div>
      </form>
    </>
  );
}

export default FilterForm;
