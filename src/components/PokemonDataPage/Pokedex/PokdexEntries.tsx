import { useContext } from "react";
import PokedexEntriesCss from "../../../assets/scss/PokemonDataScreen/PokemonDataPokedexEntries.module.scss";
import GenerationPokedex from "./GenerationPokedex";
import { PokemonDataContext } from "../PokemonDataPage";

function PokedexEntries() {
  const { gamePokedexEntry, pokemonRegionNumber, pokemonType } =
    useContext(PokemonDataContext);

  // Generation 1
  const redEntry: string = gamePokedexEntry.red;
  const blueEntry: string = gamePokedexEntry.blue;
  const yellowEntry: string = gamePokedexEntry.yellow;

  // Generation 2
  const goldEntry: string = gamePokedexEntry.gold;
  const silverEntry: string = gamePokedexEntry.silver;
  const crystalEntry: string = gamePokedexEntry.crystal;

  // Generation 3
  const rubyEntry: string = gamePokedexEntry.ruby;
  const sapphireEntry: string = gamePokedexEntry.sapphire;
  const emeraldEntry: string = gamePokedexEntry.emerald;
  const fireredEntry: string = gamePokedexEntry.firered;
  const leafgreenEntry: string = gamePokedexEntry.leafgreen;

  // Generation 4
  const diamondEntry: string = gamePokedexEntry.diamond;
  const pearlEntry: string = gamePokedexEntry.pearl;
  const platinumEntry: string = gamePokedexEntry.platinum;
  const heartgoldEntry: string = gamePokedexEntry.heartgold;
  const soulsilverEntry: string = gamePokedexEntry.soulsilver;

  // Generation 5
  const blackEntry: string = gamePokedexEntry.black;
  const whiteEntry: string = gamePokedexEntry.white;

  // Generation 6
  const xEntry: string = gamePokedexEntry.x;
  const yEntry: string = gamePokedexEntry.y;
  const omegaRubyEntry: string = gamePokedexEntry?.["omega-ruby"];
  const alphaSapphireEntry: string = gamePokedexEntry?.["alpha-sapphire"];

  // Generation 7
  const sunEntry: string = gamePokedexEntry.sun;
  const moonEntry: string = gamePokedexEntry.moon;
  const ultraSunEntry: string = gamePokedexEntry?.["ultra-sun"];
  const ultraMoonEntry: string = gamePokedexEntry?.["ultra-moon"];

  // Generation 8
  const swordEntry: string = gamePokedexEntry.sword;
  const shieldEntry: string = gamePokedexEntry.shield;
  const letsGoPikachuEntry: string = gamePokedexEntry?.["lets-go-pikachu"];
  const letsGoEveeEntry: string = gamePokedexEntry?.["lets-go-eevee"];
  const legendsArceusEntry: string = gamePokedexEntry?.["legends-arceus"];

  // Generation 9
  const scarletEntry: string = gamePokedexEntry.scarlet;
  const violetEntry: string = gamePokedexEntry.violet;

  return (
    <>
      <div
        id={PokedexEntriesCss["pokedexSection"]}
        className={`${PokedexEntriesCss["column"]} bg-${pokemonType[0]}-dark border-${pokemonType[0]}-dark`}
      >
        {1 >= pokemonRegionNumber ? (
          <GenerationPokedex
            pokedexEntries={[redEntry, blueEntry, yellowEntry]}
            gameTitles={["red", "blue", "yellow"]}
            generationNumber="1"
          ></GenerationPokedex>
        ) : null}
        {2 >= pokemonRegionNumber ? (
          <GenerationPokedex
            pokedexEntries={[goldEntry, silverEntry, crystalEntry]}
            gameTitles={["gold", "silver", "crystal"]}
            generationNumber="2"
          ></GenerationPokedex>
        ) : null}

        {3 >= pokemonRegionNumber ? (
          <GenerationPokedex
            pokedexEntries={[
              rubyEntry,
              sapphireEntry,
              emeraldEntry,
              fireredEntry,
              leafgreenEntry,
            ]}
            gameTitles={["ruby", "sapphire", "emerald", "fireRed", "leafGreen"]}
            generationNumber={"3"}
          ></GenerationPokedex>
        ) : null}

        {4 >= pokemonRegionNumber ? (
          <GenerationPokedex
            pokedexEntries={[
              diamondEntry,
              pearlEntry,
              platinumEntry,
              heartgoldEntry,
              soulsilverEntry,
            ]}
            gameTitles={[
              "diamond",
              "pearl",
              "platinum",
              "heartGold",
              "soulSilver",
            ]}
            generationNumber={"4"}
          ></GenerationPokedex>
        ) : null}

        {5 >= pokemonRegionNumber ? (
          <GenerationPokedex
            pokedexEntries={[blackEntry, whiteEntry]}
            gameTitles={["black", "white"]}
            generationNumber={"5"}
          ></GenerationPokedex>
        ) : null}

        {6 >= pokemonRegionNumber ? (
          <GenerationPokedex
            pokedexEntries={[
              xEntry,
              yEntry,
              omegaRubyEntry,
              alphaSapphireEntry,
            ]}
            gameTitles={["x", "y", "omegaRuby", "alphaSapphire"]}
            generationNumber={"6"}
          ></GenerationPokedex>
        ) : null}

        {7 >= pokemonRegionNumber ? (
          <GenerationPokedex
            pokedexEntries={[
              sunEntry,
              moonEntry,
              ultraSunEntry,
              ultraMoonEntry,
            ]}
            gameTitles={["sun", "moon", "ultraSun", "ultraMoon"]}
            generationNumber={"7"}
          ></GenerationPokedex>
        ) : null}

        {8 >= pokemonRegionNumber ? (
          <GenerationPokedex
            pokedexEntries={[
              swordEntry,
              shieldEntry,
              letsGoPikachuEntry,
              letsGoEveeEntry,
              legendsArceusEntry,
            ]}
            gameTitles={[
              "sword",
              "shield",
              "letsGoPikachu",
              "letsGoEevee",
              "legendsArceus",
            ]}
            generationNumber={"8"}
          ></GenerationPokedex>
        ) : null}

        {9 >= pokemonRegionNumber ? (
          <GenerationPokedex
            pokedexEntries={[scarletEntry, violetEntry]}
            gameTitles={["scarlet", "violet"]}
            generationNumber={"9"}
          ></GenerationPokedex>
        ) : null}
      </div>
    </>
  );
}

export default PokedexEntries;
