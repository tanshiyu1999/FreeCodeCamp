function telephoneCheck(str) {


  let allLen = str.length
  let digitLen = str.match(/[0-9]/g).length
  var spaceLen = 0;
  if (str.match(/\(/g)) {
    var leftBrac = str.match(/\(/g).length
  }
  if (str.match(/\)/g)) {
    var rightBrac = str.match(/\)/g).length
  }
  if (str.match(/[\s]/g)) {
    var spaceLen = str.match(/[\s]/g).length
  }

  if (digitLen < 10 || digitLen > 11) {
    return false;
  }

  // check for 11 digits
  if (digitLen == 11) {
    // Check 1st digit
    if (str[0] != 1) {
      return false;
    }
  }

  // check for bracket, whether they are the same or exceeding 1
  if (leftBrac != rightBrac) {
    return false;
  } else if (leftBrac > 1 || rightBrac > 1) {
    return false;
  }


  //check whether the last 4 digits are numbers
  var lastFour = str.match(/.{4}$/)
  if (!(/\d\d\d\d/.test(lastFour))) {
    return false;
  }

  if (/[!=]/.test(str)) {
    console.log("hello")
    return false;
  }

  console.log("true")

  return true;
}

telephoneCheck("1 555 555 5555");
