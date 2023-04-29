export function capitalize(str) {
  const firstLetter = str.charAt(0, 1).toUpperCase();
  const result = firstLetter + str.slice(1);
  return result;
}
