function sumAll(arr) {
  let numbers = Math.abs(arr[0] - arr[1]) + 1;
  let larger = Math.max.apply(Math, arr);
  let final = 0;
  for (let i = 0; i < numbers; i++ ) {
    final += larger
    larger--
    console.log(final)
  }

  console.log(final)
  return final;
}

//sumAll([1, 4]);
sumAll([5, 10]) ;





/*We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10. */
