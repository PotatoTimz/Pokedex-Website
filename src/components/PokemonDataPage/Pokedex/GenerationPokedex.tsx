import PokedexEntriesClasses from "../../../assets/scss/PokemonDataScreen/PokemonDataPokedexEntries.module.scss";
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
      <div className={PokedexEntriesClasses["generationSection"]}>
        <div
          className={`bg-${props.primaryType}-light ${PokedexEntriesClasses["generationLabel"]}`}
        >
          Generation {props.generationNumber}:
        </div>
        <div
          className={`${PokedexEntriesClasses["generationPokedexData"]} border-${props.primaryType}-light`}
        >
          <div className={`${PokedexEntriesClasses["column"]}`}>
            {props.gameTitles.map((title, index) => {
              return props.pokedexEntries[index] !== undefined ? (
                <div className={`${PokedexEntriesClasses["row"]}`} key={title}>
                  <div className={`${PokedexEntriesClasses[`${title}-icon`]}`}>
                    {convertFirstCharacterUpper(title)}
                  </div>
                  <div
                    className={`${PokedexEntriesClasses["entry"]} border-${props.primaryType}-dark`}
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
