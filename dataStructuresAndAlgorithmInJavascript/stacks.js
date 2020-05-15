/* Stacks!
Last in first out.
If we pile a bunch of books on top of each other, the last one you pile up is the first to be removed.
*/

// functions: push, pop, peek, length

var Stack = function() {
  this.count=0;
  this.storage = {};

  // Adds a value onto the end of the Stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++
  }

  // Removes and returns the value at the end of the Stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function() {
    return this.count;
  }

  // Returns the value at the end of the Stack
  this.peek = function(value) {
    return this.storage[this.count-1];
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
