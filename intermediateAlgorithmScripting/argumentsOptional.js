function addTogether(...args) {

  if (!args.every( n => typeof n === 'number')) {
    console.log("undefined")
    return undefined;
  } else if (args.length == 1) {
    return function(b) {
      if (typeof b === 'number') {
        args.push(b);
        console.log(args.reduce((a,b) => a + b));
        return args.reduce( (a,b) => a + b,0);
      } else {
        return undefined
      }

    }
  } else if (args.length == 2) {
    console.log(args.reduce((a,b) => a + b));
    return args.reduce( (a,b) => a + b,0);
  }
}

addTogether(2, "3")

/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional*/
