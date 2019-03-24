// This lesson illustrated the scope of a variable as defined in a specific function, and how it acts locally within the function, but is unrecognized globally.
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "scope";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log(myVar);

// Now remove the console log line to pass the test
