function binaryAgent(str) {
  var newBin = str.split(" ");
  var binCode = [];

  for (let i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)));
  }
  str = binCode.join('');

  console.log(str)
  return str;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


/* learn UTF 16, what parseInt does, apparently it converts a string of numbers to a integer, and the 2 at the base means convert from base 2 to base 10(integers)
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents */
