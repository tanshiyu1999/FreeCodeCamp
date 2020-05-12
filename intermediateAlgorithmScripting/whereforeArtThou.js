function whatIsInAName(collection, source) {

  let srcKey = Object.keys(source); // returns an array of srcKeys

  let final = collection.filter(function(obj) {
    for (let i = 0; i < srcKey.length; i++) {
      if ( !obj.hasOwnProperty(srcKey[i]) || obj[srcKey[i]] !== source[srcKey[i]] ) { //either one is true, will return false
        return false;
      }
    }
    return true;

  });
  console.log(final);
  return final

  }


//whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
//whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })

/*Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou */

/* really hard, can come back and try again, referenced the answer key, it is understood*/
