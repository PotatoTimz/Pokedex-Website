import PokedexEntriesCss from "../../../assets/scss/PokemonDataScreen/PokemonDataPokedexEntries.module.scss";
import { convertFirstCharacterUpper } from "../../Utilities/UtilityFunctions";

interface Props {
  gameTitles: Array<string>;
  pokedexEntries: Array<string>;
  generationNumber: string;
  primaryType: string;
}

function GenerationPokedex(props: Props) {
  return (
    <>
      <div className={PokedexEntriesCss["generationSection"]}>
        <div
          className={`bg-${props.primaryType}-light ${PokedexEntriesCss["generationLabel"]}`}
        >
          Generation {props.generationNumber}:
        </div>
        <div
          className={`${PokedexEntriesCss["generationPokedexData"]} border-${props.primaryType}-light`}
        >
          <div className={`${PokedexEntriesCss["column"]}`}>
            {props.gameTitles.map((title, index) => {
              return props.pokedexEntries[index] !== undefined ? (
                <div className={`${PokedexEntriesCss["row"]}`} key={title}>
                  <div className={`${PokedexEntriesCss[`${title}-icon`]}`}>
                    {convertFirstCharacterUpper(title)}
                  </div>
                  <div
                    className={`${PokedexEntriesCss["entry"]} border-${props.primaryType}-dark`}
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
