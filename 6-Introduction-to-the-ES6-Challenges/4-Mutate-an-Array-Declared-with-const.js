// This lesson showed that you can still manipulate elements in an array that is defined const.
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
s[0] = s[2];
s[1] = 5;
s[2] = 7;

  // change code above this line
}
editInPlace();
