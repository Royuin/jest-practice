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
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

export function caesarCipher(str, shift) {
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let strArray = Array.from(str);
  let shiftedArray = [];
  
  for (let i = 0; i < strArray.length; i++) {
    let letter = strArray[i];
    if (!letter.trim()) {
      shiftedArray.push(' ');
    }
    else {
   let index = alphabet.indexOf(letter);
   if ((index + shift) > (alphabet.length - 1)) {
    
    let remainder = (alphabet.length -1) - index;
    index = Math.abs(remainder - shift)
    shiftedArray.push(alphabet[index - 1]); 
  }
 else {
   shiftedArray.push(alphabet[index + shift]);
 }
    }
  }
  return shiftedArray.join('');
}
