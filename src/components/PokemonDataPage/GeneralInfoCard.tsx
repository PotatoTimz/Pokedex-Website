import {
  AbilityInfo,
  PokemonDataPageInfo,
  SpriteData,
} from "../Interface/PokemonDataPageInterface";
import GeneralInfo from "../../assets/scss/PokemonDataScreen/PokemonDataGeneralInfo.module.scss";
import { convertFirstCharacterUpper } from "../Utilities/UtilityFunctions";
interface Props {
  pokemonData: PokemonDataPageInfo;
}

function GeneralInfoCard(props: Props) {
  const type: Array<string> = props.pokemonData.pokemonType;
  const primaryType: string = props.pokemonData.pokemonType[0];
  const secondaryType: string =
    props.pokemonData.pokemonType.length >= 2
      ? props.pokemonData.pokemonType[1]
      : props.pokemonData.pokemonType[0];
  const name: string = props.pokemonData.pokemonName;
  const sprites: SpriteData = props.pokemonData.spriteData;
  const id: string = props.pokemonData.pokemonID;
  const abilities: Array<AbilityInfo> = props.pokemonData.abilityData;
  const eggGroups: Array<string> =
    props.pokemonData.pokemonMiscData["egg-groups"];
  const baseHappiness: number =
    props.pokemonData.pokemonMiscData["base-happiness"];
  const growthRate: string = props.pokemonData.pokemonMiscData["growth-rate"];
  const height: number = props.pokemonData.pokemonMiscData.height;
  const weight: number = props.pokemonData.pokemonMiscData.weight;

  return (
    <div
      id={`${GeneralInfo["generalInfo"]}`}
      className={`${GeneralInfo["column"]} bg-${primaryType}-dark`}
    >
      {/* Name and ID */}
      <div
        id={GeneralInfo["nameAndInfo"]}
        className={`border-${primaryType}-light ${GeneralInfo["infoCardLarge"]}`}
      >
        <div id={GeneralInfo["nameTag"]} className={`${GeneralInfo["row"]}`}>
          <h1>{name}</h1>
          <h1>#{id}</h1>
        </div>
      </div>

      {/* image */}
      <div
        id={`${GeneralInfo["pokemonPortrait"]}`}
        className={`border-${primaryType}-light ${GeneralInfo["infoCardLarge"]}`}
      >
        <img src={sprites["official-artwork"]}></img>
      </div>

      {/* Types */}
      <div
        id={`${GeneralInfo["pokemonTypings"]}`}
        className={`border-${primaryType}-light ${GeneralInfo["infoCardLarge"]}`}
      >
        <h3>Types</h3>
        <div className={GeneralInfo["row"]}>
          {type.map((typing) => {
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
        className={`border-${primaryType}-light ${GeneralInfo["infoCardLarge"]}`}
      >
        <h3>Abilities</h3>
        <div className={GeneralInfo["row"]}>
          {abilities.map((ability) => {
            return (
              <div key={`${ability.name}`} className={GeneralInfo["column"]}>
                <p className={``}>{ability.name}</p>
                {ability.hidden ? <i>(Hidden Ability)</i> : <></>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Egg Info */}
      <div
        id={`${GeneralInfo["pokemonTypings"]}`}
        className={`border-${primaryType}-light ${GeneralInfo["infoCardLarge"]}`}
      >
        <h3>Egg Famalies</h3>
        <div className={GeneralInfo["row"]}>
          {eggGroups.map((eggGroup) => {
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
          className={`border-${primaryType}-light ${GeneralInfo["infoCardSmall"]}`}
        >
          <h3>Base Happiness:</h3>
          <p>{baseHappiness}</p>
        </div>
        <div
          className={`border-${primaryType}-light ${GeneralInfo["infoCardSmall"]}`}
        >
          <h3>Growth Rate:</h3>
          <p>{growthRate}</p>
        </div>
      </div>

      <div className={`${GeneralInfo["row"]}`}>
        <div
          className={`border-${primaryType}-light ${GeneralInfo["infoCardSmall"]}`}
        >
          <h3>Height:</h3>
          <p>{height}</p>
        </div>
        <div
          className={`border-${primaryType}-light ${GeneralInfo["infoCardSmall"]}`}
        >
          <h3>Weight:</h3>
          <p>{weight}</p>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfoCard;
("");
