import { SyntheticEvent, useState } from "react";
import {
  GenerationFilter,
  TypeFilter,
  searchFilterDefault,
  typeList,
  generationList,
} from "../Interface/SearchFilterInterface";
import { generationInfo } from "../Interface/GenerationInterface";

interface Props {
  toggleFilterForm: () => void;
}

function FilterForm(props: Props) {
  const [wordFilter, setWordFilter] = useState<string>("");
  const [generatrionFilter, setGenerationFilter] = useState<GenerationFilter>(
    searchFilterDefault.generation_filter
  );
  const [typeFilter, setTypeFilter] = useState<TypeFilter>(
    searchFilterDefault.type_filter
  );

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);

    console.log(payload);
  };

  return (
    <>
      <div>Filter Form</div>
      <button onClick={props.toggleFilterForm}>Close Filter Form</button>
      <form onSubmit={submitForm}>
        <input
          id="pokemonSearchBar"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setWordFilter(e.target.value);
          }}
          name="keyword"
        ></input>
        {/* {typeList.map((type: string) => {
          return <div>{type}</div>;
        })}
        {generationList.map((gen: string) => {
          const genInfo = generationInfo(gen);

          return (
            <div>{`${genInfo.region}: ${genInfo["generation-number"]}`}</div>
          );
        })} */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FilterForm;
