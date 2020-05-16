/* Sets
Kind of like an array but no duplicate and no order.
Check to presence of an item
*/


/*
this.has => check for presence of element, returns boolean.
this.value => return all values
this.add => add an element to Set
this.delete / this.remove => remove an element from Set
this.size => return size of the collection, not a function but a property in es6
this.union => return union of two Sets
this.intersection => combine 2 set and returns the intersection as a new set
this.difference => return the difference of two sets as a new set
this.subset => test if set is subset of a different sets
*/

var setA = new Set();
var setB = new Set();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
