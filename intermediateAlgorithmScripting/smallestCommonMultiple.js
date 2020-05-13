function smallestCommons(arr) {
  let numbers = Math.abs(arr[0] - arr[1]) + 1;
  let smaller = Math.min.apply(Math, arr);
  let largest = Math.max(...arr);
  let newArr = [];
  for (let i = 0; i < numbers; i++ ) {
    newArr.push(smaller)
    smaller++;
  }

  let multiple = largest;

  while (true) {
    let frequency = 0;
    for (let i = 0; i < newArr.length; i++) {
      if (multiple % newArr[i] == 0) {
        frequency++;
      } else {
        continue;
      }
    }
    if (frequency == newArr.length) {
      console.log(multiple)
      return multiple;
    }
    multiple += largest ;
  }
}


//smallestCommons([1,12]);

smallestCommons([23, 18])

/* Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple */
