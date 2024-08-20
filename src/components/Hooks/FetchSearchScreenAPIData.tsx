import { SearchQueryInfo } from "../Interface/ApiInterfaces/SearchResultsInterface";
import { PokemonGeneralData } from "../Interface/ApiInterfaces/PokemonInterface";
import { PokedexData } from "../Interface/ApiInterfaces/PokemonSpeciesInterface";
import { SearchCard } from "../Interface/SearchCardInterface";
import { generationInfo } from "../Interface/GenerationInterface";
import { convertFirstCharacterUpper } from "../Utilities/UtilityFunctions";

const pokemonSearchQueryURL =
  "https://pokeapi.co/api/v2/pokemon?limit=300&offset=0";
const pokemonInfoURL = "https://pokeapi.co/api/v2/pokemon/";
const pokemonPokedexURL = "https://pokeapi.co/api/v2/pokemon-species/";

const fetchSearchResults = async (): Promise<SearchQueryInfo> => {
  const response = await fetch(pokemonSearchQueryURL);
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

export { fetchSearchResults, fetchPokemonSearchData };
