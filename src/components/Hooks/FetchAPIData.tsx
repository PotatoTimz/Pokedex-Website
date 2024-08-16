import { SearchQueryInfo } from "../Interface/ApiInterfaces/SearchResultsInterface";
import { PokemonGeneralData } from "../Interface/ApiInterfaces/PokemonInterface";
import { PokedexData } from "../Interface/PokedexEntryInterface";
import { SearchCard } from "../Interface/SearchCardInterface";
import { generationInfo } from "../Interface/GenerationInterface";

const testSearchURL = "https://pokeapi.co/api/v2/pokemon?limit=300&offset=0";
const testSearchURL2 = "https://pokeapi.co/api/v2/pokemon?limit=150&offset=150";
const pokemonInfoURL = "https://pokeapi.co/api/v2/pokemon/";
const pokemonPokedexURL = "https://pokeapi.co/api/v2/pokemon-species/";

const convertFirstCharacterUpper = (name: string) => {
  const firstCharacter = name.charAt(0).toUpperCase();
  return firstCharacter.concat(name.substring(1, name.length));
};

const fetchSearchResults = async (): Promise<SearchQueryInfo> => {
  const response = await fetch(testSearchURL);
  const responseJson = await response.json();

  return responseJson;
};

const fetchSearchResults2 = async (): Promise<SearchQueryInfo> => {
  const response = await fetch(testSearchURL2);
  const responseJson = await response.json();

  return responseJson;
};

const fetchPokemonSearchData = async (id: string): Promise<SearchCard> => {
  let pokemonId: string = id;
  let pokemonName: string = "";
  let pokemonType: Array<string> = [];
  let pokemonRegionName: string = "";
  let pokemonRegionNumber: number = 0;
  let pokemonSprite: string = "";

  // Get information from "pokemon"
  const response = await fetch(pokemonInfoURL.concat(id.toString()));
  const responseJson: PokemonGeneralData = await response.json();
  pokemonName = convertFirstCharacterUpper(responseJson.name);
  pokemonSprite = responseJson.sprites.other["official-artwork"].front_default;
  responseJson.types.forEach((typing) => {
    pokemonType.push(typing.type.name);
  });

  // Get information from "pokemon-species"
  const response2 = await fetch(pokemonPokedexURL.concat(id.toString()));
  const responseJson2: PokedexData = await response2.json();
  const genInfo = generationInfo(responseJson2.generation.name);
  pokemonRegionName = genInfo.region;
  pokemonRegionNumber = genInfo["generation-number"];

  return {
    pokemonId,
    pokemonName,
    pokemonType,
    pokemonRegionName,
    pokemonRegionNumber,
    pokemonSprite,
  };
};

export { fetchSearchResults, fetchSearchResults2, fetchPokemonSearchData };
