function fearNotLetter(str) {
  let alphabets = "abcdefghijklmnopqrstuvwxyz"
  let startingIndex = alphabets.indexOf(str[0]);
  let loop = str.length + startingIndex;
  var j = 0;
  for (let i = startingIndex; i < loop; i++) {
    if (str[j] !== alphabets[i]) {
      console.log(alphabets[i])
      break;
    }
    console.log("aye")
    j++;
  }
}

fearNotLetter("abce");
