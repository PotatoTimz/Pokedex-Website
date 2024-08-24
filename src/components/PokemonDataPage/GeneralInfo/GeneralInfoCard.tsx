import {
  AbilityInfo,
  PokemonDataPageInfo,
  SpriteData,
} from "../../Interface/PokemonDataPageInterface";
import GeneralInfoCss from "../../../assets/scss/PokemonDataScreen/PokemonDataGeneralInfo.module.scss";
import { convertFirstCharacterUpper } from "../../Utilities/UtilityFunctions";
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
      id={`${GeneralInfoCss["generalInfo"]}`}
      className={`${GeneralInfoCss["column"]} bg-${primaryType}-dark`}
    >
      {/* Name and ID */}
      <div
        id={GeneralInfoCss["nameAndInfo"]}
        className={`border-${primaryType}-light ${GeneralInfoCss["infoCardLarge"]}`}
      >
        <div
          id={GeneralInfoCss["nameTag"]}
          className={`${GeneralInfoCss["row"]}`}
        >
          <h1>{name}</h1>
          <h1>#{id}</h1>
        </div>
      </div>

      {/* image */}
      <div
        id={`${GeneralInfoCss["pokemonPortrait"]}`}
        className={`border-${primaryType}-light ${GeneralInfoCss["infoCardLarge"]}`}
      >
        <img src={sprites["official-artwork"]}></img>
      </div>

      {/* Types */}
      <div
        id={`${GeneralInfoCss["pokemonTypings"]}`}
        className={`border-${primaryType}-light ${GeneralInfoCss["infoCardLarge"]}`}
      >
        <h3>Types</h3>
        <div className={GeneralInfoCss["row"]}>
          {type.map((typing) => {
            return (
              <div
                key={`${typing}`}
                className={`${`bg-${typing}-light`} ${
                  GeneralInfoCss["pokemonType"]
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
        id={`${GeneralInfoCss["pokemonTypings"]}`}
        className={`border-${primaryType}-light ${GeneralInfoCss["infoCardLarge"]}`}
      >
        <h3>Abilities</h3>
        <div className={GeneralInfoCss["row"]}>
          {abilities.map((ability) => {
            return (
              <div key={`${ability.name}`} className={GeneralInfoCss["column"]}>
                <p className={``}>{ability.name}</p>
                {ability.hidden ? <i>(Hidden Ability)</i> : <></>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Egg Info */}
      <div
        id={`${GeneralInfoCss["pokemonTypings"]}`}
        className={`border-${primaryType}-light ${GeneralInfoCss["infoCardLarge"]}`}
      >
        <h3>Egg Famalies</h3>
        <div className={GeneralInfoCss["row"]}>
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
      <div className={`${GeneralInfoCss["row"]}`}>
        <div
          className={`border-${primaryType}-light ${GeneralInfoCss["infoCardSmall"]}`}
        >
          <h3>Base Happiness:</h3>
          <p>{baseHappiness}</p>
        </div>
        <div
          className={`border-${primaryType}-light ${GeneralInfoCss["infoCardSmall"]}`}
        >
          <h3>Growth Rate:</h3>
          <p>{growthRate}</p>
        </div>
      </div>

      <div className={`${GeneralInfoCss["row"]}`}>
        <div
          className={`border-${primaryType}-light ${GeneralInfoCss["infoCardSmall"]}`}
        >
          <h3>Height:</h3>
          <p>{height}</p>
        </div>
        <div
          className={`border-${primaryType}-light ${GeneralInfoCss["infoCardSmall"]}`}
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
