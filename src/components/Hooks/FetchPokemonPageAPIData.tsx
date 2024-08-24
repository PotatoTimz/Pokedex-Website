import { PokedexData } from "../Interface/ApiInterfaces/PokemonSpeciesInterface";
import { PokemonGeneralData } from "../Interface/ApiInterfaces/PokemonInterface";
import { generationInfo } from "../Interface/GenerationInterface";
import {
  PokemonDataPageInfo,
  SpriteData,
  defaultSpriteData,
  MoveList,
  BaseStats,
  defaultBaseStats,
  GamePokedexEntry,
  AbilityInfo,
  MiscData,
  defaultMiscData,
  BannerInfo,
} from "../Interface/PokemonDataPageInterface";
import { convertFirstCharacterUpper } from "../Utilities/UtilityFunctions";
import {
  getSpriteData,
  getMoveData,
  getBaseStats,
  getPokedexEntries,
  getPokemonAbilities,
  getMiscData,
  getVariants,
} from "./FetchApiDataHelpers";

const pokemonInfoURL = "https://pokeapi.co/api/v2/pokemon/";
const pokemonPokedexURL = "https://pokeapi.co/api/v2/pokemon-species/";

export const fetchPokemonDataPageInfo = async (
  id: string
): Promise<PokemonDataPageInfo> => {
  let pokemonID: string = id;
  let pokemonName: string = "";
  let pokemonType: Array<string> = [];
  let spriteData: SpriteData = defaultSpriteData;
  let moveData: MoveList = {
    movesLevelUp: [],
    movesTutor: [],
    movesTM: [],
    movesEgg: [],
    movesOther: [],
  };
  let baseStatData: BaseStats = defaultBaseStats;
  let pokemonEvolutionLineUrl: string = "";
  let abilityData: Array<AbilityInfo> = [];
  let isVariant: boolean = false;

  let pokemonRegionName: string = "";
  let pokemonRegionNumber: number = 0;
  let gamePokedexEntry: GamePokedexEntry = {};
  let pokemonMiscData: MiscData = defaultMiscData;
  let pokemonVariants: Array<string> = [];

  const response = await fetch(pokemonInfoURL.concat(id.toString()));
  const responseJson: PokemonGeneralData = await response.json();
  pokemonName = convertFirstCharacterUpper(responseJson.name);
  responseJson.types.forEach((typing) => {
    pokemonType.push(typing.type.name);
  });
  spriteData = getSpriteData(responseJson.sprites);
  moveData = getMoveData(responseJson.moves);
  baseStatData = getBaseStats(responseJson.stats);
  abilityData = getPokemonAbilities(responseJson.abilities);

  if (parseInt(id) < 1025) {
    const response2 = await fetch(pokemonPokedexURL.concat(id.toString()));
    const responseJson2: PokedexData = await response2.json();
    gamePokedexEntry = getPokedexEntries(responseJson2.flavor_text_entries);
    const genInfo = generationInfo(responseJson2.generation.name);
    pokemonRegionName = genInfo.region;
    pokemonRegionNumber = genInfo["generation-number"];
    pokemonEvolutionLineUrl = responseJson2.evolution_chain.url;
    pokemonMiscData = getMiscData(responseJson, responseJson2);
    pokemonVariants = getVariants(responseJson2);
  } else {
    isVariant = true;
  }

  return {
    pokemonID,
    pokemonName,
    pokemonType,
    abilityData,
    pokemonRegionName,
    pokemonRegionNumber,
    spriteData,
    moveData,
    baseStatData,
    gamePokedexEntry,
    pokemonEvolutionLineUrl,
    isVariant,
    pokemonMiscData,
    pokemonVariants,
  };
};

export const fetchPokemonBannerData = async (
  id: number
): Promise<BannerInfo | undefined> => {
  if (id <= 0 || id > 1025) {
    return undefined;
  }

  let pokemonIcon: string = "";
  let pokemonName: string = "";
  let pokemonId: number = id;

  const response = await fetch(pokemonInfoURL.concat(id.toString()));
  const responseJson: PokemonGeneralData = await response.json();

  pokemonIcon = responseJson.sprites.front_default;
  pokemonName = responseJson.name;

  return { pokemonIcon, pokemonName, pokemonId };
};
