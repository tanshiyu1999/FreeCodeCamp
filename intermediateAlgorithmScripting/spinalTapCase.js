function spinalCase(str) {



  var str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  var str = str.replace(/_/g, " ");
  var smallStr = str.toLowerCase();
  var final = smallStr.replace(/\s/g, "-");


  console.log(final)


  //create a space in every word



  return final;
}

//spinalCase("The_Andy_Griffith_Show")
//spinalCase("Teletubbies say Eh-oh")
//spinalCase("AllThe-small Things")
spinalCase("thisIsSpinalTap")



/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

I love regex so much! It's really fun after you undertand it!*/
