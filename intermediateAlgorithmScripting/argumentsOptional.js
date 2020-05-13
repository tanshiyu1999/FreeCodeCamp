function addTogether(...args) {
  console.log(typeof args[1])

  if (args.every( n => typeof n === number)) {
    console.log("undefined")
    return undefined;
  } else if (args.length == 1) {
    return function(b) {
      args.push(b);
      console.log(args.reduce((a,b) => a + b));
      return args.reduce( (a,b) => a + b,0);
    }
  } else if (args.length == 2) {
    console.log(args.reduce((a,b) => a + b));
    return args.reduce( (a,b) => a + b,0);
  }
}

addTogether(2, "3")
