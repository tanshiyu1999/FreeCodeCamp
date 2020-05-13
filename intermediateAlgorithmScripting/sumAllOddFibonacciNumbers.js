function sumFibs(num) {
  // k is previous previous number
  // j is previous number
  // i is current number
  var k = 0;
  var j = 1;
  var i = 1;
  var sum = 1;
  for(;i <= num;) {
    i = j + k;
    k = j;
    j = i;
    if (i % 2 == 1 && i <= num) {
      sum += i;
    } else {
      continue;
    }
  }
  console.log(sum)
  return num;
}

sumFibs(1000);




/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers */
