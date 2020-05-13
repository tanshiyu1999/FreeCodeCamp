function convertHTML(str) {
  let newStr = "";
  for(let i = 0; i < str.length; i++) {
    switch(str[i]) {
      case "&":
        newStr += "&amp;" ;
        break;
      case "<":
        newStr += "&lt;" ;
        break;
      case ">":
        newStr += "&gt;" ;
        break;
      case "\"":
        newStr += "&quot;" ;
        break;
      case "\'":
        newStr += "&apos;" ;
        break;
      default:
        newStr += str[i];
        break;
    }


  }


  console.log(newStr)
  return str;
}

convertHTML("Dolce & Gabbana");
