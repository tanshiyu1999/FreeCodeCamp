 let arr =  [[3, [[4]]]];
 let arr2 = [];
 arr2.push(...arr.shift());
 arr.push(...arr2)

 console.log(arr)
