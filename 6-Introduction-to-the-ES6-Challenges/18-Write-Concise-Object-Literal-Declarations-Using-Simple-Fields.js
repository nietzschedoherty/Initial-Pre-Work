// This lesson showed an easy way to define object literals in a function without having to use X : X.
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
   const person = (name, age, gender) => ({name, age, gender});



  // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
