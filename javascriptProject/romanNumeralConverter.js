function convertToRoman(num) {
  let ones = num % 10;
  let tens = (num - ones) % 100;
  let hundreds = (num - tens - ones) % 1000;
  let thousands = (num - hundreds - tens - ones) % 10000;
  let onesSymbol = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let tensSymbol = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  let hundredsSymbol = ['','C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  let thousandsSymbol = 'M';
  let final = "";

  if ( thousands !== 0) {
    console.log(thousands)
    final = final + thousandsSymbol.repeat(thousands/1000);
  }

  if ( hundreds !== 0) {
    console.log(hundreds)
    final = final + hundredsSymbol[hundreds/100];
  }

  if ( tens !== 0) {
    console.log(tens)
    final = final + tensSymbol[tens/10];
  }

  if ( ones !== 0) {
    console.log(ones)
    final = final + onesSymbol[ones];
  }




console.log(final)





 return final;
}

convertToRoman(2524);
