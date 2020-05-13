function fearNotLetter(str) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz"
  let startingIndex = alphabets.indexOf(str[0]);
  let loop = str.length + startingIndex;
  var j = 0;
  for (let i = startingIndex; i < loop; i++) {
    if (str[j] !== alphabets[i]) {
      return alphabets[i];
    }
    j++;
  }
  return undefined;
}

fearNotLetter("abce");

/* Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters */
