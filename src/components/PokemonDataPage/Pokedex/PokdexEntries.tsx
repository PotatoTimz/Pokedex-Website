import PokedexEntriesClasses from "../../../assets/scss/PokemonDataScreen/PokemonDataPokedexEntries.module.scss";
import { PokemonDataPageInfo } from "../../Interface/PokemonDataPageInterface";
import GenerationPokedex from "./GenerationPokedex";

interface Props {
  pokemonData: PokemonDataPageInfo;
}

function PokedexEntries(props: Props) {
  const generationNumber = props.pokemonData.pokemonRegionNumber;
  const primaryType = props.pokemonData.pokemonType[0];

  // Generation 1
  const redEntry: string = props.pokemonData?.gamePokedexEntry.red;
  const blueEntry: string = props.pokemonData?.gamePokedexEntry.blue;
  const yellowEntry: string = props.pokemonData?.gamePokedexEntry.yellow;

  // Generation 2
  const goldEntry: string = props.pokemonData?.gamePokedexEntry.gold;
  const silverEntry: string = props.pokemonData?.gamePokedexEntry.silver;
  const crystalEntry: string = props.pokemonData?.gamePokedexEntry.crystal;

  // Generation 3
  const rubyEntry: string = props.pokemonData?.gamePokedexEntry.ruby;
  const sapphireEntry: string = props.pokemonData?.gamePokedexEntry.sapphire;
  const emeraldEntry: string = props.pokemonData?.gamePokedexEntry.emerald;
  const fireredEntry: string = props.pokemonData?.gamePokedexEntry.firered;
  const leafgreenEntry: string = props.pokemonData?.gamePokedexEntry.leafgreen;

  // Generation 4
  const diamondEntry: string = props.pokemonData?.gamePokedexEntry.diamond;
  const pearlEntry: string = props.pokemonData?.gamePokedexEntry.pearl;
  const platinumEntry: string = props.pokemonData?.gamePokedexEntry.platinum;
  const heartgoldEntry: string = props.pokemonData?.gamePokedexEntry.heartgold;
  const soulsilverEntry: string =
    props.pokemonData?.gamePokedexEntry.soulsilver;

  // Generation 5
  const blackEntry: string = props.pokemonData?.gamePokedexEntry.black;
  const whiteEntry: string = props.pokemonData?.gamePokedexEntry.white;

  // Generation 6
  const xEntry: string = props.pokemonData?.gamePokedexEntry.x;
  const yEntry: string = props.pokemonData?.gamePokedexEntry.y;
  const omegaRubyEntry: string =
    props.pokemonData?.gamePokedexEntry?.["omega-ruby"];
  const alphaSapphireEntry: string =
    props.pokemonData?.gamePokedexEntry?.["alpha-sapphire"];

  // Generation 7
  const sunEntry: string = props.pokemonData?.gamePokedexEntry.sun;
  const moonEntry: string = props.pokemonData?.gamePokedexEntry.moon;
  const ultraSunEntry: string =
    props.pokemonData?.gamePokedexEntry?.["ultra-sun"];
  const ultraMoonEntry: string =
    props.pokemonData?.gamePokedexEntry?.["ultra-moon"];

  // Generation 8
  const swordEntry: string = props.pokemonData?.gamePokedexEntry.sword;
  const shieldEntry: string = props.pokemonData?.gamePokedexEntry.shield;
  const letsGoPikachuEntry: string =
    props.pokemonData?.gamePokedexEntry?.["lets-go-pikachu"];
  const letsGoEveeEntry: string =
    props.pokemonData?.gamePokedexEntry?.["lets-go-eevee"];
  const legendsArceusEntry: string =
    props.pokemonData?.gamePokedexEntry?.["legends-arceus"];

  // Generation 9
  const scarletEntry: string = props.pokemonData?.gamePokedexEntry.scarlet;
  const violetEntry: string = props.pokemonData?.gamePokedexEntry.violet;

  return (
    <>
      <div
        id={PokedexEntriesClasses["pokedexSection"]}
        className={`${PokedexEntriesClasses["column"]} bg-${primaryType}-dark border-${primaryType}-dark`}
      >
        {1 >= generationNumber ? (
          <GenerationPokedex
            pokedexEntries={[redEntry, blueEntry, yellowEntry]}
            gameTitles={["red", "blue", "yellow"]}
            generationNumber="1"
            primaryType={primaryType}
          ></GenerationPokedex>
        ) : null}
        {2 >= generationNumber ? (
          <GenerationPokedex
            pokedexEntries={[goldEntry, silverEntry, crystalEntry]}
            gameTitles={["gold", "silver", "crystal"]}
            generationNumber="2"
            primaryType={primaryType}
          ></GenerationPokedex>
        ) : null}

        {3 >= generationNumber ? (
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
            primaryType={primaryType}
          ></GenerationPokedex>
        ) : null}

        {4 >= generationNumber ? (
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
            primaryType={primaryType}
          ></GenerationPokedex>
        ) : null}

        {5 >= generationNumber ? (
          <GenerationPokedex
            pokedexEntries={[blackEntry, whiteEntry]}
            gameTitles={["black", "white"]}
            generationNumber={"5"}
            primaryType={primaryType}
          ></GenerationPokedex>
        ) : null}

        {6 >= generationNumber ? (
          <GenerationPokedex
            pokedexEntries={[
              xEntry,
              yEntry,
              omegaRubyEntry,
              alphaSapphireEntry,
            ]}
            gameTitles={["x", "y", "omegaRuby", "alphaSapphire"]}
            generationNumber={"6"}
            primaryType={primaryType}
          ></GenerationPokedex>
        ) : null}

        {7 >= generationNumber ? (
          <GenerationPokedex
            pokedexEntries={[
              sunEntry,
              moonEntry,
              ultraSunEntry,
              ultraMoonEntry,
            ]}
            gameTitles={["sun", "moon", "ultraSun", "ultraMoon"]}
            generationNumber={"7"}
            primaryType={primaryType}
          ></GenerationPokedex>
        ) : null}

        {8 >= generationNumber ? (
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
            primaryType={primaryType}
          ></GenerationPokedex>
        ) : null}

        {9 >= generationNumber ? (
          <GenerationPokedex
            pokedexEntries={[scarletEntry, violetEntry]}
            gameTitles={["scarlet", "violet"]}
            generationNumber={"9"}
            primaryType={primaryType}
          ></GenerationPokedex>
        ) : null}
      </div>
    </>
  );
}

export default PokedexEntries;
