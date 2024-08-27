import {
  EggGroup,
  FlavorTextEntry,
  PokedexData,
} from "../Interface/ApiInterfaces/PokemonSpeciesInterface";
import {
  AbilityDetail,
  BaseStatsInfo,
  MoveDetail,
  PokemonGeneralData,
  Sprites,
} from "../Interface/ApiInterfaces/PokemonInterface";
import {
  AbilityInfo,
  BaseStats,
  defaultBaseStats,
  defaultSpriteData,
  GamePokedexEntry,
  MiscData,
  MoveList,
  SpriteData,
} from "../Interface/PokemonDataPageInterface";
import { convertFirstCharacterUpper } from "../Utilities/UtilityFunctions";

export const getSpriteData = (sprites: Sprites): SpriteData => {
  let spriteData: SpriteData = defaultSpriteData;

  spriteData = {
    "official-artwork": sprites.other["official-artwork"].front_default,
    "official-artwork-shiny": sprites.other["official-artwork"].front_shiny,
    "red-blue":
      sprites.versions["generation-i"]["red-blue"].front_default !== null
        ? sprites.versions["generation-i"]["red-blue"].front_default
        : "",
    yellow:
      sprites.versions["generation-i"]["yellow"].front_default !== null
        ? sprites.versions["generation-i"]["yellow"].front_default
        : "",
    "gold-silver-crystal":
      sprites.versions["generation-ii"]["gold"].front_default !== null
        ? sprites.versions["generation-ii"]["gold"].front_default
        : "",
    "firered-leafgreen":
      sprites.versions["generation-iii"]["firered-leafgreen"].front_default !==
      null
        ? sprites.versions["generation-iii"]["firered-leafgreen"].front_default
        : "",
    "ruby-saphire-emerald":
      sprites.versions["generation-iii"]["ruby-sapphire"].front_default !== null
        ? sprites.versions["generation-iii"]["ruby-sapphire"].front_default
        : "",
    "diamond-pearl-platnuim":
      sprites.versions["generation-iv"]["diamond-pearl"].front_default !== null
        ? sprites.versions["generation-iv"]["diamond-pearl"].front_default
        : "",
    "heartgold-soulsilver":
      sprites.versions["generation-iv"]["heartgold-soulsilver"]
        .front_default !== null
        ? sprites.versions["generation-iv"]["heartgold-soulsilver"]
            .front_default
        : "",
    "black-white":
      sprites.versions["generation-v"]["black-white"].front_default !== null
        ? sprites.versions["generation-v"]["black-white"].front_default
        : "",
    "x-y-omegaruby-alphasaphire":
      sprites.versions["generation-vi"]["x-y"].front_default !== null
        ? sprites.versions["generation-vi"]["x-y"].front_default
        : "",
    "sun-moon":
      sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
        .front_default !== null
        ? sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
            .front_default
        : "",
  };

  return spriteData;
};

export const getMoveData = (moves: Array<MoveDetail>): MoveList => {
  let moveData: MoveList = {
    movesLevelUp: [],
    movesTutor: [],
    movesTM: [],
    movesEgg: [],
    movesOther: [],
  };

  moves.forEach((moveDetail: MoveDetail) => {
    if (
      moveDetail.version_group_details[0].move_learn_method.name === "level-up"
    ) {
      moveData.movesLevelUp.push({
        name: moveDetail.move.name,
        url: moveDetail.move.url,
        learn_method: "level-up",
        learn_level: moveDetail.version_group_details[0].level_learned_at,
      });
    } else if (
      moveDetail.version_group_details[0].move_learn_method.name === "tutor"
    ) {
      moveData.movesTutor.push({
        name: moveDetail.move.name,
        url: moveDetail.move.url,
        learn_method: "tutor",
      });
    } else if (
      moveDetail.version_group_details[0].move_learn_method.name === "machine"
    ) {
      moveData.movesTM.push({
        name: moveDetail.move.name,
        url: moveDetail.move.url,
        learn_method: "machine",
      });
    } else if (
      moveDetail.version_group_details[0].move_learn_method.name === "egg"
    ) {
      moveData.movesEgg.push({
        name: moveDetail.move.name,
        url: moveDetail.move.url,
        learn_method: "egg",
      });
    } else {
      moveData.movesOther.push({
        name: moveDetail.move.name,
        url: moveDetail.move.url,
        learn_method:
          moveDetail.version_group_details[0].move_learn_method.name,
      });
    }
  });

  return moveData;
};

export const getBaseStats = (baseStats: Array<BaseStatsInfo>): BaseStats => {
  let baseStatData: BaseStats = defaultBaseStats;

  baseStats.forEach((statInfo: BaseStatsInfo) => {
    const statName = statInfo.stat.name as keyof BaseStats;

    baseStatData = {
      ...baseStatData,
      [statName]: statInfo.base_stat,
    };
  });

  return baseStatData;
};

export const getPokedexEntries = (pokedexEntries: Array<FlavorTextEntry>) => {
  let pokedexEntryData: GamePokedexEntry = {};

  pokedexEntries.forEach((game: FlavorTextEntry) => {
    if (game.language.name === "en") {
      const gameName = game.version.name;
      const pokedexEntry = game.flavor_text.replace("\f", "");
      pokedexEntryData = {
        ...pokedexEntryData,
        [gameName]: pokedexEntry,
      };
    }
  });

  return pokedexEntryData;
};

export const getPokemonAbilities = (abilities: Array<AbilityDetail>) => {
  let abilityData: Array<AbilityInfo> = [];

  abilities.forEach((a: AbilityDetail) => {
    abilityData.push({
      name: convertFirstCharacterUpper(a.ability.name),
      hidden: a.is_hidden,
    });
  });

  return abilityData;
};

export const getMiscData = (
  pokeData: PokemonGeneralData,
  pokeSpeciesData: PokedexData
): MiscData => {
  let eggGroups: Array<string> = [];

  pokeSpeciesData.egg_groups.forEach((eggGroup: EggGroup) => {
    eggGroups.push(convertFirstCharacterUpper(eggGroup.name));
  });

  const miscData: MiscData = {
    "base-happiness": pokeSpeciesData.base_happiness,
    "egg-groups": eggGroups,
    "growth-rate": convertFirstCharacterUpper(pokeSpeciesData.growth_rate.name),
    height: pokeData.height,
    weight: pokeData.weight,
  };

  return miscData;
};

export const getVariants = (pokeSpeciesData: PokedexData): Array<string> => {
  let pokemonVariants: Array<string> = [];

  pokeSpeciesData.varieties.forEach((species) => {
    let url: string = species.pokemon.url;

    pokemonVariants.push(url.substring(34, url.length - 1));
  });

  return pokemonVariants;
};
