function steamrollArray(arr) {
  let final = []
  var i = 0;
  while(arr.length > 0){
    if (!(Array.isArray(arr[0]))) {
      final.push(arr.shift());
    } else { //the little shit is an array, need to check if there is a single stuff inside or multiple stuff
      if(arr[0].length == 0) {
        arr.shift();
      } else if (arr[0].length == 1) {
        arr.unshift(...arr.shift());
      } else {
        let arr2 = [];
        arr2.push(...arr.shift());
        arr.push(...arr2)
      }
    }
  }
  console.log(final)
  return final
}

steamrollArray([[["a"]], [["b"]]]);
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]]);
steamrollArray([1, {}, [3, [[4]]]]);

/*
Flatten a nested array. You must account for varying levels of nesting.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller
*/
