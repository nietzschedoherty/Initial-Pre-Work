// This lesson further illustrated that the local variable will take precedence over the global variable of the same name within the function where it is local.
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
