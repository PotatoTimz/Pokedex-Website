import { useEffect, useState } from "react";
import { fetchFeaturePokemon } from "../../Hooks/FetchPokemonPageAPIData";
import {
  defaultFeaturePokemon,
  FeaturePokemon,
} from "../../Interface/PokemonDataPageInterface";
import EvolutionsCss from "../../../assets/scss/PokemonDataScreen/PokemonDataEvolutions.module.scss";
import { convertFirstCharacterUpper } from "../../Utilities/UtilityFunctions";
import { Link } from "react-router-dom";

interface Props {
  id: string;
}

function featurePokemon(props: Props) {
  const [featurePokemonData, setFeautrePokemonData] = useState<FeaturePokemon>(
    defaultFeaturePokemon
  );

  useEffect(() => {
    fetchFeaturePokemon(props.id).then((response) => {
      setFeautrePokemonData(response);
    });
  }, [props.id]);

  return (
    <Link
      reloadDocument
      to={`/pokemon/${featurePokemonData.id}`}
      style={{ textDecoration: "none" }}
    >
      <div
        className={`${EvolutionsCss["feature"]} ${EvolutionsCss["feature-column"]}`}
      >
        <img
          src={featurePokemonData.sprite}
          alt={featurePokemonData.name}
        ></img>
        <div>{convertFirstCharacterUpper(featurePokemonData.name)}</div>
        <div className={`${EvolutionsCss["type-row"]}`}>
          {featurePokemonData.types.map((type: string) => {
            return (
              <div
                key={type}
                className={`bg-${type}-light ${EvolutionsCss["type"]}`}
              >
                {convertFirstCharacterUpper(type)}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}

export default featurePokemon;
