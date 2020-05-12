function diffArray(arr1, arr2) {
  var newArr = [];

  let checkArr1 = arr1.filter(i => !arr2.includes(i));
  let checkArr2 = arr2.filter(i => !arr1.includes(i));
  newArr = newArr.concat(checkArr1, checkArr2)
  console.log(newArr)
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
Note
You can return the array with its elements in any order.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays */
