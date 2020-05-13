function sumPrimes(num) {
  let sum = 0

  //code taken from https://stackoverflow.com/questions/22130043/trying-to-find-factors-of-a-number-in-js
  const factors = number => Array
  .from(Array(number + 1), (_, i) => i)
  .filter(i => number % i === 0)
  // Array.from function, try to understand.

  for ( let j = 2; j <= num; j++) {
    let l = factors(j).length

    if (l > 2) {
      continue; // not prime
    } else {
      console.log(j)
      sum += j;
    }
  }
  console.log(sum)
  return sum;
}

sumPrimes(977);

/* A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes */
