export const convertFirstCharacterUpper = (name: string) => {
  const firstCharacter = name.charAt(0).toUpperCase();
  return firstCharacter.concat(name.substring(1, name.length));
};
