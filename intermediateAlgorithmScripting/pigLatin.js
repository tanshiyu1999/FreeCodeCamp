function translatePigLatin(str) {
  var vowels = "aeiou";
  if (vowels.includes(str[0])) {
    str = str + "way";
  } else {
    var i = 0;
    while (!vowels.includes(str[i])) {
      i++
    }
    let toBeAdded = str.substring(0,i);
    let strArr = str.split('');
    strArr.splice(0, i);
    str = strArr.join('') + toBeAdded + "ay"
  }
  console.log(str)
  return str;
}

translatePigLatin("glove");

/* Pig Latin is a way of altering English Words. The rules are as follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
- If a word begins with a vowel, just add "way" at the end.
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin */
