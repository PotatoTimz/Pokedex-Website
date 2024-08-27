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
  MovePartialData,
  FeaturePokemon,
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
import { MoveSpecificData } from "../Interface/MoveDataInterface";
import { MoveAPIData } from "../Interface/ApiInterfaces/PokemonMoveInterface";
import {
  EvolutionChain,
  PokemonEvolution,
} from "../Interface/ApiInterfaces/PokemonEvolutionInterface";

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

export const fetchMoveData = async (
  knownMoveInfo: MovePartialData
): Promise<MoveSpecificData> => {
  let accuracy: number = 0;
  let pp: number = 0;
  let power: number = 0;
  let type: string = "";
  let damage_class: string = "";
  let name: string = knownMoveInfo.name;

  const response = await fetch(knownMoveInfo.url);
  const responseJson: MoveAPIData = await response.json();

  accuracy = responseJson.accuracy;
  pp = responseJson.pp;
  power = responseJson.power;
  type = responseJson.type.name;
  damage_class = responseJson.damage_class.name;

  return {
    accuracy,
    pp,
    power,
    type,
    damage_class,
    name,
    learn_level:
      knownMoveInfo.learn_method === "level-up"
        ? knownMoveInfo.learn_level!
        : -1,
  };
};

export const fetchEvolutionLine = async (
  url: string
): Promise<Array<Array<string>>> => {
  const response = await fetch(url);
  const responseJson: PokemonEvolution = await response.json();

  let stack: Array<EvolutionChain> = [responseJson.chain];
  let hierarchyLevels: Array<Array<string>> = [];

  while (stack.length !== 0) {
    let hierarchyLevel: Array<string> = [];
    let length = stack.length;

    for (let i = 0; i < length; i++) {
      const currentItem = stack.shift();
      hierarchyLevel.push(currentItem!.species.url);

      currentItem?.evolves_to.forEach((pokemon: EvolutionChain) => {
        stack.push(pokemon);
      });
    }
    hierarchyLevels.push(hierarchyLevel);
  }

  return hierarchyLevels;
};

export const fetchFeaturePokemon = async (
  id: string
): Promise<FeaturePokemon> => {
  let name: string = "";
  let types: Array<string> = [];
  let sprite: string = "";

  const response = await fetch(pokemonInfoURL + id);
  const responseJson: PokemonGeneralData = await response.json();
  name = responseJson.name;
  sprite = responseJson.sprites.other["official-artwork"].front_default;
  responseJson.types.forEach((typing) => {
    types.push(typing.type.name);
  });

  return { name, types, sprite, id };
};
