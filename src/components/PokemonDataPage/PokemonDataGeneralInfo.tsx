import { AbilityInfo, SpriteData } from "../Interface/PokemonDataPageInterface";
import GeneralInfo from "../../assets/scss/PokemonDataScreen/PokemonDataGeneralInfo.module.scss";
import { convertFirstCharacterUpper } from "../Utilities/UtilityFunctions";
interface Props {
  types: Array<string>;
  name: string;
  sprites: SpriteData;
  id: string;
  abilities: Array<AbilityInfo>;
  eggGroups: Array<string>;
  baseHappiness: number;
  growthRate: string;
  height: number;
  weight: number;
}

function PokemonDataGeneralInfo(props: Props) {
  return (
    <div
      id={`${GeneralInfo["generalInfo"]}`}
      className={`${GeneralInfo["column"]} bg-${props.types[0]}-dark`}
    >
      {/* Name and ID */}
      <div
        id={GeneralInfo["nameAndInfo"]}
        className={`border-${props.types[0]}-light ${GeneralInfo["infoCardLarge"]}`}
      >
        <div id={GeneralInfo["nameTag"]} className={`${GeneralInfo["row"]}`}>
          <h1>{props.name}</h1>
          <h1>#{props.id}</h1>
        </div>
      </div>

      {/* image */}
      <div
        id={`${GeneralInfo["pokemonPortrait"]}`}
        className={`border-${props.types[0]}-light ${GeneralInfo["infoCardLarge"]}`}
      >
        <img src={props.sprites["official-artwork"]}></img>
      </div>

      {/* Types */}
      <div
        id={`${GeneralInfo["pokemonTypings"]}`}
        className={`border-${props.types[0]}-light ${GeneralInfo["infoCardLarge"]}`}
      >
        <h3>Types</h3>
        <div className={GeneralInfo["row"]}>
          {props.types.map((typing) => {
            return (
              <div
                key={`${typing}`}
                className={`${`bg-${typing}-light`} ${
                  GeneralInfo["pokemonType"]
                }`}
              >
                {convertFirstCharacterUpper(typing)}
              </div>
            );
          })}
        </div>
      </div>

      {/* Abilities */}
      <div
        id={`${GeneralInfo["pokemonTypings"]}`}
        className={`border-${props.types[0]}-light ${GeneralInfo["infoCardLarge"]}`}
      >
        <h3>Abilities</h3>
        <div className={GeneralInfo["row"]}>
          {props.abilities.map((ability) => {
            return (
              <div className={GeneralInfo["column"]}>
                <p key={`${ability.name}`} className={``}>
                  {ability.name}
                </p>
                {ability.hidden ? <i>(Hidden Ability)</i> : <></>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Egg Info */}
      <div
        id={`${GeneralInfo["pokemonTypings"]}`}
        className={`border-${props.types[0]}-light ${GeneralInfo["infoCardLarge"]}`}
      >
        <h3>Egg Famalies</h3>
        <div className={GeneralInfo["row"]}>
          {props.eggGroups.map((eggGroup) => {
            return (
              <p key={`${eggGroup}`} className={``}>
                {eggGroup}
              </p>
            );
          })}
        </div>
      </div>

      {/* Misc Data */}
      <div className={`${GeneralInfo["row"]}`}>
        <div
          className={`border-${props.types[0]}-light ${GeneralInfo["infoCardSmall"]}`}
        >
          <h3>Base Happiness:</h3>
          <p>{props.baseHappiness}</p>
        </div>
        <div
          className={`border-${props.types[0]}-light ${GeneralInfo["infoCardSmall"]}`}
        >
          <h3>Growth Rate:</h3>
          <p>{props.growthRate}</p>
        </div>
      </div>

      <div className={`${GeneralInfo["row"]}`}>
        <div
          className={`border-${props.types[0]}-light ${GeneralInfo["infoCardSmall"]}`}
        >
          <h3>Height:</h3>
          <p>{props.height}</p>
        </div>
        <div
          className={`border-${props.types[0]}-light ${GeneralInfo["infoCardSmall"]}`}
        >
          <h3>Weight:</h3>
          <p>{props.weight}</p>
        </div>
      </div>
    </div>
  );
}

export default PokemonDataGeneralInfo;
("");
