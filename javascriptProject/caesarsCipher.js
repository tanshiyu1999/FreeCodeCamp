function rot13(str) {

  const swap = {
    'A':'N',
    'N':'A',
    'B':'O',
    'O':'B',
    'C':'P',
    'P':'C',
    'D':'Q',
    'Q':'D',
    'E':'R',
    'R':'E',
    'F':'S',
    'S':'F',
    'G':'T',
    'T':'G',
    'H':'U',
    'U':'H',
    'I':'V',
    'V':'I',
    'J':'W',
    'W':'J',
    'K':'X',
    'X':'K',
    'L':'Y',
    'Y':'L',
    'M':'Z',
    'Z':'M',
  }

  let strSplit = str.split('');
  let final = strSplit.map(x=> (swap.hasOwnProperty(x)) ? swap[x] : x);
  console.log(final)

  return final.join('');
}

rot13("SERR PBQR PNZC");
