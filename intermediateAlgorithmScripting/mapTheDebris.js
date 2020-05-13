function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let arrLen = arr.length;
  let final = [];

  for ( let i = 0; i < arrLen; i++ ) {
    var earth = earthRadius + arr[0].avgAlt
    delete arr[0].avgAlt;
    let t = (2 * Math.PI) * Math.sqrt(Math.pow(earth, 3) / GM );
    arr[0].orbitalPeriod = Math.round(t);
    final.push(arr.shift());
  }


  console.log(final);
  return final;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])

/*
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
You can read about orbital periods on Wikipedia.
The values should be rounded to the nearest whole number. The body being orbited is Earth.
The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris
*/
