export const getLocations = () => {
  return [
    { title: "work", location: "1455 Market St", icon: "home" },
    { title: "home", location: "903 Sunrose Terr", icon: "office" },
  ];
};

export const getSuggestions = () => {
  return [
    { title: "ride", imgSrc: "car" },
    { title: "reserve", imgSrc: "calendar" },
    { title: "package", imgSrc: "package" },
    { title: "rent", imgSrc: "bike" },
  ];
};

export type LocationList = ReturnType<typeof getLocations>;
export type SuggestionList = ReturnType<typeof getSuggestions>;
