// This lesson introduced the === operator for comparison which will only return a true if the values and datatypes are the same.
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
