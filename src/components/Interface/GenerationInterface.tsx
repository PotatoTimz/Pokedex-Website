interface RegionInfo {
  region: string;
  "generation-number": number;
  "mascot-sprites": MascotSprites;
}

interface Regions {
  "generation-i": RegionInfo;
  "generation-ii": RegionInfo;
  "generation-iii": RegionInfo;
  "generation-iv": RegionInfo;
  "generation-v": RegionInfo;
  "generation-vi": RegionInfo;
  "generation-vii": RegionInfo;
  "generation-viii": RegionInfo;
  "generation-ix": RegionInfo;
}

interface MascotSprites {
  "mascot-1": string;
  "mascot-2": string;
}

export const REGIONS: Regions = {
  "generation-i": {
    region: "Kanto",
    "generation-number": 1,
    "mascot-sprites": {
      "mascot-1":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
      "mascot-2":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
    },
  },
  "generation-ii": {
    region: "Johto",
    "generation-number": 2,
    "mascot-sprites": {
      "mascot-1":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/250.png",
      "mascot-2":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png",
    },
  },
  "generation-iii": {
    region: "Hoenn",
    "generation-number": 3,
    "mascot-sprites": {
      "mascot-1":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/383.png",
      "mascot-2":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/382.png",
    },
  },
  "generation-iv": {
    region: "Sinnoh",
    "generation-number": 4,
    "mascot-sprites": {
      "mascot-1":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/484.png",
      "mascot-2":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/483.png",
    },
  },
  "generation-v": {
    region: "Unova",
    "generation-number": 5,
    "mascot-sprites": {
      "mascot-1":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/644.png",
      "mascot-2":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/643.png",
    },
  },
  "generation-vi": {
    region: "Kalos",
    "generation-number": 6,
    "mascot-sprites": {
      "mascot-1":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/717.png",
      "mascot-2":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/716.png",
    },
  },
  "generation-vii": {
    region: "Aloa",
    "generation-number": 7,
    "mascot-sprites": {
      "mascot-1":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/791.png",
      "mascot-2":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/792.png",
    },
  },
  "generation-viii": {
    region: "Galar",
    "generation-number": 8,
    "mascot-sprites": {
      "mascot-1":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png",
      "mascot-2":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/889.png",
    },
  },
  "generation-ix": {
    region: "Hisui",
    "generation-number": 9,
    "mascot-sprites": {
      "mascot-1":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1007.png",
      "mascot-2":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1008.png",
    },
  },
};

export const generationInfo = (gen: string) => {
  switch (gen) {
    case "generation-i":
      return REGIONS["generation-i"];
    case "generation-ii":
      return REGIONS["generation-ii"];
    case "generation-iii":
      return REGIONS["generation-iii"];
    case "generation-iv":
      return REGIONS["generation-iv"];
    case "generation-v":
      return REGIONS["generation-v"];
    case "generation-vi":
      return REGIONS["generation-vi"];
    case "generation-vii":
      return REGIONS["generation-vii"];
    case "generation-viii":
      return REGIONS["generation-viii"];
    case "generation-ix":
      return REGIONS["generation-ix"];
    default:
      return {
        region: "uknown",
        "generation-number": -1,
        "mascot-sprites": {
          "mascot-1": "",
          "mascot-2": "",
        },
      };
  }
};
