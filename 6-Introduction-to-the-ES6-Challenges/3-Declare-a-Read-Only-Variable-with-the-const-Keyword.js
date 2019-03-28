// This lesson introduced the const variable for a delaration that we want to keep constant and not allow to be reassigned.  The noming conventions for constant variables is to use all uppercase letters.
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
