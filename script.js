export function capitalize(str) {
  const firstLetter = str.charAt(0, 1).toUpperCase();
  const result = firstLetter + str.slice(1);
  return result;
}

export function reverseString(str) {
  const array = Array.from(str);
  const reverseArray = array.reverse();
  const result = reverseArray.join('');
  return result;
}

export let calculator = {
  add: function (a, b) {
    return a + b;
  },
};
