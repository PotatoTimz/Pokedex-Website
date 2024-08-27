export const convertFirstCharacterUpper = (name: string) => {
  const firstCharacter = name.charAt(0).toUpperCase();
  return firstCharacter.concat(name.substring(1, name.length));
};

export const capitalizeMoveName = (name: string): string => {
  let convertedName = "" + name.charAt(0).toUpperCase();

  for (let i = 1; i < name.length; i++) {
    if (name.charAt(i) === "-") {
      convertedName = convertedName + " ";
    } else if (convertedName.charAt(i - 1) === " ") {
      convertedName = convertedName + name.charAt(i).toUpperCase();
    } else {
      convertedName = convertedName + name.charAt(i);
    }
  }

  return convertedName;
};
