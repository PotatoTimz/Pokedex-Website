import { useContext } from "react";
import { PokemonDataContext } from "../PokemonDataPage";
import EvolutionsCss from "../../../assets/scss/PokemonDataScreen/PokemonDataEvolutions.module.scss";
import FeaturePokemon from "./FeaturePokemon";
function AlternativeForms() {
  const { pokemonVariants, pokemonType } = useContext(PokemonDataContext);

  return (
    <div
      id={EvolutionsCss["evolution-line"]}
      className={`${EvolutionsCss["column"]}`}
    >
      <div
        className={`${EvolutionsCss["level"]} border-${pokemonType[0]}-dark`}
      >
        <div className={EvolutionsCss["level-title"]}>Other Forms</div>
        <div className={`${EvolutionsCss["row"]}`}>
          {pokemonVariants.map((id: string) => {
            return <FeaturePokemon key={id} id={id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default AlternativeForms;
