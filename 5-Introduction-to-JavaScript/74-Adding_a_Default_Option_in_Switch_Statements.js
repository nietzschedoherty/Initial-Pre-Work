// This lesson showed how to include a default statement at the end of a switch statement as a sort of else statement in case none of the other switch option conditions are met.
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff"
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
