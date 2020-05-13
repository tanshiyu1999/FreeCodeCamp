function pairElement(str) {
  let final = [];
  let strArr = str.split('');

  for (let i = 0; i < strArr.length; i++ ) {
    switch(strArr[i]) {
      case "G":
        final.push(["G","C"])
        break;


    }
  }
  console.log(final)
  return str;
}

pairElement("GCG");
