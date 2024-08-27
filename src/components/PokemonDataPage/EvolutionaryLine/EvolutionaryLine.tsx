import { useContext, useEffect, useState } from "react";
import { PokemonDataContext } from "../PokemonDataPage";
import { fetchEvolutionLine } from "../../Hooks/FetchPokemonPageAPIData";
import EvolutionsCss from "../../../assets/scss/PokemonDataScreen/PokemonDataEvolutions.module.scss";
import FeaturePokemon from "./FeaturePokemon";

function EvolutionaryLine() {
  const { pokemonEvolutionLineUrl, pokemonType } =
    useContext(PokemonDataContext);
  const [evolutionaryLine, setEvolutionaryLine] = useState<
    Array<Array<string>>
  >([]);

  useEffect(() => {
    fetchEvolutionLine(pokemonEvolutionLineUrl).then((response) => {
      setEvolutionaryLine(response);
    });
  }, [pokemonEvolutionLineUrl]);

  return (
    <div
      id={EvolutionsCss["evolutionLine"]}
      className={`${EvolutionsCss["column"]}`}
    >
      {evolutionaryLine.map((level: Array<string>, index: number) => {
        return (
          <div
            key={level.length + index.toString()}
            className={`${EvolutionsCss["level"]} border-${pokemonType[0]}-dark`}
          >
            <div className={EvolutionsCss["levelTitle"]}>
              {" "}
              {index === 0
                ? "Unevolved"
                : index === 1
                ? "1st Evolution"
                : "2nd Evolution"}
            </div>
            <div className={`${EvolutionsCss["row"]}`}>
              {level.map((url: string) => {
                return (
                  <FeaturePokemon
                    key={url}
                    id={url.substring(42, url.length - 1)}
                    hierarchyLevel={index}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EvolutionaryLine;
