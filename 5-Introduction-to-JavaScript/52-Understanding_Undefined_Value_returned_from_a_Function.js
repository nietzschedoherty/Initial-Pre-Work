// This lesson showed how a function does not need to return a defined value.
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
}


// Only change code above this line
var returnedValue = addFive();
