import { AbilityInfo } from "../../Interface/PokemonDataPageInterface";
import GeneralInfoCss from "../../../assets/scss/PokemonDataScreen/PokemonDataGeneralInfo.module.scss";
import { convertFirstCharacterUpper } from "../../Utilities/UtilityFunctions";
import { useContext, useState } from "react";
import { PokemonDataContext } from "../PokemonDataPage";

function GeneralInfoCard() {
  const {
    pokemonType,
    pokemonName,
    spriteData,
    pokemonID,
    abilityData,
    pokemonMiscData,
  } = useContext(PokemonDataContext);
  const [toggleShiny, setToggleShiny] = useState<boolean>(false);

  const primaryType: string = pokemonType[0];
  const name: string = pokemonName;
  const sprite: string = toggleShiny
    ? spriteData["official-artwork-shiny"]
    : spriteData["official-artwork"];
  const id: string = pokemonID;
  const abilities: Array<AbilityInfo> = abilityData;
  const eggGroups: Array<string> = pokemonMiscData["egg-groups"];
  const baseHappiness: number = pokemonMiscData["base-happiness"];
  const growthRate: string = pokemonMiscData["growth-rate"];
  const height: number = pokemonMiscData.height;
  const weight: number = pokemonMiscData.weight;

  return (
    <div
      id={`${GeneralInfoCss["general-info"]}`}
      className={`${GeneralInfoCss["column"]} bg-${primaryType}-dark`}
    >
      {/* Name and ID */}
      <div
        id={GeneralInfoCss["name-and-info"]}
        className={`border-${primaryType}-light ${GeneralInfoCss["large-container"]}`}
      >
        <div
          id={GeneralInfoCss["name-tag"]}
          className={`${GeneralInfoCss["row"]}`}
        >
          <h1>{name}</h1>
          <h1>#{id}</h1>
        </div>
      </div>

      {/* image */}
      <div id={GeneralInfoCss["sprite-section"]}>
        <div
          id={GeneralInfoCss["sprite-button-hud"]}
          className={`bg-${primaryType}-light`}
        >
          <button
            className={`bg-${primaryType}-light`}
            onClick={() => setToggleShiny(false)}
          >
            Regular
          </button>
          <button
            className={`bg-${primaryType}-light`}
            onClick={() => setToggleShiny(true)}
          >
            Shiny
          </button>
        </div>
        <div
          id={`${GeneralInfoCss["pokemon-portrait"]}`}
          className={`border-${primaryType}-light`}
        >
          <img src={sprite} alt={pokemonName}></img>
        </div>
      </div>

      {/* Types */}
      <div
        id={`${GeneralInfoCss["pokemon-typings"]}`}
        className={`border-${primaryType}-light ${GeneralInfoCss["large-container"]}`}
      >
        <h3>Types</h3>
        <div className={GeneralInfoCss["row"]}>
          {pokemonType.map((typing) => {
            return (
              <div
                key={`${typing}`}
                className={`${`bg-${typing}-light`} ${
                  GeneralInfoCss["pokemon-type"]
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
        id={`${GeneralInfoCss["pokemon-abilities"]}`}
        className={`border-${primaryType}-light ${GeneralInfoCss["large-container"]}`}
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
        id={`${GeneralInfoCss["pokemon-egg-family"]}`}
        className={`border-${primaryType}-light ${GeneralInfoCss["large-container"]}`}
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
      <div className={`${GeneralInfoCss["general-grid"]}`}>
        <div
          className={`border-${primaryType}-light ${GeneralInfoCss["small-container"]}`}
        >
          <h3>Base Happiness:</h3>
          <p>{baseHappiness}</p>
        </div>
        <div
          className={`border-${primaryType}-light ${GeneralInfoCss["small-container"]}`}
        >
          <h3>Growth Rate:</h3>
          <p>{growthRate}</p>
        </div>
        <div
          className={`border-${primaryType}-light ${GeneralInfoCss["small-container"]}`}
        >
          <h3>Height:</h3>
          <p>{height}</p>
        </div>
        <div
          className={`border-${primaryType}-light ${GeneralInfoCss["small-container"]}`}
        >
          <h3>Weight:</h3>
          <p>{weight}</p>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfoCard;
