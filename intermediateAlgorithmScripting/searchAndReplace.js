function myReplace(str, before, after) {
  if(before.match(/[A-Z]/)) {
    let afterArr = after.split('');
    let firstLetter = afterArr.splice(0,1);
    let capital = firstLetter[0].toUpperCase();
    after = capital + afterArr.join('');
  }

  console.log(str.replace(before,after))
  return str.replace(before, after)
}


//myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("Let us go to the store", "store", "mall")


/*Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace */
