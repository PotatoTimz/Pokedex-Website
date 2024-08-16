interface RegionInfo {
  region: string;
  "generation-number": number;
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

export const REGIONS: Regions = {
  "generation-i": {
    region: "Kanto",
    "generation-number": 1,
  },
  "generation-ii": {
    region: "Johto",
    "generation-number": 2,
  },
  "generation-iii": {
    region: "Hoenn",
    "generation-number": 3,
  },
  "generation-iv": {
    region: "Sinnoh",
    "generation-number": 4,
  },
  "generation-v": {
    region: "Unova",
    "generation-number": 5,
  },
  "generation-vi": {
    region: "Kalos",
    "generation-number": 6,
  },
  "generation-vii": {
    region: "Aloa",
    "generation-number": 7,
  },
  "generation-viii": {
    region: "Galar",
    "generation-number": 8,
  },
  "generation-ix": {
    region: "Hisui",
    "generation-number": 9,
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
      };
  }
};
