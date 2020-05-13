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
