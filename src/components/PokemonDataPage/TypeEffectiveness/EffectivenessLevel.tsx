import TypeEffectivenessCss from "../../../assets/scss/PokemonDataScreen/PokemonDataTypeEffectiveness.module.scss";
import { convertFirstCharacterUpper } from "../../Utilities/UtilityFunctions";

interface Props {
  effectivenessLevel: string;
  typeList: Array<string>;
  primaryType: string;
}

function EffectivenessLevel(props: Props) {
  return props.typeList.length === 0 ? null : (
    <div
      className={`${TypeEffectivenessCss["effectiveness-level"]} ${TypeEffectivenessCss["row"]} border-${props.primaryType}-light`}
    >
      <div
        className={`${TypeEffectivenessCss["effectiveness-label"]} bg-${props.primaryType}-light`}
      >
        {props.effectivenessLevel}:
      </div>
      <div
        className={`${TypeEffectivenessCss["row"]} ${TypeEffectivenessCss["type-list"]}`}
      >
        {props.typeList.map((type) => {
          return (
            <div
              key={type}
              className={`bg-${type}-light ${TypeEffectivenessCss["type"]}`}
            >
              {convertFirstCharacterUpper(type)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EffectivenessLevel;
