import { SyntheticEvent, useState } from "react";
import {
  GenerationFilter,
  TypeFilter,
  searchFilterDefault,
  typeList,
  generationList,
} from "../Interface/SearchFilterInterface";
import { convertFirstCharacterUpper } from "../Utilities/UtilityFunctions";
import { generationInfo } from "../Interface/GenerationInterface";
import FilterFormClasses from "../../assets/scss/FilterForm.module.scss";

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
  };

  const setKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWordFilter(e.target.value);
  };

  const toggleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.currentTarget.name as keyof TypeFilter;
    setTypeFilter({
      ...typeFilter,
      [type]: !typeFilter[type],
    });
  };

  const toggleGeneration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const gen = e.currentTarget.name as keyof GenerationFilter;
    setGenerationFilter({
      ...generationFilter,
      [gen]: !generationFilter[gen],
    });
  };

  return (
    <>
      <button onClick={props.toggleFilterForm}>Close Filter Form</button>
      <form onSubmit={submitForm} id={FilterFormClasses["filterForm"]}>
        <div id={FilterFormClasses["keywordFilter"]}>
          <input
            id={FilterFormClasses["pokemonSearchBar"]}
            type="text"
            onChange={setKeyword}
            name="keyword"
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
                  defaultChecked={true}
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
                  defaultChecked={true}
                ></input>
                <span
                  className={`${FilterFormClasses["generationTypeFilter"]}`}
                >
                  {genInfo.region}
                </span>
              </label>
            );
          })}
        </div>
        <div id={FilterFormClasses["submitFilter"]}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default FilterForm;
