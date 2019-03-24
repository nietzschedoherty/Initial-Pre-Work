// This lesson was an exercise in how to use the push and shift commands.  I had to look at the solution as I had formatting issues, but I was able to follow and understand my mistakes.
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed; // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
