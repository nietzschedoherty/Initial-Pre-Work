// This exercise had us set up a look in the function that would look through the objects in an array and return a specific values based on a couple of conditions in a nested If statement.
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
 for (var i = 0; i < contacts.length; i++){
   if (contacts[i].firstName === name) {
     if (contacts[i].hasOwnProperty(prop)){
       return contacts[i][prop]
     } else {
       return "No such property";
     }
   }
  }
  return "No such contact";
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes"); 
