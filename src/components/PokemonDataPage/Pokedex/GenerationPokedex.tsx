import { useContext } from "react";
import PokedexEntriesCss from "../../../assets/scss/PokemonDataScreen/PokemonDataPokedexEntries.module.scss";
import { convertFirstCharacterUpper } from "../../Utilities/UtilityFunctions";
import { PokemonDataContext } from "../PokemonDataPage";

interface Props {
  gameTitles: Array<string>;
  pokedexEntries: Array<string>;
  generationNumber: string;
}

function GenerationPokedex(props: Props) {
  const { pokemonType } = useContext(PokemonDataContext);

  return (
    <>
      <div className={PokedexEntriesCss["generation-section"]}>
        <div
          className={`bg-${pokemonType[0]}-light ${PokedexEntriesCss["generation-label"]}`}
        >
          Generation {props.generationNumber}:
        </div>
        <div
          className={`${PokedexEntriesCss["generation-pokedex-data"]} border-${pokemonType[0]}-light`}
        >
          <div className={`${PokedexEntriesCss["column"]}`}>
            {props.gameTitles.map((title, index) => {
              return props.pokedexEntries[index] !== undefined ? (
                <div className={`${PokedexEntriesCss["row"]}`} key={title}>
                  <div className={`${PokedexEntriesCss[`${title}-icon`]}`}>
                    {convertFirstCharacterUpper(title)}
                  </div>
                  <div
                    className={`${PokedexEntriesCss["entry"]} border-${pokemonType[0]}-dark`}
                  >
                    {props.pokedexEntries[index]}
                  </div>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default GenerationPokedex;
