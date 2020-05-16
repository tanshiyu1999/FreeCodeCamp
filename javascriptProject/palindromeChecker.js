function palindrome(str) {
  let lowerStr = str.toLowerCase();
  let final = lowerStr.replace(/[^a-z0-9]/g, '');
  let finalRev = final.split("").reverse().join('');
  console.log(final)
  console.log(finalRev)
  for (let i = 0; i < final.length; i++) {
    if (final[i] !== finalRev[i]) {
      console.log('false')
      return false;
    }
  }
  console.log('true')
  return true;
}



palindrome("1 eye for of 1 eye.")
