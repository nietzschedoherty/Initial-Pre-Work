// This lesson illustrated how to use getters and setters to first return a value from and object, and to set a value for an object's variable.
function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat {
  constructor(Fahrenheit){
    this.Fahrenheit = Fahrenheit;
  }
  get temperature(){
    return 5 / 9 * (this.Fahrenheit - 32);
  }
  set temperature(celsius){
    this.Fahrenheit = celsius * 9.0 / 5 + 32;
  }
}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C   
