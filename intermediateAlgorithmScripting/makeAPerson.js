var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  const parts = firstAndLast.split(' ');

  this.getFirstName = function() {
    return parts[0];
  };

  this.getLastName = function() {
    return parts[1];
  };

  this.getFullName = function() {
    return `${parts[0]} ${parts[1]}`;
  };

  this.setFirstName = function(first) {
    parts[0] = first;
  };

  this.setLastName = function(last) {
    parts[1] = last;
  };

  this.setFullName = function(firstAndLast) {
    const parts = firstAndLast.split(' ');
    this.setFirstName(parts[0]);
    this.setLastName(parts[1]);
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());

/*
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person
*/
