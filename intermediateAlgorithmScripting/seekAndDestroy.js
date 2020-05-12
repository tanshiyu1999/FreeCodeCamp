function destroyer(arr, ...args) {
  let number = [...arr];
  let found = [];


  for (let i = 0; i < number.length; i++ ) {
    if (args.indexOf(arr[i]) == -1) {
      found.push(arr.slice(i, i+1));
    }
  }
  let final = []

  for (let i = 0; i < found.length; i++) {
    final.push(found[i][0])
  }

  console.log(final)
  return final
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
Note
You have to use the arguments object.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy */
