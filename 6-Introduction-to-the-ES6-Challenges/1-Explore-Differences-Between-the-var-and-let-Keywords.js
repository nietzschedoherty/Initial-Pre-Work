// This first lesson introduced the let keyword to be used instead of var to avoid accidental overwriting of a variable by declaring it twice.
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk(); 
