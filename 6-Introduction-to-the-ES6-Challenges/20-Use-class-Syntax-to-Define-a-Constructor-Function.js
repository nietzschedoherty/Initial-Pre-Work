// This lesson showed how to use the class syntax to define a constructor function.  We used the word class to declare a function and then added a constructor().
function makeClass() {
  "use strict";
  /* Alter code below this line */
class Vegetable {
  constructor(name){
    this.name = name;
}
}
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
